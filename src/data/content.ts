export type Lang = 'zh' | 'en';

export type LocalizedText = {
  zh: string;
  en: string;
};

export type CourseCategory = {
  id: string;
  title: LocalizedText;
};

export type CourseItem = {
  title: LocalizedText;
  description: LocalizedText;
  category: string;
  image: string;
};

export type TeacherCategory = {
  id: string;
  title: LocalizedText;
};

export type Teacher = {
  name: string;
  role: LocalizedText;
  category: string;
  image: string;
};

export type Partner = {
  name: string;
  caption: LocalizedText;
  group: 'community' | 'school';
};

export type ContactInfo = {
  phones: string[];
  email: string;
  locations: LocalizedText[];
  qrCode: string;
};

const assetModules = import.meta.glob('../../sucai/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const asset = (path: string) => {
  const value = assetModules[`../../sucai/${path}`];
  if (!value) {
    throw new Error(`Missing asset: ${path}`);
  }
  return value;
};

export const images = {
  homeHero: asset('shouye/shouye.png'),
  qr: asset('shouye/code@1.5x.png'),
  aboutHero: asset('about/主图@1.5x.png'),
  courseHero: asset('kecheng/主图.png'),
  teacherHero: asset('shizi/Banner-老师@1.5x.png'),
  consultHero: asset('zixunyubaoming/主图@1.5x.png'),
  donateHero: asset('juanzeng/主图@1.5x.png'),
  community: asset('about/青衿社区@1.5x.png'),
  global: asset('about/全球合作.png'),
  aboutGallery: [
    asset('about/1关于青衿@1.5x.png'),
    asset('about/2关于青衿@1.5x.png'),
    asset('about/3关于青衿@1.5x.png'),
  ],
  enrollment: [
    asset('about/1招生计划@1.5x.png'),
    asset('about/2招生计划@1.5x.png'),
    asset('about/3招生计划@1.5x.png'),
  ],
  development: [
    asset('about/1培养方向@1.5x.png'),
    asset('about/2培养方向@1.5x.png'),
  ],
};

export const navItems = [
  { page: 'about', label: { zh: '关于青衿', en: 'About' } },
  { page: 'courses', label: { zh: '课程', en: 'Courses' } },
  { page: 'teachers', label: { zh: '师资', en: 'Faculty' } },
  { page: 'consult', label: { zh: '咨询/报名', en: 'Admissions' } },
  { page: 'donate', label: { zh: '捐赠', en: 'Donate' } },
] as const;

export const contact: ContactInfo = {
  phones: ['18810816390（中国地区）', '+1-3476016788（美国地区）'],
  email: 'ningyuanyu@yahoo.com',
  locations: [
    { zh: '中国 · 湖北武当山', en: 'Wudang Mountain, Hubei, China' },
    { zh: '美国 · 波士顿', en: 'Boston, United States' },
  ],
  qrCode: images.qr,
};

export const homePurposes = [
  {
    title: { zh: '服务于个体心灵觉醒', en: 'Individual Spiritual Growth' },
    text: { zh: '培养完整而自由的人', en: 'Cultivating whole and free human beings' },
    image: asset('kecheng/光与灵的练习@1.5x.png'),
  },
  {
    title: { zh: '服务于社群意识提升', en: 'Human Consciousness' },
    text: { zh: '生态社区的建设者和工作者', en: 'Builders and workers of ecological communities' },
    image: asset('kecheng/优律诗美（音语舞）@1.5x.png'),
  },
  {
    title: { zh: '服务于东西方文化融合', en: 'East-West Cultural Fusion' },
    text: { zh: '东西方文化的交流使者', en: 'Ambassadors of cultural exchange' },
    image: asset('kecheng/人智医学@1.5x.png'),
  },
  {
    title: { zh: '服务于世界生态文明', en: 'Global Ecological Civilization' },
    text: { zh: '世界生态文明的推动者', en: 'Advocates for ecological civilization' },
    image: asset('kecheng/道乐@1.5x.png'),
  },
];

export const programs = [
  {
    title: { zh: '预备班 · EWIP', en: 'Preparatory Program · EWIP' },
    age: { zh: '14-18岁', en: 'Ages 14-18' },
    text: { zh: '完成高中课程，学习外语，培养独立生活能力。', en: 'High school study, language learning, and independent living.' },
    image: images.enrollment[0],
  },
  {
    title: { zh: '筑基班 · FSP', en: 'Foundation Program · FSP' },
    age: { zh: '19-20岁', en: 'Ages 19-20' },
    text: { zh: '学习东西方文化与人智学，拓展艺术和动手实践。', en: 'East-West culture, anthroposophy, arts, and practical work.' },
    image: images.enrollment[1],
  },
  {
    title: { zh: '专业班 · PCP', en: 'Professional Program · PCP' },
    age: { zh: '21-23岁', en: 'Ages 21-23' },
    text: { zh: '根据专业方向，在全球选择导师与社区进行实践。', en: 'Choose mentors and communities globally by professional direction.' },
    image: images.enrollment[2],
  },
];

