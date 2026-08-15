import { expect, test, type Page, type TestInfo } from '@playwright/test';
import {
  bodyPaths,
  enBodyPaths,
  legacyHashTargets,
  pairedLanguagePaths,
  primaryPaths,
  productionOrigin,
  publicPartnerSlugs,
  zhBodyPaths,
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

test('all 38 body URLs render complete, paired, indexable documents', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(240_000);

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

  expect(canonicalURLs.size).toBe(38);
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
      expect(
        href,
        `${path} does not expose legacy hash navigation`,
      ).not.toMatch(/^#\//);
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

  expect(internalPaths.size).toBeGreaterThanOrEqual(38);
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

test('admissions uses real contact links and donation has no demo payment form', async ({
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
    test(`${path} progressively filters 21 cards as 3/4/4/2/5/3`, async ({
      page,
    }) => {
      await page.goto(path);
      await expect(page.locator('[data-teacher-card]')).toHaveCount(21);
      await expect(
        page.locator('[data-filter-group="teachers"] [data-filter="all"]'),
      ).toHaveAttribute('aria-selected', 'true');
      expect(await visibleCount(page, '[data-teacher-card]')).toBe(21);

      for (const [filter, expected] of [
        ['anthro', 3],
        ['culture', 4],
        ['arts', 4],
        ['language', 2],
        ['life', 5],
        ['management', 3],
        ['all', 21],
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

test('every legacy hash maps exactly and unknown hashes are ignored', async ({
  page,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  test.setTimeout(120_000);

  for (const [hash, target] of Object.entries(legacyHashTargets)) {
    // Begin outside the home document so each legacy URL models a fresh
    // bookmark/navigation rather than an in-document hash-only mutation.
    await page.goto('/about/', { waitUntil: 'domcontentloaded' });
    await page.goto(`/${hash}`, { waitUntil: 'domcontentloaded' });
    await expect
      .poll(
        () => {
          const url = new URL(page.url());
          return `${url.pathname}${url.hash}`;
        },
        { message: `${hash} maps to ${target}` },
      )
      .toBe(target);
  }

  await page.goto('/#/not-a-real-route');
  await page.waitForLoadState('networkidle');
  expect(new URL(page.url()).pathname).toBe('/');
  expect(new URL(page.url()).hash).toBe('#/not-a-real-route');
});

test('without JavaScript, all course and teacher content and footer contacts remain readable', async ({
  browser,
}, testInfo) => {
  onlyProject(testInfo, desktopProject);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto('/courses/');
  await expect(page.locator('[data-course-card]')).toHaveCount(16);
  expect(await visibleCount(page, '[data-course-card]')).toBe(16);

  await page.goto('/teachers/');
  await expect(page.locator('[data-teacher-card]')).toHaveCount(21);
  expect(await visibleCount(page, '[data-teacher-card]')).toBe(21);

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
  test.setTimeout(300_000);

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

test('route fixture itself preserves the locked 19 + 19 inventory', () => {
  expect(zhBodyPaths).toHaveLength(19);
  expect(enBodyPaths).toHaveLength(19);
  expect(bodyPaths).toHaveLength(38);
  expect(publicPartnerSlugs).toHaveLength(13);
  expect(new Set(bodyPaths).size).toBe(38);
});
