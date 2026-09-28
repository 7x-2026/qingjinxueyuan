import type { ImageMetadata } from 'astro';
import hetuLogo from '../assets/images/hetu/hetu-logo.png';
import approach01 from '../assets/images/hetu/approach/approach-01.jpg';
import approach02 from '../assets/images/hetu/approach/approach-02.jpg';
import approach03 from '../assets/images/hetu/approach/approach-03.jpg';
import approach04 from '../assets/images/hetu/approach/approach-04.jpg';
import culture01 from '../assets/images/hetu/curriculum/culture-01.jpg';
import culture02 from '../assets/images/hetu/curriculum/culture-02.jpg';
import culture03 from '../assets/images/hetu/curriculum/culture-03.jpg';
import culture04 from '../assets/images/hetu/curriculum/culture-04.jpg';
import culture05 from '../assets/images/hetu/curriculum/culture-05.jpg';
import culture06 from '../assets/images/hetu/curriculum/culture-06.jpg';
import development01 from '../assets/images/hetu/curriculum/development-01.jpg';
import development02 from '../assets/images/hetu/curriculum/development-02.jpg';
import development03 from '../assets/images/hetu/curriculum/development-03.jpg';
import development04 from '../assets/images/hetu/curriculum/development-04.jpg';
import development05 from '../assets/images/hetu/curriculum/development-05.png';
import development06 from '../assets/images/hetu/curriculum/development-06.png';
import development07 from '../assets/images/hetu/curriculum/development-07.png';
import main01 from '../assets/images/hetu/curriculum/main-01.png';
import main02 from '../assets/images/hetu/curriculum/main-02.jpg';
import practice01 from '../assets/images/hetu/curriculum/practice-01.jpg';
import practice02 from '../assets/images/hetu/curriculum/practice-02.jpg';
import practice03 from '../assets/images/hetu/curriculum/practice-03.jpg';
import practice04 from '../assets/images/hetu/curriculum/practice-04.jpg';
import practice05 from '../assets/images/hetu/curriculum/practice-05.jpg';
import practice06 from '../assets/images/hetu/curriculum/practice-06.jpg';
import studyTravel from '../assets/images/hetu/curriculum/study-travel.jpg';
import participants01 from '../assets/images/hetu/participants/participants-01.jpg';
import linYuan01 from '../assets/images/hetu/participants/lin-yuan-01.png';
import linYuan02 from '../assets/images/hetu/participants/lin-yuan-02.jpg';
import linYuan03 from '../assets/images/hetu/participants/lin-yuan-03.jpg';
import linYuan04 from '../assets/images/hetu/participants/lin-yuan-04.jpg';
import linYuan05 from '../assets/images/hetu/participants/lin-yuan-05.jpg';
import feedbackPoster from '../assets/images/hetu/practice/feedback-video-poster.jpg';
import feedback01 from '../assets/images/hetu/practice/practice-01.jpg';
import feedback02 from '../assets/images/hetu/practice/practice-02.jpg';
import type { BilingualText, HetuImage, HetuPage, HetuSection } from './types';

function text(zh: string, en: string): BilingualText {
  return { zh, en };
}

function image(
  asset: ImageMetadata,
  zhAlt: string,
  enAlt: string,
  zhCaption?: string,
  enCaption?: string,
): HetuImage {
  return {
    image: asset,
    alt: text(zhAlt, enAlt),
    ...(zhCaption && enCaption ? { caption: text(zhCaption, enCaption) } : {}),
  };
}

const approachImages = [
  image(
    approach01,
    '四象与汉字的图示',
    'Illustration of the four symbols and Chinese characters',
  ),
  image(
    approach02,
    '汉字与象数关系图',
    'Diagram of Chinese characters and symbolic numbers',
  ),
  image(approach03, '课程相关的图示', 'Course-related visual study'),
  image(
    approach04,
    '课程内容与方法图示',
    'Visual study of course content and method',
  ),
] as const;

const cultureImages = [
  image(
    culture01,
    '人智学与中国文化深化课程手绘图',
    'Hand-drawn map for Anthroposophy and Chinese culture',
  ),
  image(culture02, '课程主题图示之一', 'One course-theme illustration'),
  image(culture03, '课程主题图示之二', 'A second course-theme illustration'),
  image(culture04, '课程主题图示之三', 'A third course-theme illustration'),
  image(culture05, '课程主题图示之四', 'A fourth course-theme illustration'),
  image(culture06, '课程主题图示之五', 'A fifth course-theme illustration'),
] as const;

const practiceImages = [
  image(
    practice01,
    '世界和图中文实操课程图示',
    'World HeTu Chinese practical-course illustration',
  ),
  image(
    practice02,
    '数字手指与晨圈图示',
    'Number fingers and morning-circle illustration',
  ),
  image(
    practice03,
    '自然节气歌谣晨圈图示',
    'Seasonal-rhyme morning-circle illustration',
  ),
  image(practice04, '声韵和图表', 'Sound-rhyme HeTu chart'),
  image(
    practice05,
    '句子和图的教学图示',
    'Sentence-and-HeTu teaching illustration',
  ),
  image(
    practice06,
    '对外汉语教学大纲图示',
    'Chinese-as-a-foreign-language curriculum illustration',
  ),
] as const;

const developmentImages = [
  image(
    main01,
    '中文主课板块教学图示',
    'Chinese main-lesson teaching illustration',
  ),
  image(
    main02,
    '中文主课、游学与戏剧课程图示',
    'Chinese main lesson, study travel, and drama illustration',
  ),
  image(
    development01,
    '儿童发展课程图示',
    'Child-development course illustration',
  ),
  image(
    development02,
    '光的教育课程图示',
    'Light education course illustration',
  ),
  image(development03, '儿童发展阶段图表', 'Child-development stages chart'),
  image(
    development04,
    '一至十二年级课程大纲封面',
    'Grade 1–12 curriculum outline cover',
  ),
  image(
    development05,
    '一至五年级课程大纲图表',
    'Grade 1–5 curriculum outline chart',
  ),
  image(development06, '课程大纲图表之一', 'One curriculum-outline chart'),
  image(development07, '课程大纲图表之二', 'A second curriculum-outline chart'),
  image(
    studyTravel,
    '陆上丝绸之路游学路线图',
    'Overland Silk Road study-travel route map',
  ),
] as const;

const participantImages = [
  image(
    participants01,
    '世界和图中文学习者合影',
    'World HeTu Chinese learners together',
  ),
  image(linYuan01, '林源老师肖像', 'Portrait of Lin Yuan'),
  image(
    linYuan02,
    '林源老师教学相关照片之一',
    'One image related to Lin Yuan’s teaching',
  ),
  image(
    linYuan03,
    '林源老师教学相关照片之二',
    'A second image related to Lin Yuan’s teaching',
  ),
  image(
    linYuan04,
    '林源老师教学相关照片之三',
    'A third image related to Lin Yuan’s teaching',
  ),
  image(
    linYuan05,
    '林源老师教学相关照片之四',
    'A fourth image related to Lin Yuan’s teaching',
  ),
] as const;

const feedbackImages = [
  image(feedback01, '学校实践合影', 'School-practice group photograph'),
  image(feedback02, '儿童艺术作品', 'Children’s artwork'),
] as const;

