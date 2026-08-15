export const productionOrigin = 'https://qingjinacademy.org';

export const publicPartnerSlugs = [
  'spring-valley-community',
  'hawthorne-valley',
  'camphill-copake',
  'goetheanum',
  'ytterjarna',
  'iuav',
  'alanus',
  'bauhaus-weimar',
  'sunbridge',
  'scuola-rudolf-steiner',
  'spring-valley-eurythmy',
  'heliopolis',
  'camphill-academy',
] as const;

export const primaryPaths = [
  '/',
  '/about/',
  '/courses/',
  '/teachers/',
  '/admissions/',
  '/donate/',
] as const;

export const zhPartnerPaths = publicPartnerSlugs.map(
  (slug) => `/partners/${slug}/` as const,
);
export const enPrimaryPaths = primaryPaths.map((path) =>
  path === '/' ? '/en/' : `/en${path}`,
);
export const enPartnerPaths = publicPartnerSlugs.map(
  (slug) => `/en/partners/${slug}/` as const,
);

export const zhBodyPaths = [...primaryPaths, ...zhPartnerPaths] as const;
export const enBodyPaths = [...enPrimaryPaths, ...enPartnerPaths] as const;
export const bodyPaths = [...zhBodyPaths, ...enBodyPaths] as const;

export function pairedLanguagePaths(path: string): { zh: string; en: string } {
  return path.startsWith('/en/')
    ? { zh: path.slice(3) || '/', en: path }
    : { zh: path, en: path === '/' ? '/en/' : `/en${path}` };
}

export const legacyHashTargets = {
  '#/': '/',
  '#/home': '/',
  '#/about': '/about/',
  '#/courses': '/courses/',
  '#/teachers': '/teachers/',
  '#/consult': '/admissions/',
  '#/donate': '/donate/',
  ...Object.fromEntries(
    publicPartnerSlugs.map(
      (slug) => [`#/partner/${slug}`, `/partners/${slug}/`] as const,
    ),
  ),
} as Readonly<Record<string, string>>;
