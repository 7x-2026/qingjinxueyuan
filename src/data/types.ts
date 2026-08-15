import type { ImageMetadata } from 'astro';

export type Language = 'zh' | 'en';

export type LocalizedText = Readonly<{
  zh: string;
  en?: string;
}>;

export type PageKey =
  'home' | 'about' | 'courses' | 'teachers' | 'consult' | 'donate';

export type CourseCategoryId = 'ewip' | 'fsp' | 'pcp';
export type TeacherCategoryId =
  'anthro' | 'culture' | 'arts' | 'language' | 'life' | 'management';
export type TeacherFilterId = 'all' | TeacherCategoryId;
export type PartnerGroup = 'community' | 'school';

export interface NavigationItem {
  readonly page: Exclude<PageKey, 'home'>;
  readonly label: LocalizedText;
}

export interface ContactPhone {
  readonly display: string;
  readonly href: `tel:${string}`;
}

export interface ContactInfo {
  readonly phones: readonly ContactPhone[];
  readonly email: string;
  readonly emailHref: `mailto:${string}`;
  readonly locations: readonly LocalizedText[];
  readonly qrCode: ImageMetadata;
}

export interface CourseCategory {
  readonly id: CourseCategoryId;
  readonly title: LocalizedText;
}

export interface Course {
  readonly slug: string;
  readonly order: number;
  readonly title: LocalizedText;
  readonly description: LocalizedText;
  readonly category: CourseCategoryId;
  readonly image: ImageMetadata;
}

export interface TeacherCategory {
  readonly id: TeacherFilterId;
  readonly title: LocalizedText;
}

export interface Teacher {
  readonly slug: string;
  readonly order: number;
  readonly name: LocalizedText;
  readonly role: LocalizedText;
  readonly category: TeacherCategoryId;
  readonly image: ImageMetadata;
}

export interface Partner {
  readonly slug: string;
  readonly order: number;
  readonly name: string;
  readonly caption: LocalizedText;
  readonly group: PartnerGroup;
  readonly logo: ImageMetadata;
  readonly detailTitle: LocalizedText;
  readonly paragraphs: readonly LocalizedText[];
}

export interface UnlinkedPartnerDetail {
  readonly id: string;
  readonly title: LocalizedText;
  readonly paragraphs: readonly LocalizedText[];
}

export interface Program {
  readonly slug: string;
  readonly order: number;
  readonly title: LocalizedText;
  readonly age: LocalizedText;
  readonly text: LocalizedText;
  readonly image: ImageMetadata;
}

export interface HomePurpose {
  readonly slug: string;
  readonly order: number;
  readonly title: LocalizedText;
  readonly text: LocalizedText;
  readonly image: ImageMetadata;
}
