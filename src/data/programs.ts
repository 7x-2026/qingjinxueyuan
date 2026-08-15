import anthroposophicMedicineImage from '../assets/images/courses/anthroposophic-medicine.png';
import eurythmyImage from '../assets/images/courses/eurythmy.png';
import lightAndSpiritImage from '../assets/images/courses/light-and-spirit.png';
import daoistMusicImage from '../assets/images/courses/daoist-music.png';
import { siteImages } from './site';
import type { HomePurpose, Program } from './types';

export const homePurposes = [
  {
    slug: 'individual-spiritual-growth',
    order: 1,
    title: { zh: '服务于个体心灵觉醒', en: 'Individual Spiritual Growth' },
    text: {
      zh: '培养完整而自由的人',
      en: 'Cultivating whole and free human beings',
    },
    image: lightAndSpiritImage,
  },
  {
    slug: 'community-consciousness',
    order: 2,
    title: { zh: '服务于社群意识提升', en: 'Human Consciousness' },
    text: {
      zh: '生态社区的建设者和工作者',
      en: 'Builders and workers of ecological communities',
    },
    image: eurythmyImage,
  },
  {
    slug: 'east-west-cultural-fusion',
    order: 3,
    title: { zh: '服务于东西方文化融合', en: 'East-West Cultural Fusion' },
    text: {
      zh: '东西方文化的交流使者',
      en: 'Ambassadors of cultural exchange',
    },
    image: anthroposophicMedicineImage,
  },
  {
    slug: 'global-ecological-civilization',
    order: 4,
    title: { zh: '服务于世界生态文明', en: 'Global Ecological Civilization' },
    text: {
      zh: '世界生态文明的推动者',
      en: 'Advocates for ecological civilization',
    },
    image: daoistMusicImage,
  },
] as const satisfies readonly HomePurpose[];

export const programs = [
  {
    slug: 'ewip',
    order: 1,
    title: { zh: '预备班 · EWIP', en: 'Preparatory Program · EWIP' },
    age: { zh: '14-18岁', en: 'Ages 14-18' },
    text: {
      zh: '完成高中课程，学习外语，培养独立生活能力。',
      en: 'High school study, language learning, and independent living.',
    },
    image: siteImages.enrollment[0],
  },
  {
    slug: 'fsp',
    order: 2,
    title: { zh: '筑基班 · FSP', en: 'Foundation Program · FSP' },
    age: { zh: '19-20岁', en: 'Ages 19-20' },
    text: {
      zh: '学习东西方文化与人智学，拓展艺术和动手实践。',
      en: 'East-West culture, anthroposophy, arts, and practical work.',
    },
    image: siteImages.enrollment[1],
  },
  {
    slug: 'pcp',
    order: 3,
    title: { zh: '专业班 · PCP', en: 'Professional Program · PCP' },
    age: { zh: '21-23岁', en: 'Ages 21-23' },
    text: {
      zh: '根据专业方向，在全球选择导师与社区进行实践。',
      en: 'Choose mentors and communities globally by professional direction.',
    },
    image: siteImages.enrollment[2],
  },
] as const satisfies readonly Program[];
