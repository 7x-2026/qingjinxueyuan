import { expect, test, type Page, type TestInfo } from '@playwright/test';
import {
  bodyPaths,
  enBodyPaths,
  pairedLanguagePaths,
  primaryPaths,
  productionOrigin,
  publicHetuSlugs,
  publicPartnerGalleryCounts,
  publicPartnerSlugs,
  publicPartnerWebsites,
  publicTeacherSlugs,
  zhBodyPaths,
  zhTeacherPaths,
} from './fixtures/routes';

const desktopProject = 'desktop-chromium';
const mobileProject = 'mobile-chromium';

function onlyProject(testInfo: TestInfo, project: string): void {
  test.skip(testInfo.project.name !== project, `Covered once in ${project}`);
}

async function expectLoadedImages(page: Page): Promise<void> {
  const images = page.locator('img');
  expect(await images.count()).toBeGreaterThan(0);

  await images.evaluateAll((elements) => {
    for (const image of elements as HTMLImageElement[]) {
      image.loading = 'eager';
    }
  });
  await expect
    .poll(() =>
      images.evaluateAll((elements) =>
        (elements as HTMLImageElement[]).every(
          (image) =>
            image.complete && image.naturalWidth > 0 && image.naturalHeight > 0,
        ),
      ),
    )
    .toBe(true);
}

async function visibleCount(page: Page, selector: string): Promise<number> {
  return page.locator(selector).evaluateAll(
    (elements) =>
      elements.filter((element) => {
        const htmlElement = element as HTMLElement;
        return (
          !htmlElement.hidden &&
          getComputedStyle(htmlElement).display !== 'none'
        );
      }).length,
  );
}

test('all 100 body URLs render complete, paired, indexable documents', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(420_000);

  const titles = new Map<'zh' | 'en', Set<string>>([
    ['zh', new Set()],
    ['en', new Set()],
  ]);
  const descriptions = new Map<'zh' | 'en', Set<string>>([
    ['zh', new Set()],
    ['en', new Set()],
  ]);
  const canonicalURLs = new Set<string>();

  for (const path of bodyPaths) {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    const onConsole = (message: { type(): string; text(): string }) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    };
    const onPageError = (error: Error) => pageErrors.push(error.message);
    page.on('console', onConsole);
    page.on('pageerror', onPageError);

    const response = await page.goto(path, { waitUntil: 'networkidle' });
    expect(response?.status(), path).toBe(200);

    const language = path.startsWith('/en/') ? 'en' : 'zh';
    await expect(page.locator('html')).toHaveAttribute(
      'lang',
      language === 'zh' ? 'zh-CN' : 'en',
    );
    await expect(page.locator('main')).toBeVisible();

    const title = (await page.title()).trim();
    expect(title.length, `${path} title`).toBeGreaterThan(3);
    expect(
      titles.get(language)?.has(title),
      `${path} has a unique ${language} title`,
    ).toBe(false);
    titles.get(language)?.add(title);

    const description = (
      (await page
        .locator('meta[name="description"]')
        .getAttribute('content')) ?? ''
    ).trim();
    expect(description.length, `${path} description`).toBeGreaterThan(10);
    expect(
      descriptions.get(language)?.has(description),
      `${path} has a unique ${language} description`,
    ).toBe(false);
    descriptions.get(language)?.add(description);

    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute('href');
    expect(canonical, `${path} canonical`).toBe(`${productionOrigin}${path}`);
    expect(
      canonicalURLs.has(canonical ?? ''),
      `${path} canonical is unique`,
    ).toBe(false);
    canonicalURLs.add(canonical ?? '');

    const paired = pairedLanguagePaths(path);
    await expect(
      page.locator('link[rel="alternate"][hreflang="zh-CN"]'),
    ).toHaveAttribute('href', `${productionOrigin}${paired.zh}`);
    await expect(
      page.locator('link[rel="alternate"][hreflang="en"]'),
    ).toHaveAttribute('href', `${productionOrigin}${paired.en}`);

    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      canonical ?? '',
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /^https:\/\/qingjinacademy\.org\/.+/,
    );

    await expectLoadedImages(page);
    expect(consoleErrors, `${path} console errors`).toEqual([]);
    expect(pageErrors, `${path} uncaught errors`).toEqual([]);
    page.off('console', onConsole);
    page.off('pageerror', onPageError);
  }

  expect(canonicalURLs.size).toBe(100);
});