export const courseCategories: CourseCategory[] = [
  { id: 'ewip', title: { zh: '东西方高中', en: 'East-West High School' } },
  { id: 'fsp', title: { zh: '人类哲学基础年', en: 'Foundation Year' } },
  { id: 'pcp', title: { zh: '专业板块', en: 'Professional Tracks' } },
];

export const courses: CourseItem[] = [
  ['生命自传', 'Review your own life and discover how the past shaped who you are.', 'ewip', '生命自传@1.5x.png'],
  ['六个基本练习', 'Practice attention, will, feeling, positivity, openness, and balance.', 'ewip', '六个基本练习@1.5x.png'],
  ['光与灵的练习', 'Observe nature and cultivate inner clarity through outdoor practice.', 'ewip', '光与灵的练习@1.5x.png'],
  ['武艺运动与身心和谐', 'Build coordination, courage, and physical awareness through movement.', 'ewip', '武艺运动与身心和谐@1.5x.png'],
  ['道医', 'Traditional healing wisdom and embodied health practices.', 'ewip', '道医@1.5x.png'],
  ['道乐', 'Sound, rhythm, and listening as a path of inner education.', 'ewip', '道乐@1.5x.png'],
  ['活力农耕', 'Work with land, seasons, plants, and practical ecological care.', 'ewip', '活力农耕@1.5x.png'],
  ['行走与研学', 'Explore culture, geography, and society through study journeys.', 'ewip', '行走与研学@1.5x.png'],
  ['华德福教育', 'Child development, education, and holistic pedagogy.', 'fsp', '华德福教育@1.5x.png'],
  ['人智医学', 'Anthroposophic approaches to human health and care.', 'fsp', '人智医学@1.5x.png'],
  ['疗愈教育（康复村）', 'Curative education, social therapy, and community life.', 'fsp', '疗愈教育（康复村）@1.5x.png'],
  ['艺术治疗', 'Use painting, modeling, and music as therapeutic practice.', 'fsp', '艺术治疗@1.5x.png'],
  ['优律诗美（音语舞）', 'Movement art connecting speech, music, and gesture.', 'fsp', '优律诗美（音语舞）@1.5x.png'],
  ['人智学建筑与艺术设计', 'Architecture and design rooted in living forms.', 'pcp', '人智学建筑与艺术设计@1.5x.png'],
  ['感官公园', 'Design of sensory-rich ecological environments.', 'pcp', '感官公园@1.5x.png'],
  ['社区管理与发展', 'Practice community governance and development.', 'pcp', '社区管理与发展@1.5x.png'],
].map(([zh, en, category, file]) => ({
  title: { zh, en },
  description: { zh: `${zh}课程融合观察、体验、讨论和实践，帮助学生把知识转化为真实能力。`, en },
  category,
  image: asset(`kecheng/${file}`),
}));

export const teacherCategories: TeacherCategory[] = [
  { id: 'all', title: { zh: '全部', en: 'All' } },
  { id: 'anthro', title: { zh: '人智学', en: 'Anthroposophy' } },
  { id: 'culture', title: { zh: '中国传统文化', en: 'Chinese Culture' } },
  { id: 'arts', title: { zh: '艺术', en: 'Arts' } },
  { id: 'language', title: { zh: '语言', en: 'Language' } },
  { id: 'life', title: { zh: '生命科学', en: 'Life Science' } },
  { id: 'management', title: { zh: '经济管理', en: 'Management' } },
];

export const teachers: Teacher[] = [
  ['Ted Warren', '人智学导师，高中、大学人文教师', 'anthro', 'Ted Warren.png'],
  ["Micheal D'Aleo", '人智学导师，自然、物理、天文教师', 'anthro', "Micheal D'Aleo.png"],
  ['Karl Schurman', '7-12年级历史、英语教师，教学督导', 'anthro', 'Karl Schurman.png'],
  ['信辰道长', '龙门派第二十五代弟子，武当武术传人', 'culture', '信辰道长.png'],
  ['臧艺兵', '原华中师范大学音乐学院教授、院长', 'arts', '臧艺兵.png'],
  ['林源', '青衿学院创始人，春之谷学院院长', 'management', '林源.png'],
  ['Bo Werner Eriksson', '在欧洲学习华德福绘画和艺术教师', 'arts', 'Bo Werner Eriksson.png'],
  ['Jeff Martin', '美国芝加哥华德福教师和讲主讲', 'language', 'Jeff Martin.png'],
  ['潘剑峰', '社区管理和发展专家、心性陪伴者', 'management', '潘剑峰.png'],
  ['宋进潮', '襄阳民间文学研究所所长、民歌传承人', 'culture', '宋进潮.png'],
  ['刘昱廷', '全真武当山道医及太乙五行拳导师', 'life', '刘昱廷.png'],
  ['柴建', '三丰自然派第二十六代传人、道医', 'life', '柴建.png'],
  ['郑乐', '张三丰历史文化研究会副会长', 'culture', '郑乐.png'],
  ['张灵芝', '出生于书画世家，深耕艺术教育', 'arts', '张灵芝.png'],
  ['金振豹', '幼子夏狄守护中心负责人', 'life', '金振豹.png'],
  ['吴璠', '应用经济学博士，系统士大学工商管理博导', 'management', '吴璠.png'],
  ['胡海燕', '医学博士，人类医学研究、写作翻译', 'life', '胡海燕.png'],
  ['何孝国', '儒释道三家传统文化与传统身心行者', 'culture', '何孝国.png'],
  ['张馨心', '文艺创作者，集体导演于一身', 'arts', '张馨心.png'],
  ['王诗溢', '神经生物学博士，科学成长社群发起人', 'life', '王诗溢.png'],
  ['ALEXA', '心理学专业毕业，资深国际德语教师', 'language', 'ALEXA.png'],
].map(([name, role, category, file]) => ({
  name,
  role: { zh: role, en: role },
  category,
  image: asset(`shizi/${file}`),
}));