export const hetuOverview = {
  title: text('世界和图中文教育学会', 'World HeTu Chinese Education Institute'),
  description: text(
    '世界和图中文围绕中文语言、文化与儿童发展，提供面向不同教学情境的课程、教学方法与教师学习内容。',
    'World HeTu Chinese brings together Chinese language, culture, child development, curriculum, and teacher learning for a range of teaching settings.',
  ),
  image: image(hetuLogo, '世界和图中文标识', 'World HeTu Chinese logo'),
} as const;

export const hetuInstituteIntroduction: readonly HetuSection[] = [
  {
    heading: text('宗旨和使命', 'Purpose and mission'),
    paragraphs: [
      text(
        '世界和图中文教育学会是一个基于世界和图中文教程而成立的，以全面提升中文教学品质、推动中文教育在世界各地融合发展的非盈利机构。无论是在中国还是在世界，中文教育都不只是汉语技能的学习，更是智慧文明、文化精神、思维模式的体认过程。只有真正根植于东方文明、文化和思维，同时又能支持儿童身心健康发展的中文教育，才能帮助学生在获得汉语技能的同时开阔眼界、启迪智慧。当中文教育走向世界，它更成为了一座文化交流与互通的桥梁，让世界能共享中华天启文明的智慧果实，以惠及全人类。世界和图中文教程不仅演绎了中华古老文明的原象，更展示了人类未来命运共同体的和平蓝图，帮助学生获得一把打开中文世界的钥匙，同时获得一颗睿智的心灵。',
        'The World HeTu Chinese Education Institute is a non-profit organisation founded on the World HeTu Chinese curriculum. It works to improve the quality of Chinese teaching in all respects and to foster the integrated development of Chinese education around the world. In China and internationally, Chinese education is not only the learning of language skills; it is also a process of encountering a civilisation of wisdom, cultural spirit, and ways of thinking. Chinese education that is truly rooted in Eastern civilisation, culture, and thought, while supporting children’s healthy physical and inner development, can help students gain Chinese-language skills while broadening their horizons and awakening wisdom. As Chinese education reaches the world, it becomes a bridge for cultural exchange and mutual understanding, allowing the world to share the fruits of the wisdom of Chinese revelation-based civilisation for the benefit of all humanity. The World HeTu Chinese curriculum not only unfolds the archetypal images of ancient Chinese civilisation, but also presents a peaceful blueprint for a future community with a shared human destiny. It helps students find a key to the Chinese world and cultivate a discerning mind.',
      ),
    ],
  },
  {
    heading: text('学会使命', 'Institute mission'),
    paragraphs: [
      text(
        '世界和图中文教育发展与促进学会的成立，其使命正是致力于将世界和图中文的教学理念、教学方法、教学创意在世界范围内进行广泛传播，立志培养出更多在母语环境、第二外语环境、双语环境中具备心魂、充满精神力的优秀中文教师。学会鼓励和支持教师创建更多鲜活的、富有生命力和创造力的中文课堂与中文学校，以期让越来越多的中外孩子有缘走进最古老而又从未间断的东方文明，由不同走向共同，从而成为真正的世界公民。此外，学会还倡导和促进中文教育的过程及教学成果走出课堂、走向社会，为整个社区带去精神之力、文化之光、和谐之道。',
        'The World HeTu Chinese Education Development and Promotion Institute is dedicated to widely sharing the teaching philosophy, methods, and creative practices of World HeTu Chinese around the world. It aims to cultivate more outstanding Chinese teachers with inner purpose and spiritual vitality in mother-tongue, second-language, and bilingual settings. The Institute encourages and supports teachers in creating vivid, life-filled, and creative Chinese classrooms and Chinese schools, so that more children in China and elsewhere may enter the oldest continuously living Eastern civilisation, move from difference toward common ground, and become true citizens of the world. It also advocates and promotes the movement of Chinese educational processes and achievements beyond the classroom and into society, bringing spiritual strength, cultural light, and a way of harmony to the wider community.',
      ),
    ],
  },
  {
    heading: text(
      '二十年回眸与教程简介',
      'Twenty-year reflection and curriculum introduction',
    ),
    paragraphs: [
      text(
        '世界和图中文教程是林源老师在中国传统文化和华德福教育的双重启迪下，从2003年至2023年在美国和中国两地从事中文教学过程中形成的一套融合中文课程。通过二十年的教学及研究，他发展了汉语作为外语的教学大纲、汉语作为母语的1-12年级教学大纲以及双语教学大纲，是适合世界各地全日制学校、周末学校、课后班、家庭学校、社区学校等进行汉语教学的一套完备课程。该教程建立在河图洛书、太极八卦、易经图、内景图、修真图基础上，与中国人思维中象数理气四元素同构，形成一个完整、有序而有机的体系，且所有内容与方法均与学生不同年龄的生理心理特征相匹配，达到天-语-人合一的和谐境界。',
        'The World HeTu Chinese curriculum is an integrated Chinese curriculum formed by teacher Lin Yuan through Chinese teaching in the United States and China from 2003 to 2023, under the dual inspiration of traditional Chinese culture and Waldorf education. Over twenty years of teaching and research, he developed curricula for Chinese as a foreign language, Chinese as a mother tongue for Grades 1–12, and bilingual teaching. It is a complete curriculum for Chinese teaching in full-time schools, weekend schools, after-school programmes, home schools, community schools, and other settings worldwide. Built on the River Diagram and Luo Writing, Taiji and the eight trigrams, diagrams of the Book of Changes, the Inner Landscape diagram, and the Cultivation diagram, it shares the four elements of image, number, principle, and qi in Chinese thought. It forms a complete, ordered, and organic system whose content and methods match the physical and psychological characteristics of learners at different ages, seeking harmony among heaven, language, and humanity.',
      ),
    ],
  },
  {
    heading: text('教程体系', 'Curriculum system'),
    paragraphs: [
      text(
        '教程包含多个系列：以民间童谣为主的口语启蒙教程系列；上下五千年地理历史人文的百字中文、千字中文识字系列；以古今优秀诗文为主的精读系列；以游戏互动、现场游学及戏剧表演为特色的日常会话系列；以色和图、音和图、字和图、句和图及章和图建立起的语法系列；以节日、节气庆祝体验活动为主的中国文化系列；以及实用文体范文阅读及写作系列。',
        'The curriculum includes several series: oral-language initiation centred on folk rhymes; Hundred-Character Chinese and Thousand-Character Chinese literacy series spanning five thousand years of geography, history, and humanities; close-reading series focused on outstanding classical and modern poetry and prose; everyday-conversation series featuring interactive games, field study travel, and drama; grammar series built through colour and HeTu, sound and HeTu, character and HeTu, sentence and HeTu, and chapter and HeTu; Chinese-culture series centred on festivals and seasonal celebrations; and practical reading and writing series based on model texts.',
      ),
    ],
  },
  {
    heading: text('发展历程', 'Development timeline'),
    bullets: [
      text(
        '2003-2006年：林源老师应邀在美国普林斯顿学校担任1-8年级中文教师，构建了第一个中文作为外语的教学大纲，帮助学生将英语言说器官转变成中文言说器官，将外语思维转变成中文思维，形成了世界和图中文教程的雏形。',
        '2003–2006: At the invitation of Princeton School in the United States, Lin Yuan taught Chinese to Grades 1–8 and built the first curriculum for Chinese as a foreign language. It helped students shift English-language speech organs toward Chinese speech and move from foreign-language thought toward Chinese thought, forming the early shape of the World HeTu Chinese curriculum.',
      ),
      text(
        '2005-2006年：教程连续两年获得美国纽约州政府创造性课程艺术基金。',
        '2005–2006: The curriculum received the New York State Government Creative Curriculum Arts Fund for two consecutive years.',
      ),
      text(
        '2006-2010年：林源老师在美国宾州乔治学校教授中文，构建了9-12年级高中中文课程，创立了和图中文语法教学体系，使汉语非母语学生在拼读、组词、造句和写作上的正确率提高80%。该教学法获得了宾夕法尼亚大学及纽约州政府的创造性课程基金奖。',
        '2006–2010: Lin Yuan taught Chinese at George School in Pennsylvania, United States, developed a Grade 9–12 high-school Chinese curriculum, and established the HeTu Chinese grammar system. It raised the accuracy of non-native Chinese learners in reading aloud, word formation, sentence making, and writing by 80%. The method received a Creative Curriculum Fund award from the University of Pennsylvania and the New York State Government.',
      ),
      text(
        '2007-2008年：教程获得美国纽约政府颁发的合作性艺术教育基金奖。',
        '2007–2008: The curriculum received a collaborative arts-education fund award from the New York government.',
      ),
      text(
        '2008-2010年：教程参加美国中文大会，作为第二外语的教程大纲基本成型，并在普林斯顿专利局申请了知识产权保护。',
        '2008–2010: The curriculum took part in the Chinese Language Conference in the United States. Its outline for Chinese as a second language was substantially formed, and intellectual-property protection was applied for through the Princeton Patent Office.',
      ),
      text(
        '2011-2017年：林源老师回北京创办春之谷学院和春之谷学园，亲自担任1-6年级主班老师和本土化教师培训导师，亲临历史文化现场带班教学，开发了十多个原创中文主课板块。',
        '2011–2017: Lin Yuan returned to Beijing to establish Spring Valley Academy and Spring Valley School. He served as a Grades 1–6 main-class teacher and a mentor for localised teacher training, led teaching at historical and cultural sites, and developed more than ten original Chinese main-lesson modules.',
      ),
      text(
        '2018-2022年：东西方国际中学文凭项目（EWIP）在美国海默茵学校和春之谷学院之间建立，林老师担任7-12年级文史地主课老师，实践了中文作为母语的主课板块初高中教学，并与地理、历史结合开发了8至12年级大语文跨学科板块，使教程成为华语地区主课教学和长线课教学的通用教程。',
        '2018–2022: The East-West International High School Diploma Programme (EWIP) was established between Heimarin School in the United States and Spring Valley Academy. Lin taught literature, history, and geography main lessons for Grades 7–12, put mother-tongue Chinese main lessons into practice at middle- and high-school level, and developed interdisciplinary Chinese-language modules for Grades 8–12 together with geography and history. This made the curriculum broadly applicable to main-lesson and long-term teaching in Chinese-speaking regions.',
      ),
      text(
        '2002年及后续拓展：春之谷武当国际研学中心成立，将武当武术、道医、道乐融入教程，让学生深层体验道家文化。',
        '2002 and subsequent expansion: The Spring Valley Wudang International Study Centre was established, integrating Wudang martial arts, Taoist medicine, and Taoist music into the curriculum so students could experience Taoist culture more deeply.',
      ),
      text(
        '2011-2023年：教程在春之谷学院十年教学中培养了大批老师，并已在中国大陆、香港、台湾、日本、韩国、泰国、新加坡、美国等地的学校中被采用。',
        '2011–2023: Over a decade of teaching at Spring Valley Academy, the curriculum trained many teachers and was adopted by schools in mainland China, Hong Kong, Taiwan, Japan, South Korea, Thailand, Singapore, and the United States.',
      ),
      text(
        '2023年：世界和图中文教育学会于美国正式成立。',
        '2023: The World HeTu Chinese Education Institute was formally established in the United States.',
      ),
    ],
  },
  {
    heading: text('原创板块与教学法', 'Original modules and teaching methods'),
    paragraphs: [
      text(
        '教程拥有丰富的原创板块，包括童谣晨圈（数字、游戏、生肖、自然童谣）、太阳石的传说、山海经·大禹游历奇异国、诗经·七月、封神演义·十绝阵、黑暗传、游浩浩长江铸中华诗魂、陆上与海上丝绸之路、南京近代史和艺术板块、听大头天话解良渚文明、生命的言说诗歌板块、十走武当山等。原创教学法涵盖声韵汉字树、声韵太极律动、中文形线画、和图中文语法以及对外汉语教学大纲及教材。',
        'The curriculum has a rich range of original modules, including rhyme morning circles (numbers, games, zodiac, and nature rhymes), The Legend of the Sunstone, Classic of Mountains and Seas: Yu the Great’s Journey through Extraordinary Lands, Book of Songs: Seventh Month, Investiture of the Gods: Ten Formations, Dark Legend, Journeying the Mighty Yangtze to Forge the Chinese Poetic Soul, the Overland and Maritime Silk Roads, modern Nanjing history and arts, Listening to Datoutian Speak to Understand Liangzhu Civilisation, the poetry module The Speech of Life, and Ten Walks through Wudang Mountain. Original teaching methods include the sound-rhyme Chinese-character tree, sound-rhyme Taiji movement, Chinese form-line drawing, HeTu Chinese grammar, and Chinese-as-a-foreign-language curricula and teaching materials.',
      ),
    ],
  },
  {
    heading: text('工作和目标', 'Work and goals'),
    paragraphs: [
      text(
        '学会的工作包括开展面向世界各地区的和图中文教师培训，推进中文教育与社区的融合服务，促进各类型学习机构的创办，以及组织“面向未来”的中文教育内容研讨和研发。学会的目标是将世界和图中文教育的方法、理念、框架推广至更多国家和地区；促进各地区教师及机构间的交流合作；开展跨区域跨领域研讨，不断提升教程大纲与内容；开办全日制世界和图双语学校，支持中文教育和中国文化与世界各地区教育文化的融合发展。',
        'The Institute’s work includes World HeTu Chinese teacher training for regions around the world, advancing integrated service between Chinese education and communities, supporting the establishment of different types of learning institutions, and organising future-oriented discussion and development of Chinese educational content. Its goals are to extend the methods, ideas, and framework of World HeTu Chinese education to more countries and regions; foster exchange and collaboration among teachers and institutions in different areas; conduct cross-regional and cross-disciplinary study to continually improve the curriculum outline and content; establish full-time World HeTu bilingual schools; and support the integrated development of Chinese education and Chinese culture with the educational cultures of regions around the world.',
      ),
    ],
  },
  {
    heading: text('邀约与合作', 'Invitation and collaboration'),
    paragraphs: [
      text(
        '当世界变得越来越浮游于文化表层，我们越需要扎根一方水土，让民族精神源泉注入血液；当国与国相互制裁让世界分离，我们越需要以合作的智慧超越血缘与民族，融聚人类的终极关怀。教育是改变社会的力量，师者是黑暗中的火炬手与时代迷雾的灯塔。学会诚挚邀请热爱教育和孩子、热爱自然与艺术、热衷于探索宇宙和生命真相的家长、教师、文化传播者及艺术家加入，共同实现价值与服务社会。同时，学会也热情欢迎理念相同的教学机构、文化组织、社会团体开展合作，共同提升中文教育品质、促进中华文化交流创新、开展有益社区和谐发展的公益活动，为孩子创造支持身心健康发展的环境，带领他们走向未来。',
        'As the world increasingly drifts across the surface of culture, we need more than ever to root ourselves in a place and let the source of a people’s spirit enter our lifeblood. When mutual sanctions divide countries, we need the wisdom of cooperation to move beyond bloodline and nation and gather humanity’s deepest care. Education is a force for changing society; teachers are torchbearers in darkness and lighthouses in the mist of their time. The Institute sincerely invites parents, teachers, cultural communicators, and artists who love education and children, nature and art, and exploring the truth of the cosmos and life to join in creating value and serving society. It also warmly welcomes educational institutions, cultural organisations, and social groups with shared ideals to collaborate: improving the quality of Chinese education, promoting innovative exchange in Chinese culture, undertaking public-benefit activities that support community harmony, creating environments that support children’s healthy development, and guiding them toward the future.',
      ),
    ],
  },
  {
    heading: text('联系我们', 'Contact us'),
    paragraphs: [
      text(
        '欢迎访问官方网站及微信公众号了解更多学会及教师培训信息，或进行咨询与合作洽谈。',
        'Please visit the official website and WeChat public account for more information about the Institute and teacher training, or to discuss enquiries and collaboration.',
      ),
    ],
  },
];