test('top-level pages render at a mobile browser viewport', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, mobileProject);

  for (const path of [
    ...primaryPaths,
    ...primaryPaths.map((path) => (path === '/' ? '/en/' : `/en${path}`)),
  ]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    await expect(page.locator('main')).toBeVisible();
  }
});

test('primary navigation marks the current page and language links are real anchors', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  for (const path of [
    ...primaryPaths,
    ...primaryPaths.map((item) => (item === '/' ? '/en/' : `/en${item}`)),
  ]) {
    await page.goto(path);
    const current = page.locator('[data-site-nav] a[aria-current="page"]');
    await expect(current).toHaveCount(1);
    expect(
      new URL((await current.getAttribute('href')) ?? '', productionOrigin)
        .pathname,
    ).toBe(path);

    const paired = pairedLanguagePaths(path);
    const languageLink = page.locator('header a[hreflang]').first();
    await expect(languageLink).toHaveCount(1);
    expect(
      new URL((await languageLink.getAttribute('href')) ?? '', productionOrigin)
        .pathname,
    ).toBe(path.startsWith('/en/') ? paired.zh : paired.en);
  }
});

test('teacher cards link to bilingual static profiles', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  for (const [path, prefix] of [
    ['/', '/teachers/'],
    ['/en/', '/en/teachers/'],
  ] as const) {
    await page.goto(path);
    const links = page.locator(`.teacher-card a[href^="${prefix}"]`);
    await expect(links).toHaveCount(6);
  }

  for (const [path, prefix] of [
    ['/teachers/', '/teachers/'],
    ['/en/teachers/', '/en/teachers/'],
  ] as const) {
    await page.goto(path);
    const links = page.locator(`.teacher-card a[href^="${prefix}"]`);
    await expect(links).toHaveCount(24);
    const imageFrames = page.locator('.teacher-card__image');
    await expect(imageFrames).toHaveCount(24);
    expect(
      await imageFrames.evaluateAll(
        (items) =>
          items.filter((item) => {
            const { width, height } = item.getBoundingClientRect();
            return Math.abs(width - height) > 1;
          }).length,
      ),
    ).toBe(0);
    expect(
      await links.evaluateAll((items) =>
        items.map((item) => item.getAttribute('href')),
      ),
    ).toEqual(publicTeacherSlugs.map((slug) => `${prefix}${slug}/`));
  }
});

test('all teacher profiles expose complete localized content and pairing', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(240_000);

  for (const zhPath of zhTeacherPaths) {
    for (const path of [zhPath, `/en${zhPath}`]) {
      await page.goto(path);
      await expect(page.locator('.teacher-detail h1')).not.toHaveText('');
      await expect(
        page.locator('.teacher-detail__heading strong'),
      ).not.toHaveText('');
      expect(
        await page.locator('.teacher-detail__body p').count(),
      ).toBeGreaterThan(0);
      await expect(page.locator('.teacher-detail__portrait img')).toBeVisible();
      const paired = pairedLanguagePaths(path);
      const languageLink = page.locator('header a[hreflang]').first();
      expect(
        new URL(
          (await languageLink.getAttribute('href')) ?? '',
          productionOrigin,
        ).pathname,
      ).toBe(path.startsWith('/en/') ? paired.zh : paired.en);
    }
  }
});

test('partner cards, official websites, and galleries match the public inventory', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(180_000);

  for (const [languageRoot, partnerPrefix] of [
    ['/', '/partners/'],
    ['/en/', '/en/partners/'],
  ] as const) {
    await page.goto(languageRoot);
    await expect(
      page.locator(`.partner-logo-card a[href^="${partnerPrefix}"]`),
    ).toHaveCount(13);
  }

  for (const [index, slug] of publicPartnerSlugs.entries()) {
    await page.goto(`/partners/${slug}/`);
    const website = page.locator(`a[href="${publicPartnerWebsites[index]}"]`);
    await expect(website).toHaveCount(1);
    await expect(website).toHaveAttribute('target', '_blank');
    await expect(website).toHaveAttribute('rel', /noopener/);
    await expect(website).toHaveAttribute('rel', /noreferrer/);
    await expect(page.locator('.partner-gallery img')).toHaveCount(
      publicPartnerGalleryCounts[index],
    );
  }
});

