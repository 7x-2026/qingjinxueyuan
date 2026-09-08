import type { Language, NavigationItem, PageKey } from './types';

export const navigationItems = [
  { page: 'about', label: { zh: '关于青衿', en: 'About' } },
  { page: 'courses', label: { zh: '课程', en: 'Courses' } },
  { page: 'teachers', label: { zh: '师资', en: 'Faculty' } },
  { page: 'consult', label: { zh: '咨询/报名', en: 'Admissions' } },
  { page: 'donate', label: { zh: '捐赠', en: 'Donate' } },
] as const satisfies readonly NavigationItem[];

const pagePaths = {
  home: '/',
  about: '/about/',
  courses: '/courses/',
  teachers: '/teachers/',
  consult: '/admissions/',
  donate: '/donate/',
} as const satisfies Record<PageKey, `/${string}`>;

export function getPagePath(page: PageKey, language: Language): string {
  const path = pagePaths[page];
  return language === 'en' ? (path === '/' ? '/en/' : `/en${path}`) : path;
}

export function getPartnerPath(slug: string, language: Language): string {
  return `${language === 'en' ? '/en' : ''}/partners/${slug}/`;
}

export function getTeacherPath(slug: string, language: Language): string {
  return `${language === 'en' ? '/en' : ''}/teachers/${slug}/`;
}
