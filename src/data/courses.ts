import anthroposophicArchitectureImage from '../assets/images/courses/anthroposophic-architecture.png';
import anthroposophicMedicineImage from '../assets/images/courses/anthroposophic-medicine.png';
import artTherapyImage from '../assets/images/courses/art-therapy.png';
import biodynamicFarmingImage from '../assets/images/courses/biodynamic-farming.png';
import communityManagementImage from '../assets/images/courses/community-management.png';
import curativeEducationImage from '../assets/images/courses/curative-education.png';
import daoistMedicineImage from '../assets/images/courses/daoist-medicine.png';
import daoistMusicImage from '../assets/images/courses/daoist-music.png';
import eurythmyImage from '../assets/images/courses/eurythmy.png';
import lifeBiographyImage from '../assets/images/courses/life-biography.png';
import lightAndSpiritImage from '../assets/images/courses/light-and-spirit.png';
import martialArtsAndHarmonyImage from '../assets/images/courses/martial-arts-and-harmony.png';
import sensoryParkImage from '../assets/images/courses/sensory-park.png';
import sixBasicExercisesImage from '../assets/images/courses/six-basic-exercises.png';
import studyTravelImage from '../assets/images/courses/study-travel.png';
import waldorfEducationImage from '../assets/images/courses/waldorf-education.png';
import type { Course, CourseCategory } from './types';

export const courseCategories = [
  { id: 'ewip', title: { zh: '东西方高中', en: 'East-West High School' } },
  { id: 'fsp', title: { zh: '人类哲学基础年', en: 'Foundation Year' } },
  { id: 'pcp', title: { zh: '专业板块', en: 'Professional Tracks' } },
] as const satisfies readonly CourseCategory[];

export const courses = [
  {
    slug: 'life-biography',
    order: 1,
    title: { zh: '生命自传' },
    description: {
      zh: '生命自传课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Review your own life and discover how the past shaped who you are.',
    },
    category: 'ewip',
    image: lifeBiographyImage,
  },
  {
    slug: 'six-basic-exercises',
    order: 2,
    title: { zh: '六个基本练习' },
    description: {
      zh: '六个基本练习课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Practice attention, will, feeling, positivity, openness, and balance.',
    },
    category: 'ewip',
    image: sixBasicExercisesImage,
  },
  {
    slug: 'light-and-spirit',
    order: 3,
    title: { zh: '光与灵的练习' },
    description: {
      zh: '光与灵的练习课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Observe nature and cultivate inner clarity through outdoor practice.',
    },
    category: 'ewip',
    image: lightAndSpiritImage,
  },
  {
    slug: 'martial-arts-and-harmony',
    order: 4,
    title: { zh: '武艺运动与身心和谐' },
    description: {
      zh: '武艺运动与身心和谐课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Build coordination, courage, and physical awareness through movement.',
    },
    category: 'ewip',
    image: martialArtsAndHarmonyImage,
  },
  {
    slug: 'daoist-medicine',
    order: 5,
    title: { zh: '道医' },
    description: {
      zh: '道医课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Traditional healing wisdom and embodied health practices.',
    },
    category: 'ewip',
    image: daoistMedicineImage,
  },
  {
    slug: 'daoist-music',
    order: 6,
    title: { zh: '道乐' },
    description: {
      zh: '道乐课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Sound, rhythm, and listening as a path of inner education.',
    },
    category: 'ewip',
    image: daoistMusicImage,
  },
  {
    slug: 'biodynamic-farming',
    order: 7,
    title: { zh: '活力农耕' },
    description: {
      zh: '活力农耕课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Work with land, seasons, plants, and practical ecological care.',
    },
    category: 'ewip',
    image: biodynamicFarmingImage,
  },
  {
    slug: 'study-travel',
    order: 8,
    title: { zh: '行走与研学' },
    description: {
      zh: '行走与研学课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Explore culture, geography, and society through study journeys.',
    },
    category: 'ewip',
    image: studyTravelImage,
  },
  {
    slug: 'waldorf-education',
    order: 9,
    title: { zh: '华德福教育' },
    description: {
      zh: '华德福教育课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Child development, education, and holistic pedagogy.',
    },
    category: 'fsp',
    image: waldorfEducationImage,
  },
  {
    slug: 'anthroposophic-medicine',
    order: 10,
    title: { zh: '人智医学' },
    description: {
      zh: '人智医学课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Anthroposophic approaches to human health and care.',
    },
    category: 'fsp',
    image: anthroposophicMedicineImage,
  },
  {
    slug: 'curative-education',
    order: 11,
    title: { zh: '疗愈教育（康复村）' },
    description: {
      zh: '疗愈教育（康复村）课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Curative education, social therapy, and community life.',
    },
    category: 'fsp',
    image: curativeEducationImage,
  },
  {
    slug: 'art-therapy',
    order: 12,
    title: { zh: '艺术治疗' },
    description: {
      zh: '艺术治疗课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Use painting, modeling, and music as therapeutic practice.',
    },
    category: 'fsp',
    image: artTherapyImage,
  },
  {
    slug: 'eurythmy',
    order: 13,
    title: { zh: '优律诗美（音语舞）' },
    description: {
      zh: '优律诗美（音语舞）课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Movement art connecting speech, music, and gesture.',
    },
    category: 'fsp',
    image: eurythmyImage,
  },
  {
    slug: 'anthroposophic-architecture',
    order: 14,
    title: { zh: '人智学建筑与艺术设计' },
    description: {
      zh: '人智学建筑与艺术设计课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Architecture and design rooted in living forms.',
    },
    category: 'pcp',
    image: anthroposophicArchitectureImage,
  },
  {
    slug: 'sensory-park',
    order: 15,
    title: { zh: '感官公园' },
    description: {
      zh: '感官公园课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Design of sensory-rich ecological environments.',
    },
    category: 'pcp',
    image: sensoryParkImage,
  },
  {
    slug: 'community-management',
    order: 16,
    title: { zh: '社区管理与发展' },
    description: {
      zh: '社区管理与发展课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。',
      en: 'Practice community governance and development.',
    },
    category: 'pcp',
    image: communityManagementImage,
  },
] as const satisfies readonly Course[];