export const hetuPages = [
  {
    slug: 'approach',
    order: 1,
    title: text(
      '教育理念与教学方法',
      'Educational approach and teaching methods',
    ),
    summary: text(
      '了解世界和图中文以语言、文化、艺术和儿童发展相互连接的教学思路。',
      'Explore a teaching approach that connects language, culture, art, and child development.',
    ),
    sections: [
      {
        heading: text('世界和图中文介绍', 'Introduction to World HeTu Chinese'),
        paragraphs: [
          text(
            '世界和图中文的精神理念启发于“洛图洛书”的故事：河图者，伏羲氏天下王，龙马浮出黄河，伏羲观其背文以画八卦。洛书者，大禹治水时，神龟负文而列于背，有数至九，禹于是第之以成九类。先圣从龙手易、连山易演绎出河图洛书，再从四象演绎出八卦，从而发明了周易，创造最早的汉字，开启了中华民族的文明。龙手、连山、归藏易图；太极、河图洛书、卦图；内景图、修真图及福寿图等九图合称为世界和图。它三三组合，对应斗极星，在天成象（龙手、连山、归藏），在地成形（河洛、太极、卦图），在人成命（内景、修真、福寿），形成天地人贯通一气的象数气理系统。世界和图是宇宙人文和谐同构的数理符号及象数模型，它具备中正、平衡、变易特点。世界和图不仅展现了中华古老文明的象数理气原型，也可演绎人类世界的和谐蓝图，故称为世界和图。世界和图中文揭示东方古老文字承载的宇宙真相与文明之道，并提供一张与字同构的词句章的语言河流发现启明星座下的思维的航海地图。世界和图中文将引领你泛舟于自我的语言之海，最终汇入地球和星际漩流的生态文明。',
            'The spiritual vision of World HeTu Chinese is inspired by the story of “Luotu Luoshu.” As for the River Diagram, when Fuxi ruled all under heaven, a dragon horse surfaced from the Yellow River; Fuxi observed the markings on its back and drew the eight trigrams. As for the Luo Writing, while Yu the Great was controlling the floods, a divine turtle bore markings arranged on its back, with numbers up to nine; Yu set them in order to form nine categories. The ancient sages derived the River Diagram and Luo Writing from Longshou Yi and Lianshan Yi, then derived the eight trigrams from the four symbols, thereby creating the Book of Changes, the earliest Chinese characters, and the beginning of Chinese civilisation. The nine diagrams of Longshou, Lianshan, and Guicang Yi; Taiji, the River Diagram and Luo Writing, and the trigrams; and the Inner Landscape, Cultivation, and Fortune-and-Longevity diagrams are collectively called World HeTu. Their three-by-three arrangement corresponds to the polar stars: as images in heaven (Longshou, Lianshan, and Guicang), as forms on earth (the River and Luo, Taiji, and trigrams), and as destiny in human beings (Inner Landscape, Cultivation, and Fortune and Longevity), forming a system of image, number, qi, and principle that unites heaven, earth, and humanity. World HeTu is a mathematical-symbolic and image-number model of harmonious correspondence between the cosmos and human culture; it embodies centredness, balance, and change. It not only presents an archetype of image, number, principle, and qi from ancient Chinese civilisation, but can also unfold a blueprint for harmony in the human world; hence the name World HeTu. World HeTu Chinese reveals the cosmic truth and civilisational way carried by ancient Eastern writing, and offers a navigational map of thought beneath the Morning Star constellation: a river of language made from characters, words, sentences, and chapters sharing the same structure. World HeTu Chinese will guide you to sail upon the sea of your own language and, ultimately, join the ecological civilisation of Earth and the interstellar vortex.',
          ),
          text(
            '世界和图中文是一套面向中文学习与教学的课程体系。资料将它描述为从“百字和图”出发，延伸至口语、读写、会话、文化、语法、写作、戏剧及主课教学的有机课程。',
            'World HeTu Chinese is a curriculum for learning and teaching Chinese. The source describes an organic course beginning with the “Hundred-Character HeTu” and extending to speaking, literacy, conversation, culture, grammar, writing, drama, and main lessons.',
          ),
          text(
            '课程以中国语言与文化资源为基础，并把游戏、童谣、故事、绘画、手工、戏剧和节庆等活动带入语言学习。',
            'The curriculum draws on Chinese language and cultural resources, bringing games, rhymes, stories, drawing, handwork, drama, and festivals into language learning.',
          ),
        ],
        images: approachImages,
      },
      {
        heading: text(
          '世界和图中文教学理念',
          'World HeTu Chinese Teaching Philosophy',
        ),
        paragraphs: [
          text(
            '1. 中国语言文字是中国人通过“天启”而获得的承载天道、地道、人道的精神原型，象数思维方式及心理情境的反映，中文的字、词、句、章具有相当同的中国人象数理气的深层心理模式和精神结构，这个结构的图式就是：龙手、连山、归藏三易；太极、河图洛书、卦图三图；内景、修真、福寿三图，这九图叫九章和图，它不仅是中华语言文化的根本，也必将成为缔造人类和平的精神源泉，所以被称为世界和图中文。',
            '1. Chinese language and writing are a spiritual archetype, received by Chinese people through “heavenly revelation,” that carries the way of heaven, earth, and humanity; they reflect image-number modes of thought and psychological situations. Chinese characters, words, sentences, and chapters possess corresponding deep psychological patterns and spiritual structures of Chinese image, number, principle, and qi. The diagram of this structure is: the three Changes of Longshou, Lianshan, and Guicang; the three diagrams of Taiji, the River Diagram and Luo Writing, and the trigrams; and the three diagrams of Inner Landscape, Cultivation, and Fortune and Longevity. These nine diagrams are called the Nine-Chapter HeTu. They are not only the root of Chinese language and culture, but will also become a spiritual source for creating human peace; hence the name World HeTu Chinese.',
          ),
          text(
            '2. 汉字形藏易理、音通情境、义达精神。只有从汉字的象数气理（或音形义）的起源、创造及历史演进的整体把握中，才能了解字里乾坤，整体把握汉语精神内涵与智慧。汉语的词句章与汉字同具同构、对应关系，只有在九章和图基础上找到中国人的思维导图，才能正确地理解字词句章的遣词、造句、作文语法规律；汉语之道上通宇宙自然、下达万类物器，中解人事义理，只有在汉语学习过程中，渗透数理科学、人文及道德伦理教育，才能对汉语有整体把握，从而内化到思维与人格中。',
            '2. The forms of Chinese characters contain the principles of the Changes, their sounds connect situations, and their meanings reach the spirit. Only through an overall grasp of the origins, creation, and historical evolution of the image, number, qi, and principle of Chinese characters—or their sound, form, and meaning—can one understand the universe within characters and gain an integrated grasp of the spiritual connotations and wisdom of Chinese. Chinese words, sentences, and chapters share structural and corresponding relations with Chinese characters. Only by finding a Chinese cognitive map on the basis of the Nine-Chapter HeTu can one correctly understand the principles of word choice, sentence construction, composition, and grammar. The way of Chinese reaches upward to the universe and nature, downward to the myriad things and implements, and inwardly explains human affairs and principles. Only when mathematical science, the humanities, and moral and ethical education are woven into Chinese learning can Chinese be grasped as a whole and internalised in thought and character.',
          ),
          text(
            '3. 汉语的口述语与书面语的起源、功能及发展过程有不同轨迹。汉语的方言有多种，在历史中彼此之间有传承演化关系，但却享有一套共同的书写系统，它至少有三千年历史。书写系统从古至今也有至少七体演变，但目前被使用的有简体字、繁体字以及与假名混用的日本文字。世界和图中文教学提倡将口述语与书面文字分开和合并教学方式，才能达到殊连同归有效的掌握。口述语注重音旁，书面语注重形旁，鼓励在口述语阶段延用方言并普通话，书面语认繁写简。',
            '3. The origins, functions, and development of spoken and written Chinese follow different paths. Chinese has many dialects; they have inherited and evolved in relation to one another through history, while sharing a common writing system with at least three thousand years of history. From antiquity to the present, this writing system has also undergone at least seven script transformations; the forms now in use include simplified characters, traditional characters, and Japanese writing mixed with kana. World HeTu Chinese teaching advocates both separate and integrated approaches to spoken language and written text, so that their distinctive paths can converge in effective mastery. Spoken language emphasises the phonetic component, while written language emphasises the form component; at the spoken-language stage, the use of dialects alongside Mandarin is encouraged, while written language recognises traditional forms and writes in simplified forms.',
          ),
          text(
            '4. 学生的身心灵发展过程，与宇宙演化、人类意识发展有同构、对应关系，针对不同年龄段儿童心理发展特点，选择在汉语文化中与之相对应的内容、方法，才能帮助学生健康成长、自然而快乐地习得语言。',
            '4. The development of students’ body, soul, and spirit has structural and corresponding relationships with cosmic evolution and the development of human consciousness. Only by selecting content and methods within Chinese culture that correspond to the psychological-developmental characteristics of children at different ages can we help students grow healthily and acquire language naturally and joyfully.',
          ),
        ],
      },
      {
        heading: text('教程内容', 'Curriculum content'),
        bullets: [
          text(
            '以“百字和图”及“百字中文”作为读写启蒙材料。',
            'The “Hundred-Character HeTu” and “Hundred-Character Chinese” serve as introductory literacy materials.',
          ),
          text(
            '以童谣、游戏和神话故事构成与年龄心理特点衔接的口语启蒙材料。',
            'Rhymes, games, and mythic stories form oral-language materials connected with children’s developmental stages.',
          ),
          text(
            '以汉语拼音、注音方案和“声韵太极操”支持发音学习。',
            'Pinyin, phonetic study, and sound-rhyme Taiji exercises support pronunciation learning.',
          ),
          text(
            '以《千字中文》延伸至中国地理、历史、人文、科学与社会道德等读写内容。',
            '“Thousand-Character Chinese” extends literacy work into Chinese geography, history, humanities, science, and social ethics.',
          ),
          text(
            '以《你好》《我和你》《你我他》等材料组织日常汉语会话。',
            'Materials such as “Hello,” “You and I,” and “You, Me and Others” organise everyday Chinese conversation.',
          ),
          text(
            '以中国地理、历史、文学、社会和科技等内容构成文化教程，并结合游学、写作、研究报告与戏剧。',
            'A cultural curriculum addresses Chinese geography, history, literature, society, and technology, with study travel, writing, research reports, and drama.',
          ),
          text(
            '以古今诗文名篇组成语文综合教程，学习句读、章法、音韵与文化意蕴。',
            'A comprehensive Chinese-language course uses classic and modern texts to study punctuation, structure, sound, and cultural meaning.',
          ),
          text(
            '以色、音、字、句、章等“和图”方式展开汉语语法学习。',
            'Chinese grammar is explored through HeTu approaches to colour, sound, characters, sentences, and composition.',
          ),
          text(
            '通过绘画日记、游学观察和感官培养等活动学习写作。',
            'Writing is learned through drawing journals, study-travel observation, and sensory-development activities.',
          ),
          text(
            '以民间故事或经典改编的戏剧支持一至十二年级的言说与演讲。',
            'Dramas adapted from folk stories or classics support speech and presentation from Grades 1 through 12.',
          ),
          text(
            '为不同年级提供中文主课板块案例与课件。',
            'Chinese main-lesson examples and course materials are offered for different grades.',
          ),
          text(
            '包含中文作为母语、双语之一及第二外语的教学大纲。',
            'The curriculum includes outlines for Chinese as a mother tongue, as one bilingual language, and as a second foreign language.',
          ),
        ],
      },
      {
        heading: text('教学方法', 'Teaching methods'),
        bullets: [
          text(
            '按听、说、写、读的顺序引入汉语，并把口述语言与游戏、童谣、手工、绘画和故事结合。',
            'Chinese is introduced through listening, speaking, writing, and reading, connecting oral language with games, rhymes, handwork, drawing, and stories.',
          ),
          text(
            '把文字的象形特点与发音的呼吸关系结合，通过“声韵太极操”让语言学习延展到身体与空间。',
            'The pictorial quality of characters is linked with the breath of pronunciation, using sound-rhyme Taiji exercises to extend language learning into body and space.',
          ),
          text(
            '在不同阶段以不同方式考核，并鼓励学生绘制自己的中文课本、语法书和字典。',
            'Assessment is varied across stages, and learners are encouraged to create their own Chinese textbooks, grammar books, and dictionaries.',
          ),
          text(
            '课堂中减少对音像辅助设备的依赖，以言说、绘画和演示营造语言与想象的氛围。',
            'The classroom reduces reliance on audiovisual aids and uses speech, drawing, and demonstration to create a living atmosphere for language and imagination.',
          ),
          text(
            '坚持周期主题教学，围绕年龄、季节、节日和时事组织戏剧、游览、绘画、手工和集会表演。',
            'Cyclical thematic teaching organises drama, excursions, drawing, handwork, and gatherings around age, season, festivals, and current events.',
          ),
          text(
            '在具体情境中朗诵、表达和比较不同语言；语法从例句中归纳规律，并落实到拼读、组词、造句和写作。',
            'Learners recite, speak, and compare languages in context; grammar draws patterns from examples and is carried into decoding, word-building, sentence-making, and writing.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'curriculum',
    order: 2,
    title: text('教程与课程体系', 'Curriculum and training'),
    summary: text(
      '浏览三类教学大纲、公共与实践课程，以及世界和图中文的五大课程体系。',
      'Browse three curriculum outlines, shared and practical studies, and five World HeTu Chinese course systems.',
    ),
    sections: [
      {
        heading: text(
          '教学大纲与教师学习内容',
          'Curriculum outlines and teacher learning',
        ),
        paragraphs: [
          text(
            '资料列出三类中文教学大纲：中文作为第二外语、中文作为双语之一，以及中文作为母语。教师学习内容包括公共理论课与实践课。',
            'The source lists three Chinese curriculum outlines: Chinese as a second foreign language, Chinese as one bilingual language, and Chinese as a mother tongue. Teacher learning includes shared theory and practical study.',
          ),
        ],
        bullets: [
          text(
            '公共理论课：人智科学与中国文化深度课程、世界和图中文实操课程、中文主课板块课程、基于儿童本性发展的教育理论与实践，以及光的教育。',
            'Shared theory: Anthroposophy and Chinese culture; World HeTu Chinese practice; Chinese main-lesson study; education theory and practice based on child development; and light education.',
          ),
          text(
            '实践课：书法、绘画、音乐、雕塑、木工等艺术课；内在发展练习；儿童观察与研究；黄河、长江、珠江和丝绸之路研学；教学评估、主课本和教学报告；节日庆典组织。',
            'Practical study: arts including calligraphy, drawing, music, sculpture, and woodwork; inner-development exercises; child observation and research; study travel along the Yellow River, Yangtze, Pearl River, and Silk Road; assessment, main-lesson books, and teaching reports; and festival organisation.',
          ),
        ],
      },
      {
        heading: text('五大课程体系', 'Five course systems'),
        bullets: [
          text(
            '人智学与中国文化深化课程。',
            'Anthroposophy and Chinese culture in depth.',
          ),
          text(
            '世界和图中文实操课程。',
            'World HeTu Chinese practical course.',
          ),
          text(
            '世界和图中文主课板块教学实操课程。',
            'Practical course in World HeTu Chinese main-lesson blocks.',
          ),
          text(
            '基于人性本质发展的教育理论和实践。',
            'Educational theory and practice based on human development.',
          ),
          text(
            '春之谷课程体系——光的教育。',
            'Spring Valley curriculum system: light education.',
          ),
        ],
      },
      {
        heading: text(
          '人智学与中国文化深化课程',
          'Anthroposophy and Chinese culture in depth',
        ),
        paragraphs: [
          text(
            '林源老师在过去二十年人智学研究与华德福中国化教学实践中形成华德福中国本土化的理论，也是中国文史地文教学的方法论。这是在深入研究施泰纳关于东方文化和中国文明的洞见和论述基础上，经过多年的历史文化现场考察研究和在春之谷学院十年教学实践的总结和深化。其中包括“道与罗格斯”，“天启之道与人智学之光”、“民族魂的使命”三大主题。是中国华德福教师和中文教师的必备知识，也是春之谷学院的深化和进阶课程之一。',
            'Over the past twenty years of research into Anthroposophy and China-adapted Waldorf teaching practice, Lin Yuan has developed a theory of the local adaptation of Waldorf education in China, as well as a methodology for teaching Chinese literature, history, geography, and culture. It is based on an in-depth study of Steiner’s insights and discussions concerning Eastern culture and Chinese civilisation, and has been summarised and deepened through years of field research in historical and cultural settings and ten years of teaching practice at Spring Valley Academy. It includes three major themes: “Dao and Logos,” “The Way of Heavenly Revelation and the Light of Anthroposophy,” and “The Mission of the National Soul.” It is essential knowledge for Chinese Waldorf and Chinese-language teachers, and is one of Spring Valley Academy’s advanced courses.',
          ),
          text(
            '资料所列课程从概论、“道与 Logos”、元道、两仪等主题展开，并延伸至数象、八卦、天干、经典文本、儿童发展与感官等讨论。',
            'The listed study begins with an overview, “Dao and Logos,” original Dao, and the two polarities, then extends to symbolic number, the eight trigrams, heavenly stems, classic texts, child development, and the senses.',
          ),
        ],
        images: cultureImages,
      },
      {
        heading: text(
          '世界和图中文实操课程',
          'World HeTu Chinese practical course',
        ),
        paragraphs: [
          text(
            '实操课程介绍世界和图中文概论、龙首易与数字手指、童谣晨圈、《百字中文》与《千字中文》、汉语拼音与声韵太极操、色彩和图与字和图、句子和图与文章和图、中文会话及对外汉语教学大纲等内容。',
            'The practical course introduces World HeTu Chinese; Longshou Yi and number fingers; rhyme morning circles; “Hundred-Character Chinese” and “Thousand-Character Chinese”; pinyin and sound-rhyme Taiji; colour-and-HeTu and character-and-HeTu; sentence-and-HeTu and composition-and-HeTu; Chinese conversation; and the curriculum for Chinese as a foreign language.',
          ),
          text(
            '其中，晨圈把童谣、诗歌、故事、游戏和季节变化联系起来；会话课程以问候、对话和戏剧情境组织语言交流。',
            'The morning-circle work connects rhymes, poetry, stories, games, and seasonal change; conversation work organises language exchange through greetings, dialogue, and dramatic situations.',
          ),
        ],
        images: practiceImages,
      },
      {
        heading: text(
          '主课、儿童发展与光的教育',
          'Main lessons, child development, and light education',
        ),
        paragraphs: [
          text(
            '资料以中文主课板块、游学与戏剧为实践内容，并将不同年级的课程安排与儿童发展相联系。下表把配图中的一至五年级信息整理为可读文本；配图保留为参考资料。',
            'The source presents Chinese main lessons, study travel, and drama as practical work and relates grade-level curriculum to child development. The table below restates the Grade 1–5 information from the chart in readable text; the original charts remain as references.',
          ),
        ],
        table: {
          headers: [
            text('年级', 'Grade'),
            text('儿童发展与教学目标', 'Child development and learning aims'),
            text('课程主题示例', 'Example curriculum themes'),
          ],
          rows: [
            [
              text('一年级', 'Grade 1'),
              text(
                '植物性、以太体、图景式思维与一元性。',
                'Plant-like development, etheric body, image-based thinking, and unity.',
              ),
              text(
                '节奏与手工、童话和故事、自然散步、数学故事与外语晨圈。',
                'Rhythm and handwork, fairy tales and stories, nature walks, mathematics stories, and foreign-language morning circles.',
              ),
            ],
            [
              text('二年级', 'Grade 2'),
              text(
                '动物性、星芒体、图景式思维、二元性与生命觉。',
                'Animal quality, astral body, image-based thinking, duality, and the sense of life.',
              ),
              text(
                '节奏与手工、寓言故事、文学与写字、自然观察和基础运算。',
                'Rhythm and handwork, fables, literature and handwriting, nature observation, and foundational arithmetic.',
              ),
            ],
            [
              text('三年级', 'Grade 3'),
              text(
                '矿物性、自我与图景式思维、三元性、运动觉与意志萌芽。',
                'Mineral quality, self and image-based thinking, threefoldness, movement sense, and emerging will.',
              ),
              text(
                '节奏、手工、建筑、神话与故事、测量、长度、面积和自然观察。',
                'Rhythm, handwork, building, myths and stories, measurement, length, area, and nature observation.',
              ),
            ],
            [
              text('四年级', 'Grade 4'),
              text(
                '人与动物、自我与星芒体、想象性思维、四元性与平衡觉。',
                'Human and animal, self and astral body, imaginative thinking, fourfoldness, and balance.',
              ),
              text(
                '音乐与戏剧、泥塑、武当基本拳、北欧神话、语法、分数与家乡地理。',
                'Music and drama, clay work, basic Wudang forms, Norse mythology, grammar, fractions, and local geography.',
              ),
            ],
            [
              text('五年级', 'Grade 5'),
              text(
                '人与植物、自我与以太体、想象性思维、五元性与温暖觉。',
                'Human and plant, self and etheric body, imaginative thinking, fivefoldness, and the sense of warmth.',
              ),
              text(
                '音乐与戏剧、礼乐、木工、古埃及与古希腊、黄河徒手几何、分数与小数。',
                'Music and drama, rites and music, woodworking, ancient Egypt and Greece, Yellow River freehand geometry, fractions, and decimals.',
              ),
            ],
          ],
        },
        images: developmentImages,
      },
    ],
  },
  {
    slug: 'distinctives',
    order: 3,
    title: text(
      '课程特色与为什么参加学习',
      'Course Distinctives and Why Participate',
    ),
    summary: text(
      '阅读资料所提出的文化根源、课程覆盖、教学实践与儿童发展之间的联系。',
      'Read the source’s account of cultural roots, curriculum scope, teaching practice, and child development.',
    ),
    sections: [
      {
        heading: text(
          '资料所列的课程特点',
          'Features identified in the source',
        ),
        bullets: [
          text(
            '植根东方文化精神，关注世界和平，并以和图思维方式支持一至十二年级儿童的发展。',
            'Rooted in the spirit of Eastern culture, the curriculum attends to world peace and uses HeTu ways of thinking to support development from Grades 1 through 12.',
          ),
          text(
            '覆盖汉语作为第二外语、双语之一和母语三种教学情境。',
            'It addresses Chinese as a second foreign language, as one bilingual language, and as a mother tongue.',
          ),
          text(
            '把中国语言与文化整合为整体课程，并以长期教学研究和实践为基础。',
            'It integrates Chinese language and culture into a whole curriculum grounded in sustained teaching research and practice.',
          ),
          text(
            '把课程内容与方法同不同年龄阶段的儿童发展相联系。',
            'It relates course content and methods to children’s development at different ages.',
          ),
        ],
      },
      {
        heading: text('为什么参与学习', 'Why participate in study'),
        bullets: [
          text(
            '资料将课程描述为支持中文教师职业学习与转型的完整学习路径。',
            'The source presents the course as a complete learning path for the professional development and transition of Chinese teachers.',
          ),
          text(
            '课程学习被描述为了解中国文化、开展自我觉知与提升教学能力的一种途径。',
            'The study is described as a way to engage Chinese culture, self-awareness, and teaching capacity.',
          ),
          text(
            '资料期待学习者成为文化交流者，并促进人与人之间的理解。',
            'The source hopes learners can become cultural communicators and support understanding among people.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'participants',
    order: 4,
    title: text('适合人群与主讲教师', 'Who it serves and the lead teacher'),
    summary: text(
      '查看文章列出的适合人群，并认识世界和图中文主讲教师林源。',
      'See the audiences named in the article and meet Lin Yuan, the lead teacher for World HeTu Chinese.',
    ),
    sections: [
      {
        heading: text('适合人群', 'Who may participate'),
        bullets: [
          text(
            '在任 RS 学校主班老师和中文老师。',
            'Current RS-school class teachers and Chinese teachers.',
          ),
          text(
            '在任 IB 学校中文教师。',
            'Current Chinese teachers in IB schools.',
          ),
          text(
            '有志成为 RSE 教师的储备教师或家长。',
            'Prospective RSE teachers and parents preparing for this work.',
          ),
          text(
            '在家教育孩子的家长。',
            'Parents who educate their children at home.',
          ),
          text(
            '在公立或私立学校从事对外汉语教学的教师。',
            'Teachers of Chinese as a foreign language in public or private schools.',
          ),
          text(
            '师范类院校在读学生或毕业生。',
            'Students or graduates of teacher-training institutions.',
          ),
          text(
            '从事文史地主课教学或长线教学的老师。',
            'Teachers working in humanities main lessons or long-term teaching.',
          ),
          text(
            '计划陪孩子到海外读书并教授中文的家长。',
            'Parents planning to accompany children studying abroad and teach Chinese.',
          ),
        ],
        images: [participantImages[0]],
      },
      {
        heading: text('主讲教师：林源', 'Lead teacher: Lin Yuan'),
        paragraphs: [
          text(
            '林源老师是春之谷学院院长、青衿学院创始人和东西方国际高中文凭课程（EWIP）项目负责人。资料介绍他曾在美国学校教授一至十二年级中文与历史课程，并长期从事华德福教育中国本土化的实践与研究。',
            'Lin Yuan is the president of Spring Valley Academy, founder of Qingjin Academy, and lead for the East-West International High School Diploma (EWIP) programme. The source describes his teaching of Chinese and history from Grades 1 through 12 in the United States and his long-term work in the localisation and study of Waldorf education in China.',
          ),
          text(
            '资料还介绍他把人智学与中国文化、华德福教育与中国教育的理念和方法相联系，并创作了世界和图中文教程及相关课程。',
            'The source also describes how he connects Anthroposophy and Chinese culture, as well as Waldorf and Chinese educational approaches, in creating the World HeTu Chinese curriculum and related courses.',
          ),
          text(
            '更多师资资料可在青衿学院的林源老师详情页阅读。',
            'More faculty information is available on Qingjin Academy’s Lin Yuan profile.',
          ),
        ],
        images: participantImages.slice(1),
      },
    ],
  },
  {
    slug: 'practice',
    order: 5,
    title: text('教学实践与学员反馈', 'Teaching practice and learner feedback'),
    summary: text(
      '通过实践照片、文章中的学员反馈和本地视频了解课程学习体验。',
      'Explore course learning through practice photographs, the article’s learner feedback, and a locally hosted video.',
    ),
    sections: [
      {
        heading: text('教学实践', 'Teaching practice'),
        paragraphs: [
          text(
            '文章把语言学习与课程大纲、游戏、诗歌、身体体验、绘画、戏剧、节庆和共同学习相联系。',
            'The article connects language learning with curriculum study, games, poetry, embodied experience, drawing, drama, festivals, and shared learning.',
          ),
        ],
        images: feedbackImages,
      },
      {
        heading: text('来自学员的反馈', 'Learner feedback'),
        paragraphs: [
          text(
            '文章中的学员反馈提到，课程在方位、游戏、九宫格、乘法口诀、诗歌、语法与造句练习之间建立联系，并通过身体活动帮助学习者理解相关内容。',
            'The learner feedback in the article describes links among directions, games, the nine-square grid, multiplication tables, poetry, grammar, and sentence practice, with movement supporting understanding.',
          ),
          text(
            '下方视频来自下载文章，保留为本地播放资源；它不自动播放，也不替代书面课程说明。',
            'The video below comes from the downloaded article and is locally hosted. It does not autoplay and does not replace the written course information.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'admissions',
    order: 6,
    title: text('费用与报名', 'Fees and enrolment'),
    summary: text(
      '查看原文列出的课程方式、学习支持、费用、退费规则与咨询方式。',
      'Review the course format, learning support, fees, refund rule, and contact information listed in the source.',
    ),
    sections: [
      {
        heading: text('收费标准', 'Fee schedule'),
        paragraphs: [
          text(
            '1）中文作为母语的主课教学、长线课教学、对外汉语教学、中文作为双语之一的证书课程学费 20,000 元人民币，包括面授课程和线上课程学费，面授课 4 周，现场游学 2 周。面授课程及游学课程的交通及食宿费另付。',
            '1) Tuition for Chinese mother-tongue main lessons, long-term courses, Chinese-as-a-foreign-language teaching, and the Chinese-as-one-bilingual-language certificate course is RMB 20,000. This includes in-person and online course tuition, with four weeks of in-person study and two weeks of on-site study travel. Transportation, accommodation, and meals for in-person and study-travel courses are charged separately.',
          ),
          text(
            '2）报名单个主题线上课程，单科结业算学分，修满学分可颁发春之谷学院专业证书。课程可持续回放两个月。',
            '2) Learners may enrol in individual themed online courses. Completion of a single course earns credits, and a Spring Valley Academy professional certificate may be awarded once the required credits are completed. Course recordings remain available for two months.',
          ),
        ],
        table: {
          headers: [text('学习内容', 'Study option'), text('费用', 'Fee')],
          rows: [
            [
              text(
                '中文作为母语主课、长线课、对外汉语、中文作为双语之一证书课程',
                'Chinese mother-tongue main lessons, long-term courses, Chinese as a foreign language, and Chinese-as-one-bilingual-language certificate course',
              ),
              text('20,000 元人民币', 'RMB 20,000'),
            ],
            [
              text(
                '《人智学与中国文化深化课程》：十四讲',
                'Anthroposophy and Chinese Culture in Depth: 14 sessions',
              ),
              text('1,680 元人民币', 'RMB 1,680'),
            ],
            [
              text(
                '《世界和图中文实操课程》：十二讲',
                'World HeTu Chinese Practical Course: 12 sessions',
              ),
              text('1,680 元人民币', 'RMB 1,680'),
            ],
            [
              text(
                '《基于人性本质发展的教育理论和实践》：十二讲',
                'Educational Theory and Practice Based on Human Development: 12 sessions',
              ),
              text('1,200 元人民币', 'RMB 1,200'),
            ],
            [
              text(
                '《春之谷课程体系——好大一棵树》：十二讲',
                'Spring Valley Curriculum System—A Great Big Tree: 12 sessions',
              ),
              text('1,200 元人民币', 'RMB 1,200'),
            ],
            [
              text('国内现场面授课程', 'In-person courses in mainland China'),
              text('3,000 元人民币／周', 'RMB 3,000 per week'),
            ],
            [
              text(
                '香港、美国现场面授课程',
                'In-person courses in Hong Kong and the United States',
              ),
              text('500 美元／周', 'USD 500 per week'),
            ],
          ],
        },
      },
      {
        heading: text('学习支持与证书', 'Learning support and certification'),
        paragraphs: [
          text(
            '3）提供教材及参考资料，被邀请到和图中文讨论群入群咨询讨论并答疑，免费参加读书会，全科学生毕业后颁发春之谷学院专业证书并推荐工作机会。',
            '3) Teaching materials and reference resources are provided. Learners may be invited to the World HeTu Chinese discussion group for consultation, discussion, and questions, and may attend reading groups free of charge. Full-programme graduates receive a Spring Valley Academy professional certificate and job referrals.',
          ),
        ],
      },
      {
        heading: text(
          '退费、缴费与报名咨询',
          'Refunds, payment, and enrolment enquiries',
        ),
        paragraphs: [
          text(
            '4）凡交费后由于不可抗力因素不能坚持学习者，由个人申请，得到批准后可退费。退费要扣除已上课学费及总学费的 20% 手续费。',
            '4) Learners who cannot continue after payment because of force majeure may submit an individual request. If approved, fees may be refunded after deducting the tuition for classes already taken and a handling fee equal to 20% of the total tuition.',
          ),
          text(
            '5）缴费账号：户名：北京春之谷文化艺术有限公司；开户银行：中国工商银行股份有限公司北京东铁匠营支行；账户号码：02000004092002684952。',
            '5) Payment account: Payee: Beijing Spring Valley Culture and Art Co., Ltd.; bank: Industrial and Commercial Bank of China, Beijing Dongtiejiangying Sub-branch; account number: 02000004092002684952.',
          ),
        ],
      },
    ],
  },
] as const satisfies readonly HetuPage[];

export const publicHetuSlugs = hetuPages.map(({ slug }) => slug);

export const hetuFeedbackVideo = {
  src: '/media/hetu/world-hetu-feedback.mp4',
  poster: feedbackPoster,
  title: text(
    '世界和图中文学员反馈视频',
    'World HeTu Chinese learner-feedback video',
  ),
  description: text(
    '来自下载文章的本地视频，内容为课程相关的学员反馈。',
    'A locally hosted video from the downloaded article containing course-related learner feedback.',
  ),
} as const;

export function getHetuPageBySlug(slug: string): HetuPage | undefined {
  return hetuPages.find((page) => page.slug === slug);
}

export const allHetuImages = [
  hetuOverview.image.image,
  ...approachImages.map(({ image: asset }) => asset),
  ...cultureImages.map(({ image: asset }) => asset),
  ...practiceImages.map(({ image: asset }) => asset),
  ...developmentImages.map(({ image: asset }) => asset),
  ...participantImages.map(({ image: asset }) => asset),
  ...feedbackImages.map(({ image: asset }) => asset),
  feedbackPoster,
] as const;
