import type { ImageMetadata } from 'astro';
import { contact } from './contact';
import { courseCategories, courses } from './courses';
import { navigationItems } from './navigation';
import {
  partners,
  publicPartnerSlugs,
  unlinkedPartnerDetails,
} from './partners';
import { homePurposes, programs } from './programs';
import { allSiteImages } from './site';
import { teacherCategories, teachers } from './teachers';
import type { LocalizedText } from './types';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[content validation] ${message}`);
  }
}

function assertLocalized(label: string, value: LocalizedText): void {
  invariant(
    value.zh.trim().length > 0,
    `${label} is missing required Chinese text`,
  );
  invariant(
    value.en === undefined || value.en.trim().length > 0,
    `${label} has an empty English value`,
  );
}

function assertImage(label: string, image: ImageMetadata): void {
  invariant(
    typeof image.src === 'string' && image.src.length > 0,
    `${label} has no static image source`,
  );
  invariant(
    image.width > 0 && image.height > 0,
    `${label} has invalid image dimensions`,
  );
}

function assertOrderedSlugs(
  label: string,
  items: readonly { readonly slug: string; readonly order: number }[],
): void {
  const slugs = new Set<string>();
  const orders = new Set<number>();

  items.forEach((item, index) => {
    invariant(
      slugPattern.test(item.slug),
      `${label} slug "${item.slug}" is invalid`,
    );
    invariant(
      !slugs.has(item.slug),
      `${label} slug "${item.slug}" is duplicated`,
    );
    invariant(
      Number.isInteger(item.order) && item.order > 0,
      `${label} order must be a positive integer`,
    );
    invariant(
      !orders.has(item.order),
      `${label} order ${item.order} is duplicated`,
    );
    invariant(
      item.order === index + 1,
      `${label} order must be continuous and match declared order`,
    );
    slugs.add(item.slug);
    orders.add(item.order);
  });
}

export function assertPartnerRouteSlugs(routeSlugs: readonly string[]): void {
  invariant(
    routeSlugs.length === partners.length,
    'partner route count must equal public partner count',
  );
  invariant(
    new Set(routeSlugs).size === routeSlugs.length,
    'partner route slugs must be unique',
  );

  const expected = new Set(publicPartnerSlugs);
  routeSlugs.forEach((slug) => {
    invariant(expected.has(slug), `unexpected partner route slug "${slug}"`);
    invariant(slug !== 'sekem', 'SEKEM must not have a public partner route');
  });
  publicPartnerSlugs.forEach((slug) => {
    invariant(
      routeSlugs.includes(slug),
      `public partner "${slug}" is missing a static route`,
    );
  });
}

export function assertContentIntegrity(): true {
  assertOrderedSlugs('course', courses);
  assertOrderedSlugs('teacher', teachers);
  assertOrderedSlugs('partner', partners);
  assertOrderedSlugs('program', programs);
  assertOrderedSlugs('home purpose', homePurposes);

  const courseCategoryIds = new Set(courseCategories.map(({ id }) => id));
  invariant(
    courseCategoryIds.size === 3,
    'course categories must contain exactly ewip, fsp, and pcp',
  );
  invariant(
    ['ewip', 'fsp', 'pcp'].every((id) =>
      courseCategoryIds.has(id as (typeof courseCategories)[number]['id']),
    ),
    'course category identifiers are incomplete',
  );
  courseCategories.forEach((category) =>
    assertLocalized(`course category ${category.id}`, category.title),
  );
  courses.forEach((course) => {
    invariant(
      courseCategoryIds.has(course.category),
      `course "${course.slug}" has an invalid category`,
    );
    assertLocalized(`course ${course.slug} title`, course.title);
    assertLocalized(`course ${course.slug} description`, course.description);
    invariant(
      !('en' in course.title),
      `course "${course.slug}" title must omit English text so the Chinese fallback remains active`,
    );
    assertImage(`course ${course.slug}`, course.image);
  });
  invariant(
    courses.filter(({ category }) => category === 'ewip').length === 8,
    'EWIP must contain 8 courses',
  );
  invariant(
    courses.filter(({ category }) => category === 'fsp').length === 5,
    'FSP must contain 5 courses',
  );
  invariant(
    courses.filter(({ category }) => category === 'pcp').length === 3,
    'PCP must contain 3 courses',
  );

  const teacherCategoryIds = new Set(teacherCategories.map(({ id }) => id));
  invariant(
    teacherCategoryIds.size === 7 && teacherCategoryIds.has('all'),
    'teacher filters are incomplete',
  );
  teacherCategories.forEach((category) =>
    assertLocalized(`teacher category ${category.id}`, category.title),
  );
  teachers.forEach((teacher) => {
    invariant(
      teacherCategoryIds.has(teacher.category),
      `teacher "${teacher.slug}" has an invalid category`,
    );
    assertLocalized(`teacher ${teacher.slug} name`, teacher.name);
    assertLocalized(`teacher ${teacher.slug} role`, teacher.role);
    invariant(
      !('en' in teacher.role),
      `teacher "${teacher.slug}" role must omit English text so the Chinese fallback remains active`,
    );
    assertImage(`teacher ${teacher.slug}`, teacher.image);
  });
  const expectedTeacherCounts = {
    anthro: 3,
    culture: 4,
    arts: 4,
    language: 2,
    life: 5,
    management: 3,
  } as const;
  Object.entries(expectedTeacherCounts).forEach(([category, expected]) => {
    invariant(
      teachers.filter((teacher) => teacher.category === category).length ===
        expected,
      `teacher category "${category}" must contain ${expected} entries`,
    );
  });

  invariant(partners.length === 13, 'there must be exactly 13 public partners');
  partners.forEach((partner) => {
    invariant(
      partner.name.trim().length > 0,
      `partner "${partner.slug}" has no name`,
    );
    assertLocalized(`partner ${partner.slug} caption`, partner.caption);
    assertLocalized(
      `partner ${partner.slug} detail title`,
      partner.detailTitle,
    );
    invariant(
      partner.paragraphs.length > 0,
      `partner "${partner.slug}" has no detail paragraphs`,
    );
    partner.paragraphs.forEach((paragraph, index) =>
      assertLocalized(
        `partner ${partner.slug} paragraph ${index + 1}`,
        paragraph,
      ),
    );
    assertImage(`partner ${partner.slug}`, partner.logo);
  });
  const publicParagraphCount = partners.reduce(
    (sum, partner) => sum + partner.paragraphs.length,
    0,
  );
  invariant(
    publicParagraphCount === 34,
    'public partner details must contain 34 paragraphs',
  );
  invariant(
    partners.filter(({ group }) => group === 'community').length === 5,
    'there must be 5 community partners',
  );
  invariant(
    partners.filter(({ group }) => group === 'school').length === 8,
    'there must be 8 school partners',
  );

  invariant(
    unlinkedPartnerDetails.length === 1,
    'there must be exactly one unlinked partner detail',
  );
  const sekem = unlinkedPartnerDetails[0];
  invariant(sekem.id === 'sekem', 'the unlinked detail must be SEKEM');
  invariant(slugPattern.test(sekem.id), 'SEKEM internal identifier is invalid');
  invariant(
    !publicPartnerSlugs.includes(sekem.id),
    'SEKEM must not appear in public partner data',
  );
  assertLocalized('SEKEM title', sekem.title);
  invariant(sekem.paragraphs.length === 4, 'SEKEM must contain 4 paragraphs');
  sekem.paragraphs.forEach((paragraph, index) =>
    assertLocalized(`SEKEM paragraph ${index + 1}`, paragraph),
  );
  invariant(
    publicParagraphCount + sekem.paragraphs.length === 38,
    'partner content inventory must contain 38 paragraphs',
  );

  programs.forEach((program) => {
    assertLocalized(`program ${program.slug} title`, program.title);
    assertLocalized(`program ${program.slug} age`, program.age);
    assertLocalized(`program ${program.slug} text`, program.text);
    assertImage(`program ${program.slug}`, program.image);
  });
  homePurposes.forEach((purpose) => {
    assertLocalized(`home purpose ${purpose.slug} title`, purpose.title);
    assertLocalized(`home purpose ${purpose.slug} text`, purpose.text);
    assertImage(`home purpose ${purpose.slug}`, purpose.image);
  });

  navigationItems.forEach((item) =>
    assertLocalized(`navigation ${item.page}`, item.label),
  );
  contact.locations.forEach((location, index) =>
    assertLocalized(`contact location ${index + 1}`, location),
  );
  invariant(
    contact.phones.length === 2,
    'contact must contain two phone numbers',
  );
  invariant(contact.email.trim().length > 0, 'contact email is required');
  assertImage('contact QR code', contact.qrCode);

  const siteImageInventory = [
    ...allSiteImages,
    ...courses.map(({ image }) => image),
    ...teachers.map(({ image }) => image),
    ...partners.map(({ logo }) => logo),
  ];
  siteImageInventory.forEach((image, index) =>
    assertImage(`site image ${index + 1}`, image),
  );
  invariant(
    siteImageInventory.length === 66,
    'site image inventory must contain exactly 66 assets',
  );
  invariant(
    new Set(siteImageInventory.map(({ src }) => src)).size === 66,
    'site image imports must resolve to 66 unique assets',
  );

  assertPartnerRouteSlugs(publicPartnerSlugs);
  return true;
}

export const contentValidation = assertContentIntegrity();