test('the footer and World HeTu pages expose the complete bilingual topic structure', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  for (const [path, prefix] of [
    ['/', '/hetu/'],
    ['/en/', '/en/hetu/'],
  ] as const) {
    await page.goto(path);
    await expect(page.locator(`footer a[href="${prefix}"]`)).toHaveCount(1);
    await page.goto(prefix);
    await expect(page.locator('[data-hetu-overview] h1')).not.toHaveText('');
    const cards = page.locator('.hetu-card');
    await expect(cards).toHaveCount(6);
    await expect(cards.first()).toHaveAttribute('href', `${prefix}approach/`);
    expect(
      await cards.evaluateAll((items) =>
        items.map((item) => item.getAttribute('href')),
      ),
    ).toEqual(publicHetuSlugs.map((slug) => `${prefix}${slug}/`));
  }

  for (const slug of publicHetuSlugs) {
    for (const path of [`/hetu/${slug}/`, `/en/hetu/${slug}/`]) {
      await page.goto(path);
      await expect(
        page.locator(`[data-hetu-detail="${slug}"] h1`),
      ).not.toHaveText('');
      await expect(page.locator('.back-link')).toHaveAttribute(
        'href',
        path.startsWith('/en/') ? '/en/hetu/' : '/hetu/',
      );
    }
  }

  await page.goto('/hetu/participants/');
  await expect(page.locator('a[href="/teachers/lin-yuan/"]')).toHaveCount(1);
  await page.goto('/en/hetu/participants/');
  await expect(page.locator('a[href="/en/teachers/lin-yuan/"]')).toHaveCount(1);

  await page.goto('/hetu/practice/');
  await expect(page.locator('video')).toHaveAttribute(
    'src',
    '/media/hetu/world-hetu-feedback.mp4',
  );
  await expect(page.locator('video')).toHaveAttribute('preload', 'metadata');
  expect(await page.locator('video[autoplay]').count()).toBe(0);
  expect(await page.locator('[src*="mmbiz.qpic.cn"]').count()).toBe(0);

  await page.goto('/hetu/admissions/');
  await expect(page.locator('main')).toContainText('20,000 元人民币');
  await expect(page.locator('main')).toContainText(
    '北京春之谷文化艺术有限公司',
  );
  await expect(page.locator('main a[href="tel:+8618810816390"]')).toHaveCount(
    1,
  );
  expect(await page.locator('main form, main input, main button').count()).toBe(
    0,
  );
});

test('every internal document link resolves and retains trailing slashes', async ({
  page,
  request,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(180_000);

  const internalPaths = new Set<string>();
  for (const path of bodyPaths) {
    await page.goto(path);
    const hrefs = await page
      .locator('a[href]')
      .evaluateAll((anchors) =>
        anchors.map((anchor) => anchor.getAttribute('href') ?? ''),
      );

    for (const href of hrefs) {
      expect(href, `${path} does not use javascript links`).not.toMatch(
        /^javascript:/i,
      );
      expect(href, `${path} uses document paths for navigation`).not.toMatch(
        /^#\//,
      );
      if (!href || href.startsWith('#') || /^(mailto|tel):/i.test(href))
        continue;
      const url = new URL(href, productionOrigin);
      if (url.origin !== productionOrigin) continue;
      expect(url.pathname, `${path} -> ${href} uses a trailing slash`).toMatch(
        /\/$/,
      );
      internalPaths.add(`${url.pathname}${url.search}`);
    }
  }

  expect(internalPaths.size).toBeGreaterThanOrEqual(80);
  for (const path of internalPaths) {
    const response = await request.get(path);
    expect(response.status(), path).toBeLessThan(400);
  }
});

test('sitemap and robots expose exactly the public route inventory', async ({
  request,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  const robotsResponse = await request.get('/robots.txt');
  expect(robotsResponse.status()).toBe(200);
  const robots = await robotsResponse.text();
  expect(robots).toContain('User-agent: *');
  expect(robots).toContain('Allow: /');
  expect(robots).toContain(`Sitemap: ${productionOrigin}/sitemap-index.xml`);

  const indexResponse = await request.get('/sitemap-index.xml');
  expect(indexResponse.status()).toBe(200);
  const index = await indexResponse.text();
  const sitemapURLs = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  expect(sitemapURLs.length).toBeGreaterThan(0);

  const publishedURLs = new Set<string>();
  for (const sitemapURL of sitemapURLs) {
    const sitemapPath = new URL(sitemapURL).pathname;
    const response = await request.get(sitemapPath);
    expect(response.status(), sitemapPath).toBe(200);
    const xml = await response.text();
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g))
      publishedURLs.add(match[1]);
  }

  expect([...publishedURLs].sort()).toEqual(
    bodyPaths.map((path) => `${productionOrigin}${path}`).sort(),
  );
  expect([...publishedURLs].join('\n')).not.toMatch(/sekem/i);
});

