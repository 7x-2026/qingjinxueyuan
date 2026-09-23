import aboutCommunity from '../assets/images/about/community.png';
import aboutDevelopment01 from '../assets/images/about/development-01.png';
import aboutDevelopment02 from '../assets/images/about/development-02.png';
import aboutEnrollment01 from '../assets/images/about/enrollment-01.png';
import aboutEnrollment02 from '../assets/images/about/enrollment-02.png';
import aboutEnrollment03 from '../assets/images/about/enrollment-03.png';
import aboutGallery01 from '../assets/images/about/gallery-01.png';
import aboutGallery02 from '../assets/images/about/gallery-02.png';
import aboutGallery03 from '../assets/images/about/gallery-03.png';
import aboutHero from '../assets/images/about/hero.png';
import admissionsHero from '../assets/images/admissions/hero.png';
import admissionsSurveyQr from '../assets/images/admissions/survey-qr.png';
import coursesHero from '../assets/images/courses/hero.png';
import donateHero from '../assets/images/donate/hero.png';
import homeHero from '../assets/images/shared/home-hero.png';
import qingjinAcademyLogo from '../assets/images/shared/qingjin-academy-logo.png';
import wechatQr from '../assets/images/shared/wechat-qr.png';
import teachersHero from '../assets/images/teachers/hero.png';

export const site = {
  name: '青衿学院',
  englishName: 'Qingjin Academy',
  url: 'https://qingjinacademy.org',
  defaultLanguage: 'zh',
  languages: ['zh', 'en'],
} as const;

export const siteImages = {
  qingjinAcademyLogo,
  homeHero,
  wechatQr,
  aboutHero,
  coursesHero,
  teachersHero,
  admissionsHero,
  admissionsSurveyQr,
  donateHero,
  aboutCommunity,
  aboutGallery: [aboutGallery01, aboutGallery02, aboutGallery03],
  enrollment: [aboutEnrollment01, aboutEnrollment02, aboutEnrollment03],
  development: [aboutDevelopment01, aboutDevelopment02],
} as const;

export const allSiteImages = [
  siteImages.qingjinAcademyLogo,
  siteImages.homeHero,
  siteImages.wechatQr,
  siteImages.aboutHero,
  siteImages.coursesHero,
  siteImages.teachersHero,
  siteImages.admissionsHero,
  siteImages.admissionsSurveyQr,
  siteImages.donateHero,
  siteImages.aboutCommunity,
  ...siteImages.aboutGallery,
  ...siteImages.enrollment,
  ...siteImages.development,
] as const;
