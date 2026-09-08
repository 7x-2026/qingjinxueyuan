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

export const publicTeacherSlugs = [
  'ted-warren',
  'micheal-d-aleo',
  'karl-schurman',
  'xinchen-daoist',
  'zang-yibing',
  'lin-yuan',
  'bo-werner-eriksson',
  'jeff-martin',
  'pan-jianfeng',
  'song-jinchao',
  'liu-yuting',
  'chai-jian',
  'zheng-le',
  'zhang-lingzhi',
  'jin-zhenbao',
  'wu-fan',
  'hu-haiyan',
  'he-xiaoguo',
  'zhang-xinxin',
  'wang-shiyi',
  'alexa',
] as const;

export const publicPartnerWebsites = [
  'https://threefold.org/our-community/about-us/',
  'https://hawthornevalley.org/',
  'https://camphillvillage.org/',
  'https://goetheanum.ch/en',
  'https://www.ytterjarna.se/',
  'https://www.iuav.it/it',
  'https://www.alanus.edu/',
  'https://www.uni-weimar.de/de/universitaet/start/',
  'https://www.sunbridge.edu/',
  'https://www.scuolasteinermilano.it/',
  'https://www.eurythmy.org/',
  'https://hu.edu.eg/',
  'https://camphill.edu/',
] as const;

export const publicPartnerGalleryCounts = [
  1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 4,
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
export const zhTeacherPaths = publicTeacherSlugs.map(
  (slug) => `/teachers/${slug}/` as const,
);
export const enPrimaryPaths = primaryPaths.map((path) =>
  path === '/' ? '/en/' : `/en${path}`,
);
export const enPartnerPaths = publicPartnerSlugs.map(
  (slug) => `/en/partners/${slug}/` as const,
);
export const enTeacherPaths = publicTeacherSlugs.map(
  (slug) => `/en/teachers/${slug}/` as const,
);

export const zhBodyPaths = [
  ...primaryPaths,
  ...zhPartnerPaths,
  ...zhTeacherPaths,
] as const;
export const enBodyPaths = [
  ...enPrimaryPaths,
  ...enPartnerPaths,
  ...enTeacherPaths,
] as const;
export const bodyPaths = [...zhBodyPaths, ...enBodyPaths] as const;

export function pairedLanguagePaths(path: string): { zh: string; en: string } {
  return path.startsWith('/en/')
    ? { zh: path.slice(3) || '/', en: path }
    : { zh: path, en: path === '/' ? '/en/' : `/en${path}` };
}