test('unknown pages use the custom 404 and SEKEM stays unlinked', async ({
  page,
  request,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  for (const path of [
    '/missing-page/',
    '/partners/sekem/',
    '/en/partners/sekem/',
    '/teachers/not-a-teacher/',
    '/en/teachers/not-a-teacher/',
    '/hetu/not-a-topic/',
    '/en/hetu/not-a-topic/',
  ]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(404);
    await expect(page.locator('main')).toBeVisible();
    expect((await page.title()).trim().length).toBeGreaterThan(0);
    await expect(page.locator('main a[href="/"]')).toHaveCount(1);
    await expect(page.locator('main a[href="/en/"]')).toHaveCount(1);
  }

  for (const path of bodyPaths) {
    await page.goto(path);
    await expect(page.locator('a[href*="sekem" i]')).toHaveCount(0);
  }

  const sitemap = await request.get('/sitemap-0.xml');
  expect(await sitemap.text()).not.toMatch(/sekem/i);
});

test('admissions and donation expose direct contact links without payment controls', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);

  for (const path of ['/admissions/', '/en/admissions/']) {
    await page.goto(path);
    expect(
      await page.locator('main a[href^="tel:"]').count(),
    ).toBeGreaterThanOrEqual(2);
    expect(
      await page.locator('main a[href^="mailto:"]').count(),
    ).toBeGreaterThanOrEqual(1);
  }

  for (const path of ['/donate/', '/en/donate/']) {
    await page.goto(path);
    await expect(
      page.locator('main form, main input, main button'),
    ).toHaveCount(0);
    expect(
      await page.locator('main a[href^="tel:"]').count(),
    ).toBeGreaterThanOrEqual(2);
    expect(
      await page.locator('main a[href^="mailto:"]').count(),
    ).toBeGreaterThanOrEqual(1);
  }
});

test.describe('course filters', () => {
  for (const path of ['/courses/', '/en/courses/']) {
    test(`${path} progressively filters 16 cards as 8/5/3`, async ({
      page,
    }) => {
      await page.goto(path);
      const cards = page.locator('[data-course-card]');
      await expect(cards).toHaveCount(16);
      await expect(
        page.locator('[data-filter-group="courses"] [data-filter="ewip"]'),
      ).toHaveAttribute('aria-selected', 'true');
      expect(await visibleCount(page, '[data-course-card]')).toBe(8);

      for (const [filter, expected] of [
        ['ewip', 8],
        ['fsp', 5],
        ['pcp', 3],
      ] as const) {
        const tab = page.locator(
          `[data-filter-group="courses"] [data-filter="${filter}"]`,
        );
        await tab.click();
        await expect(tab).toHaveAttribute('aria-selected', 'true');
        expect(await visibleCount(page, '[data-course-card]')).toBe(expected);
      }

      const firstTab = page
        .locator('[data-filter-group="courses"] [role="tab"]')
        .first();
      await firstTab.focus();
      await firstTab.press('ArrowRight');
      await expect(
        page.locator('[data-filter-group="courses"] [role="tab"]').nth(1),
      ).toBeFocused();
    });
  }
});

test.describe('teacher filters', () => {
  for (const path of ['/teachers/', '/en/teachers/']) {
    test(`${path} progressively filters 24 cards as 5/3/5/1/7/3`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator('[data-teacher-card]')).toHaveCount(24);
      await expect(
        page.locator('[data-filter-group="teachers"] [data-filter="all"]'),
      ).toHaveAttribute('aria-selected', 'true');
      expect(await visibleCount(page, '[data-teacher-card]')).toBe(24);

      for (const [filter, expected] of [
        ['anthro', 5],
        ['culture', 3],
        ['arts', 5],
        ['language', 1],
        ['life', 7],
        ['management', 3],
        ['all', 24],
      ] as const) {
        const tab = page.locator(
          `[data-filter-group="teachers"] [data-filter="${filter}"]`,
        );
        await tab.click();
        await expect(tab).toHaveAttribute('aria-selected', 'true');
        expect(await visibleCount(page, '[data-teacher-card]')).toBe(expected);
      }
    });
  }
});