export const partners: Partner[] = [
  { name: 'Spring Valley Apartments', caption: { zh: '美国纽约春之谷', en: 'Spring Valley, New York' }, group: 'community' },
  { name: 'Hawthorne Valley', caption: { zh: '美国纽约霍桑山谷社区', en: 'Hawthorne Valley, New York' }, group: 'community' },
  { name: 'Camphill Village', caption: { zh: '美国科培克康复社区', en: 'Camphill community' }, group: 'community' },
  { name: 'GOETHEANUM', caption: { zh: '瑞士歌德馆', en: 'Goetheanum, Switzerland' }, group: 'community' },
  { name: 'IUAV', caption: { zh: '威尼斯建筑大学IUAV', en: 'IUAV University of Venice' }, group: 'school' },
  { name: 'alanus hochschule', caption: { zh: '德国阿兰努斯大学', en: 'Alanus University, Germany' }, group: 'school' },
  { name: 'Bauhaus-Universitat Weimar', caption: { zh: '德国国立魏玛大学', en: 'Bauhaus University Weimar' }, group: 'school' },
  { name: 'Sunbridge Institute', caption: { zh: '美国纽约日桥学院', en: 'Sunbridge Institute' }, group: 'school' },
  { name: 'Hill College', caption: { zh: '美国狄豪希尔学院', en: 'Hill College, United States' }, group: 'school' },
];

export const pageCopy = {
  hero: {
    homeTitle: { zh: '青青子衿 悠悠我心', en: 'Young Scholars, Enduring Aspiration' },
    homeText: { zh: '青衿学院将成为自我发展的驱动者、生态社区建设者、东西方文化的交流使者和社会进步促进者。', en: 'Qingjin Academy cultivates self-directed learners, ecological community builders, and bridges between Eastern and Western cultures.' },
    quote: { zh: '这是一条全人发展与觉知之路，也是不断寻找人生使命，从而迈向人世间的真自由之路', en: 'A path of whole-person development, awareness, life purpose, and genuine freedom in the world.' },
  },
  about: {
    title: { zh: '关于青衿', en: 'About Qingjin' },
    subtitle: { zh: 'About Spring Valley Youth Academy', en: 'Spring Valley Youth Academy' },
    body: {
      zh: '“青青子衿，悠悠我心。” 青衿学院的名字来自于与天地合其德，与日月合其明的天人合一精神。学院是非利性办学机构，学生在美国波士顿和中国武当山完成两年基础年课程，随后进入全球合作学校、社区与工作场域继续实践。',
      en: 'The academy name comes from a classical image of young seekers and enduring aspiration. Qingjin is a non-profit educational initiative where students study in Boston and Wudang Mountain, then continue learning through global partner schools, communities, and work placements.',
    },
    enrollment: {
      zh: '青衿学院招收14-23岁的青少年。14-18岁进入预备班，19-20岁完成基础课程，21-23岁进入专业方向与全球实践。',
      en: 'Qingjin welcomes young people ages 14 to 23. Students enter a preparatory program, foundation year, and professional track according to age and readiness.',
    },
    development: {
      zh: '学院帮助学生发展身体、语言、艺术、文化理解、独立生活与实践能力，逐步找到自己的兴趣、使命与专业方向。',
      en: 'The academy helps students develop bodily awareness, language, arts, cultural understanding, independent living, and practical ability while discovering vocation.',
    },
    community: {
      zh: '围绕青衿学院，我们将在武当山建立小型人智科学社区，连接武术、农耕、道医、冥想、艺术疗愈与养生，让东方文化与人智科学共同服务未来。',
      en: 'Around the academy, a small anthroposophic community in Wudang will connect martial arts, farming, healing, contemplative practice, and arts for the future.',
    },
  },
  sections: {
    purpose: { zh: '我们的教育宗旨', en: 'Our Education Purpose' },
    enrollment: { zh: '招生计划', en: 'Enrollment Plan' },
    courses: { zh: '我们的课程', en: 'Our Courses' },
    teachers: { zh: '我们的老师', en: 'Our Teachers' },
    communities: { zh: '合作的全球生态社区', en: 'Collaborative Global Ecological Community' },
    schools: { zh: '合作的全球高等学校', en: 'Partnering Global Universities' },
  },
};
