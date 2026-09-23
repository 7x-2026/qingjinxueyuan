import type { ImageMetadata } from 'astro';
import hetuWheel from '../assets/images/hetu/hetu-wheel.jpg';
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
import type { BilingualText, HetuImage, HetuPage } from './types';

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
  image: image(
    hetuWheel,
    '世界和图中文课程图示',
    'World HeTu Chinese curriculum illustration',
  ),
} as const;

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
        heading: text('世界和图中文', 'World HeTu Chinese'),
        paragraphs: [
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
    title: text('课程特色', 'What distinguishes the curriculum'),
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
        heading: text(
          '课程方式与学习支持',
          'Course format and learning support',
        ),
        paragraphs: [
          text(
            '课程采用现场面授、线上直播和录播相结合的方式。资料列出的授课地点包括武当、香港和美国。',
            'The course combines in-person teaching, online live sessions, and recordings. The source lists Wudang, Hong Kong, and the United States as teaching locations.',
          ),
          text(
            '全科课程包括四周面授与两周现场游学；面授与游学的交通及食宿费用另付。',
            'The full programme includes four weeks of in-person study and two weeks of on-site study travel; transportation, accommodation, and meals for these components are separate expenses.',
          ),
          text(
            '资料说明学习者可获得教材及参考资料，受邀加入讨论群进行咨询与答疑，参加读书会；全科学生毕业后颁发春之谷学院专业证书，并推荐工作机会。',
            'The source states that learners receive teaching materials and reference resources, may be invited to a discussion group for consultation and questions, and may join reading groups; full-programme graduates receive a Spring Valley Academy professional certificate and job referrals.',
          ),
        ],
      },
      {
        heading: text('费用', 'Fees'),
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
          ],
        },
      },
      {
        heading: text('退费与报名咨询', 'Refunds and enrolment enquiries'),
        paragraphs: [
          text(
            '原文说明：如因不可抗力因素不能坚持学习，学习者可提交个人申请；获批准后可退费，已上课程费用及总学费的 20% 手续费将被扣除。',
            'The source states that learners unable to continue because of force majeure may submit an individual request. If approved, fees may be refunded after deducting the cost of classes already taken and a 20% handling fee on the total tuition.',
          ),
          text(
            '收款户名：北京春之谷文化艺术有限公司；开户行：中国工商银行股份有限公司北京东铁匠营支行。下载资料未提供银行卡号，请先电话确认完整汇款信息。',
            'Payee: Beijing Spring Valley Culture and Art Co., Ltd.; bank: Industrial and Commercial Bank of China, Beijing Dongtiejiangying Sub-branch. The downloaded material does not provide an account number; please confirm complete remittance details by phone first.',
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