test('mobile menu and contact panels support focus, Escape, and mutual exclusion', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, mobileProject);
  await page.goto('/');

  const menuToggle = page.locator('[data-menu-toggle]');
  const navigation = page.locator('[data-site-nav]');
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  await menuToggle.click();
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'true');
  await expect(navigation).toBeVisible();
  await expect(navigation.locator('a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuToggle).toBeFocused();

  const phoneTrigger = page.locator('[data-contact-trigger="phone"]');
  const wechatTrigger = page.locator('[data-contact-trigger="wechat"]');
  const phonePanel = page.locator('[data-contact-panel="phone"]');
  const wechatPanel = page.locator('[data-contact-panel="wechat"]');

  await phoneTrigger.click();
  await expect(phoneTrigger).toHaveAttribute('aria-expanded', 'true');
  await expect(phonePanel).toBeVisible();
  await expect(
    phonePanel.locator('a, button, [tabindex="0"]').first(),
  ).toBeFocused();

  await wechatTrigger.click();
  await expect(wechatTrigger).toHaveAttribute('aria-expanded', 'true');
  await expect(wechatPanel).toBeVisible();
  await expect(phoneTrigger).toHaveAttribute('aria-expanded', 'false');
  await expect(phonePanel).not.toBeVisible();

  await page.keyboard.press('Escape');
  await expect(wechatTrigger).toHaveAttribute('aria-expanded', 'false');
  await expect(wechatTrigger).toBeFocused();
});

test('back-to-top restores the document to the top', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about/');
  await page.evaluate(() =>
    window.scrollTo(0, document.documentElement.scrollHeight),
  );

  const control = page.locator('[data-back-to-top]');
  await expect(control).toBeVisible();
  await control.click();
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeLessThanOrEqual(1);
});

test('without JavaScript, primary and World HeTu content and footer contacts remain readable', async ({
  browser,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto('/courses/');
  await expect(page.locator('[data-course-card]')).toHaveCount(16);
  expect(await visibleCount(page, '[data-course-card]')).toBe(16);

  await page.goto('/teachers/');
  await expect(page.locator('[data-teacher-card]')).toHaveCount(24);
  expect(await visibleCount(page, '[data-teacher-card]')).toBe(24);

  await page.goto('/teachers/ted-warren/');
  await expect(page.locator('.teacher-detail__body p')).not.toHaveCount(0);
  await expect(page.locator('.teacher-detail__body')).toBeVisible();

  await page.goto('/hetu/');
  await expect(page.locator('.hetu-card')).toHaveCount(6);
  await page.goto('/hetu/curriculum/');
  await expect(page.locator('.hetu-content-section')).not.toHaveCount(0);
  await expect(page.locator('.hetu-table-wrap')).toHaveCount(1);
  await page.goto('/en/hetu/admissions/');
  await expect(page.locator('main')).toContainText('RMB 20,000');

  for (const path of [
    '/partners/spring-valley-community/',
    '/en/partners/spring-valley-community/',
  ]) {
    await page.goto(path);
    await expect(page.locator('.partner-detail__body p')).not.toHaveCount(0);
    await expect(page.locator('.partner-detail__body')).toBeVisible();
  }

  await page.goto('/');
  expect(
    await page.locator('[data-site-nav] a').count(),
  ).toBeGreaterThanOrEqual(primaryPaths.length - 1);
  expect(await page.locator('a[href^="tel:"]').count()).toBeGreaterThanOrEqual(
    2,
  );
  expect(
    await page.locator('a[href^="mailto:"]').count(),
  ).toBeGreaterThanOrEqual(1);

  await context.close();
});

test('all documents avoid horizontal overflow at five audit widths', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(600_000);

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of bodyPaths) {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      const overflow = await page.evaluate(() =>
        Math.ceil(
          document.documentElement.scrollWidth -
            document.documentElement.clientWidth,
        ),
      );
      expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});

test('route fixture matches the 50 + 50 public inventory', () => {
  expect(zhBodyPaths).toHaveLength(50);
  expect(enBodyPaths).toHaveLength(50);
  expect(bodyPaths).toHaveLength(100);
  expect(publicPartnerSlugs).toHaveLength(13);
  expect(publicTeacherSlugs).toHaveLength(24);
  expect(publicHetuSlugs).toHaveLength(6);
  expect(new Set(bodyPaths).size).toBe(100);
});
