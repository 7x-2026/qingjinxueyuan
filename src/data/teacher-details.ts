import alexaDetailImage from '../assets/images/teachers/details/alexa.jpg';
import boWernerErikssonDetailImage from '../assets/images/teachers/details/bo-werner-eriksson.jpg';
import chaiJianDetailImage from '../assets/images/teachers/details/chai-jian.webp';
import heXiaoguoDetailImage from '../assets/images/teachers/details/he-xiaoguo.jpg';
import huHaiyanDetailImage from '../assets/images/teachers/details/hu-haiyan.jpg';
import jeffMartinDetailImage from '../assets/images/teachers/details/jeff-martin.png';
import jinZhenbaoDetailImage from '../assets/images/teachers/details/jin-zhenbao.jpg';
import karlSchurmanDetailImage from '../assets/images/teachers/details/karl-schurman.jpg';
import linYuanDetailImage from '../assets/images/teachers/details/lin-yuan.jpg';
import liuYutingDetailImage from '../assets/images/teachers/details/liu-yuting.jpg';
import michealDAleoDetailImage from '../assets/images/teachers/details/micheal-d-aleo.png';
import panJianfengDetailImage from '../assets/images/teachers/details/pan-jianfeng.jpg';
import songJinchaoDetailImage from '../assets/images/teachers/details/song-jinchao.jpg';
import tedWarrenDetailImage from '../assets/images/teachers/details/ted-warren.jpg';
import wangShiyiDetailImage from '../assets/images/teachers/details/wang-shiyi.jpg';
import wuFanDetailImage from '../assets/images/teachers/details/wu-fan.jpg';
import xinchenDaoistDetailImage from '../assets/images/teachers/details/xinchen-daoist.webp';
import zangYibingDetailImage from '../assets/images/teachers/details/zang-yibing.jpg';
import zhangLingzhiDetailImage from '../assets/images/teachers/details/zhang-lingzhi.jpg';
import zhangXinxinDetailImage from '../assets/images/teachers/details/zhang-xinxin.jpg';
import zhengLeDetailImage from '../assets/images/teachers/details/zheng-le.jpg';
import type { Teacher } from './types';

type TeacherDetail = Pick<
  Teacher,
  'name' | 'role' | 'detailImage' | 'biography'
>;

type TeacherDetailSlug =
  | 'ted-warren'
  | 'micheal-d-aleo'
  | 'karl-schurman'
  | 'xinchen-daoist'
  | 'zang-yibing'
  | 'lin-yuan'
  | 'bo-werner-eriksson'
  | 'jeff-martin'
  | 'pan-jianfeng'
  | 'song-jinchao'
  | 'liu-yuting'
  | 'chai-jian'
  | 'zheng-le'
  | 'zhang-lingzhi'
  | 'jin-zhenbao'
  | 'wu-fan'
  | 'hu-haiyan'
  | 'he-xiaoguo'
  | 'zhang-xinxin'
  | 'wang-shiyi'
  | 'alexa';

export function getTeacherDescription(body: string): string {
  const sentences = body.match(/[^。！？.!?]+[。！？.!?]+[”"']?/g) ?? [body];
  let description = '';

  for (const sentence of sentences) {
    description += sentence.trim();
    if ([...description].length > 10) break;
  }

  return description || body;
}

export const teacherDetails = {
  'ted-warren': {
    name: { zh: 'Ted Warren', en: 'Ted Warren' },
    role: {
      zh: '人智学导师，高中、大学人文教师',
      en: 'Anthroposophy mentor and humanities teacher for high school and university students',
    },
    detailImage: tedWarrenDetailImage,
    biography: [
      {
        zh: 'Ted Warren（泰德•沃伦）老师毕业于哈佛大学，然后在歌德大殿学习人智学和华德福教育，在挪威奥思罗施泰纳学校任教20多年，并在美国新泽西普林斯顿华德福学校担任主班老师。Ted Warren老师常年活跃在华德福教师培训领域，多年来担任歌德大殿世界教师大会议中心课程培训的主讲老师。自2010起，Ted Warren老师就在春之谷学院任教。',
        en: 'Ted Warren graduated from Harvard University and then studied Anthroposophy and Waldorf education at the Goetheanum. He taught for more than twenty years at the Oslo Steiner School in Norway and served as a class teacher at the Princeton Waldorf School in New Jersey. He has long been active in Waldorf teacher education and has taught courses at the World Teachers’ Conference at the Goetheanum. He has taught at Spring Valley Academy since 2010.',
      },
      {
        zh: '早在2003年Ted Warren老师就与林源老师一起在美国普林斯顿华德福学校探讨本土化的中国华德福课程，收集翻译德文文献中施泰纳关于东方文明和中国文化的论述，研究施泰纳的82种教学方法对教学法及方法论的学习和研究，能够帮助中国老师设计自己的课程。Ted Warren老师精通英文和德文，具有20多年华德福主班教学，英语教学经验，为研究中国化的课程倾注心血，尤其他对人智学中关于中国及东方的论述有专门研究。他是欧美公认华德福历史教学的专家，英语作为第二外语的专家。他是春之谷学院奠基人，自2010年，Ted Warren老师来中国开讲光与道的课程。',
        en: 'As early as 2003, Ted Warren and Lin Yuan explored how to develop a locally grounded Chinese Waldorf curriculum at the Princeton Waldorf School. They collected and translated Steiner’s discussions of Eastern civilization and Chinese culture from German sources and studied Steiner’s eighty-two teaching methods to help Chinese teachers design their own curricula. Fluent in English and German, Warren has more than twenty years of experience as a Waldorf class teacher and English teacher. He has devoted particular attention to Anthroposophical discussions of China and the East and is recognized in Europe and North America for his work in Waldorf history teaching and English as a second language. A founding contributor to Spring Valley Academy, he has taught the Light and Dao course in China since 2010.',
      },
    ],
  },
  'micheal-d-aleo': {
    name: { zh: "Micheal D'Aleo", en: "Micheal D'Aleo" },
    role: {
      zh: '人智学导师，自然、物理、天文教师',
      en: 'Anthroposophy mentor and teacher of nature studies, physics, and astronomy',
    },
    detailImage: michealDAleoDetailImage,
    biography: [
      {
        zh: 'Micheal D’Aleo（迈可 ）老师是将施泰纳的《自由的哲学》演绎成“鲜活的思考”并应用于华德福高年级教学，形成全新的教育体系的第一人。',
        en: 'Micheal D’Aleo was the first educator to develop Rudolf Steiner’s Philosophy of Freedom into an approach called “Living Thinking” and apply it to upper-grade Waldorf teaching as a new educational framework.',
      },
      {
        zh: 'Micheal D’Aleo老师是一名拥有17项美国专利发明的优秀工程师， 在发明生涯之余， 他一直关注是否有一种教育，能够真正培养解决当今世界各种问题的能力，结果他发现了华德福。他在一周之内同时遇到了华德福教育和藏传佛教，并影响了他二十多年，成为他生命的两大精神源泉。',
        en: 'An accomplished engineer with seventeen United States patents, D’Aleo spent his career as an inventor while searching for an education capable of cultivating the ability to address the problems of the modern world. He found Waldorf education and Tibetan Buddhism in the same week, and both became enduring spiritual sources in his life for more than twenty years.',
      },
      {
        zh: 'Micheal D’Aleo老师在日侨学院接受华德福专业培训后成为一名华德福初中物理和天文学老师，并在萨拉托拉加斯普林斯华德福学校，用全新课程体系和教学方法创办了的高中，这所高中的课程体系修改了美国华德福联盟的高中课程的标准。Micheal D’Aleo老师同时也是美国人智学中心华德福高中物理科学老师的督导老师，以及许多教师培训中心和华德福高中的客座老师。2017年，Micheal D’Aleo老师受春之谷、乐知和上海福源的邀请开始了“天梯计划---华德福高中课程培训”。自2017年，Micheal D’Aleo老师就在春之谷学院任教。',
        en: 'After completing professional Waldorf training at the Center for Anthroposophy, D’Aleo became a Waldorf middle-school physics and astronomy teacher. At the Waldorf School of Saratoga Springs, he helped establish a high school with a new curriculum and teaching approach that contributed to revisions of high-school curriculum standards in the Association of Waldorf Schools of North America. He has also mentored Waldorf high-school physical-science teachers through the Center for Anthroposophy and served as a guest teacher at teacher-training centers and Waldorf high schools. In 2017, at the invitation of Spring Valley, Lezhi, and Shanghai Fuyuan, he began the “Ladder Program” for Waldorf high-school curriculum training. He has taught at Spring Valley Academy since 2017.',
      },
    ],
  },
  'karl-schurman': {
    name: { zh: 'Karl Schurman', en: 'Karl Schurman' },
    role: {
      zh: '7-12年级历史、英语教师，教学督导',
      en: 'History and English teacher for grades 7–12 and teaching mentor',
    },
    detailImage: karlSchurmanDetailImage,
    biography: [
      {
        zh: '7-12年级文史地、英语教师，教学督导历史、社会研究、英语、戏剧、电影老师Karl Schurman，普林斯顿大学毕业;纽约大学电影专业本科;帝国大学（BS）;曾在新罕布什尔人智学中心完成华德福高中教师培训。从2002年至2010年，卡尔主要在美国纽约春之谷绿茵华德福学校高中任教，并担任高年级班主任。2010年，他在新罕布什尔州基恩创立了Monadnock Waldorf高中，在那里他担任了教师会主席五年，并在两个教师学院担任指导新Waldorf教师，指导了十四个戏剧，并教授华德福高中的几乎所有科目，尢其擅长教授人文课程，包括中国历史。他于2018年6月从全日制教学中退休。卡尔四个成年子女中有三个是华德福高中毕业生。正是通过他们，他作为华德福的家长在19年间亲身体验了华德福教育。由于他的孩子的变化经历，卡尔决定在纽约市电影业务工作三十多年后成为华德福老师。从1973年至2005年，电影拍摄将他带到了美国和世界各地，包括2005年在中国的两部拍摄：一部是环保NGO的纪录片，另一部是IBM的宣传片。他还是1980年PBS电视纪录片“特蕾莎修女的世界”中的一位著名作家和摄影师。他对电影史、法语、土著美国、神秘的苏菲诗歌，当然还有中国及其文化保持着浓厚的兴趣！他曾在比利时布鲁塞尔度过了他自己最享受的四年的高中生涯。自2018年，卡尔•舒曼老师一直担任春之谷学院高中教师，EWIP史地、英语教师。',
        en: 'Karl Schurman teaches history, geography, literature, and English in grades 7–12 and serves as a teaching mentor. He graduated from Princeton University, studied film at New York University, earned a BS from Empire State College, and completed Waldorf high-school teacher training at the Center for Anthroposophy in New Hampshire. From 2002 to 2010, he taught primarily at Green Meadow Waldorf School in Spring Valley, New York. In 2010 he founded Monadnock Waldorf High School in Keene, New Hampshire, chaired its faculty for five years, mentored new teachers, directed fourteen plays, and taught nearly every high-school subject, especially the humanities and Chinese history. He retired from full-time teaching in June 2018. Three of his four adult children graduated from Waldorf high schools, giving him nineteen years of experience as a Waldorf parent. Their development inspired him to become a teacher after more than thirty years in the New York City film industry. Film work took him across the United States and around the world from 1973 to 2005, including two productions in China in 2005. He was also a writer and cinematographer for the 1980 PBS documentary Mother Teresa’s World. His interests include film history, French, Indigenous America, Sufi poetry, and Chinese culture. Since 2018, he has taught high-school history, geography, and English at Spring Valley Academy and in EWIP.',
      },
    ],
  },
  'xinchen-daoist': {
    name: { zh: '信辰道长', en: 'Daoist Xinchen' },
    role: {
      zh: '龙门派第二十五代弟子，武当武术传人',
      en: 'Twenty-fifth-generation Longmen lineage disciple and inheritor of Wudang martial arts',
    },
    detailImage: xinchenDaoistDetailImage,
    biography: [
      {
        zh: '信辰道长是武当山龙门派第二十五代弟子，武当武术传人，以一身好功夫名扬天下，曾获央视武林大会全国总冠军和陕西省十佳杰出青年。信辰道长曾在遇真宫修练武功，后在武当山发源地五龙宫修行道家文化、中医、周易，居于山洞中修行，文武双全，内外兼修，对武当内家拳、太极拳有很深的造诣。信辰道长在武当开馆授徒已十余年，期间培养出大批优秀武当弟子，为武当武术的传承、发扬和创新做出了巨大贡献。信辰道院座落在真武大帝的祖庭磨针井。自2018年，信辰道长就在教授武术课程。',
        en: 'Daoist Xinchen is a twenty-fifth-generation disciple of the Wudang Longmen lineage and an inheritor of Wudang martial arts. Renowned for his martial skill, he won the national championship of CCTV’s Wulin Assembly and was named one of Shaanxi Province’s ten outstanding young people. He trained at Yuzhen Palace and later practiced Daoist culture, traditional Chinese medicine, and the Book of Changes at Wulong Palace, including a period of cave practice. He has deep expertise in Wudang internal martial arts and tai chi. He has taught students in Wudang for more than a decade, training many practitioners and contributing to the preservation, development, and renewal of Wudang martial arts. Xinchen Daoist Academy is located at Mozhen Well, regarded as the ancestral site of Emperor Zhenwu. He has taught martial arts courses since 2018.',
      },
    ],
  },
  'zang-yibing': {
    name: { zh: '臧艺兵', en: 'Zang Yibing' },
    role: {
      zh: '原华中师范大学音乐学院教授、院长',
      en: 'Former professor and dean of the School of Music at Central China Normal University',
    },
    detailImage: zangYibingDetailImage,
    biography: [
      {
        zh: '原华中师范大学音乐学院教授、院长，笔名臧一冰。音乐史硕士，香港中文大学哲学（民族音乐学）博士。华中师范大学非物质化遗产研究中心研究员，湖北省音乐实验教学示范中心主任，中央电视台音乐频道《民歌中国》特聘专家，世界传统音乐学会（ICTM）会员。著有《中国音乐史》、《作为文化的音乐》等书，并曾在近年发表《中国音乐记谱法历史沿革》、《对音乐行为过程的人类学阐释》、《中国音乐与八亿农民》、《民间歌手与乡土文明建构》、《口述史与音乐史——中国音乐史写作的新视角》等数十篇论文。《民歌与安魂》是一部二十多万字的田野采风录。其中可以《民歌与安魂》是臧一冰教授以民族音乐学田野调查的方法，通过对一位汉族民间歌师个人命运的描述与阐释，研究这位本土“歌师”六十年间，个人与社会、与历史、与音乐之间互为建构的历程。本研究与其他人文学科关于人的研究有着共同的学术取向：通过人解读文化，通过文化解读人。任何一项有价值的学术命题的最终确立，事实上都会体现出研究者对本学科学术传统及学术语境的历史思考和现代应答。为方便读者对本研究的意图、构想有一个整体了解，以下将对本论题的研究语境与缘由、研究对象定位、相关的文献回顾、研究的理论视角与方法、研究的对象范围和目的以及《民歌与安魂》独具的文本表述方式等予以必要叙述。自2021年，臧艺兵老师在春之谷学院讲学。',
        en: 'Zang Yibing, also known by the pen name Zang Yibing written with a different final character, is a former professor and dean of the School of Music at Central China Normal University. He holds a master’s degree in music history and a PhD in ethnomusicology from the Chinese University of Hong Kong. He has served as a researcher at the university’s Intangible Cultural Heritage Research Center, director of the Hubei Music Experimental Teaching Demonstration Center, a specially appointed expert for CCTV Music’s Folk Songs of China, and a member of the International Council for Traditions of Music and Dance. His books include A History of Chinese Music and Music as Culture, and he has published dozens of papers on Chinese notation, musical behavior, rural musical life, folk singers, and oral history. His fieldwork volume Folk Songs and Requiem examines the sixty-year relationship among a Han folk singer, society, history, and music, interpreting culture through people and people through culture. Zang has lectured at Spring Valley Academy since 2021.',
      },
    ],
  },
  'lin-yuan': {
    name: { zh: '林源', en: 'Lin Yuan' },
    role: {
      zh: '青衿学院创始人，春之谷学院院长',
      en: 'Founder of Qingjin Academy and director of Spring Valley Academy',
    },
    detailImage: linYuanDetailImage,
    biography: [
      {
        zh: '曾就读于南京师范大学、北京鲁迅文学院、北京大学。2001年赴美在日桥学院完成华德福教师培训课程，并获得教育学硕士学位。先后任教于美国普林斯顿华德福学校、布鲁克林华德福学校（k-8年级）及乔治学校（9-12年级），教授中文及历史等课程。他融合人智学与中国文化、华德福教育与中国教育的理念和方法，创立了一套深受美国中小学生喜欢的《世界和图中文教程》，该教程连续5年获得纽约州政府所颁发的艺术教育基金奖。2010年他回北京创办春之谷学院，2011年起与同伴一起创办春之谷学园，并从2012年起担任春之谷学园壬辰班主班老师，先后任教师会主席和教师学院主席。现任春之谷学院院长，“东西方国际高中文凭课程（EWIP)”项目负责人，青衿学院创始人。',
        en: 'Lin Yuan studied at Nanjing Normal University, the Beijing Lu Xun Literature Institute, and Peking University. In 2001, he went to the United States, completed Waldorf teacher training at Sunbridge Institute, and earned a master’s degree in education. He subsequently taught Chinese, history, and other subjects at Princeton Waldorf School, Brooklyn Waldorf School for grades K–8, and George School for grades 9–12. Bringing together Anthroposophy and Chinese culture as well as Waldorf and Chinese educational approaches, he created the World Chinese Language Curriculum, which became popular with American primary and secondary students and received arts-education funding awards from New York State for five consecutive years. He returned to Beijing in 2010 to found Spring Valley Academy and helped establish Spring Valley School in 2011. From 2012, he served as class teacher of the Renchen class and later chaired both the faculty council and teacher education institute. He is currently director of Spring Valley Academy, leader of the East-West International High School Diploma Program (EWIP), and founder of Qingjin Academy.',
      },
    ],
  },
  'bo-werner-eriksson': {
    name: { zh: 'Bo Werner Eriksson', en: 'Bo Werner Eriksson' },
    role: {
      zh: '在欧洲学习华德福绘画和艺术教师',
      en: 'European-trained Waldorf painting artist and art teacher',
    },
    detailImage: boWernerErikssonDetailImage,
    biography: [
      {
        zh: '讲授艺术和色彩理论。Bo Werner Eriksson老师出生于瑞典，17岁开始学画画，1978年移居瑞士，在人智学中心歌德大殿学习绘画获得硕士学位，然后在一所艺术学校教学11年。1995年他与他们全家移居挪威，他学习音语舞，并获得专业证书，然后他在奥斯罗华德福学校担任多年的艺术教师。2000年他移居德国，在那里建立他的个人工作室，并从事教学。2005年回到瑞典，自己建造了房子和工作室。Bo Werner Eriksson老师是少数几个只注重色彩过程而不注重结果的艺术家之一。作为在欧洲享有盛誉的华德福的专业艺术教师，他最擅长教授色彩理论，色彩与儿童气质，色彩与自然元素之间的关系；色彩运动，色彩优柔思美；水彩画，形线画，黑板画，彩绘墙的行为艺术等。他对中国文化情有独钟，对《易经》，《道德经》有深入研究，对中国画十分推崇。自2011年，Bo Werner Eriksson老师就在春之谷学院任教。',
        en: 'Bo Werner Eriksson teaches art and color theory. Born in Sweden, he began painting at seventeen and moved to Switzerland in 1978, where he earned a master’s degree in painting at the Goetheanum before teaching for eleven years at an art school. In 1995, he moved with his family to Norway, studied eurythmy, earned a professional certificate, and taught art for many years at the Oslo Waldorf School. He moved to Germany in 2000, established his own studio, and continued teaching. In 2005 he returned to Sweden and built his own home and studio. Eriksson focuses on the process of color rather than only the result. He specializes in color theory; relationships among color, children’s temperaments, and natural elements; color movement and color eurythmy; watercolor, form drawing, blackboard drawing, and painted-wall performance art. He has studied the Book of Changes and the Dao De Jing and greatly admires Chinese painting. He has taught at Spring Valley Academy since 2011.',
      },
    ],
  },
  'jeff-martin': {
    name: { zh: 'Jeff Martin', en: 'Jeff Martin' },
    role: {
      zh: '美国芝加哥华德福教师和讲主讲',
      en: 'Waldorf teacher educator and lecturer in Chicago',
    },
    detailImage: jeffMartinDetailImage,
    biography: [
      {
        zh: '杰夫•马丁，人智学导师，1947年出生于美国印第安那州，大学毕业后研究社会科学，后去英国爱默生学院学习人智学，然后去英国南部的人智学社会发展中心工作，成为组织发展咨询及过程推动专家。三十年来，作为教师，分析家及顾问工作于不同的组织机构，同时他带领各种工作坊，深化研究人智学，并运用于实践。最近三年，他在英国、德国和法国研究和讲授人智学。他还是美国芝加哥华德福教师培训的主讲人智学的老师。他是全球少有的几位能将人智学讲得既深刻又生动的教师之一。杰夫老师近来一直致力于东西方人学的研究、老子、佛陀和孔子智慧和施泰纳智慧的比较。自2011年起，杰夫老师就在春之谷学院任教，是一位深受学员爱戴的人智学导师。',
        en: 'Jeff Martin is an Anthroposophy mentor born in Indiana in 1947. After university he studied social science, then studied Anthroposophy at Emerson College in England and worked at an Anthroposophical center for social development in southern England, becoming a specialist in organizational development consulting and process facilitation. For thirty years he worked with different organizations as a teacher, analyst, and consultant while leading workshops that deepened the study and practical application of Anthroposophy. He later researched and taught Anthroposophy in the United Kingdom, Germany, and France and served as a principal Anthroposophy teacher in Waldorf teacher education in Chicago. His recent work has explored Eastern and Western understandings of the human being and compared the wisdom of Laozi, the Buddha, and Confucius with that of Steiner. He has taught at Spring Valley Academy since 2011.',
      },
    ],
  },
  'pan-jianfeng': {
    name: { zh: '潘剑峰', en: 'Pan Jianfeng' },
    role: {
      zh: '社区管理和发展专家、心性陪伴者',
      en: 'Community management and development specialist and personal-growth mentor',
    },
    detailImage: panJianfengDetailImage,
    biography: [
      {
        zh: '潘剑峰，社群名Laopan，社会艺术家，社区管理和发展专家，心性陪伴者。2012年创建Work Face至今，一直奉行：所有人服务所有人，所有人向所有人学习，所有人支持所有人。自2024年起，潘剑峰老师一直参与支持春之谷青衿学院创建工作。',
        en: 'Pan Jianfeng, known in his community as Laopan, is a social artist, a specialist in community management and development, and a mentor in personal growth. Since founding WorkFace in 2012, he has upheld three principles: everyone serves everyone, everyone learns from everyone, and everyone supports everyone. Since 2024, he has helped support the founding of Spring Valley Qingjin Academy.',
      },
    ],
  },
  'song-jinchao': {
    name: { zh: '宋进潮', en: 'Song Jinchao' },
    role: {
      zh: '襄阳民间文学研究所所长、民歌传承人',
      en: 'Director of the Xiangyang Folk Literature Research Institute and folk-song tradition bearer',
    },
    detailImage: songJinchaoDetailImage,
    biography: [
      {
        zh: '襄阳民间文学研究所所长，保康县文化馆副馆长、县民协主席，中国民间文艺家协会会员，湖北省戏剧家协会会员，湖北省报告文学研究会理事、编辑，省文联戏剧签约作家，荆楚文化研究会会员，襄阳市历史文化研究会理事、市美术家协会会员，省“劳动模范”，市“政府津贴待遇”；保康县宣传思想文化工作“突出贡献”奖。1963年出生于保康县马良镇宋家湾村，编辑出版《黑暗传》全集《长江文艺出版社》。自2022年起，宋进潮老师多次给春之谷学院和EWIP学生讲授《黑暗传》和民间文化。',
        en: 'Song Jinchao is director of the Xiangyang Folk Literature Research Institute, deputy director of the Baokang County Cultural Center, and chair of the county folk-literature and art association. He belongs to national and provincial folk-art, drama, reportage, cultural, historical, and visual-art organizations and has received provincial model-worker recognition, a municipal government allowance, and an award for outstanding contributions to public culture in Baokang County. Born in Songjiawan Village, Maliang Town, Baokang County, in 1963, he edited and published the complete Epic of Darkness through Changjiang Literature and Art Publishing House. Since 2022, he has repeatedly taught the Epic of Darkness and folk culture to students at Spring Valley Academy and EWIP.',
      },
    ],
  },
  'liu-yuting': {
    name: { zh: '刘昱廷', en: 'Liu Yuting' },
    role: {
      zh: '全真武当山道医及太乙五行拳导师',
      en: 'Quanzhen Wudang Taoist medicine and Taiyi Five Elements Boxing instructor',
    },
    detailImage: liuYutingDetailImage,
    biography: [
      {
        zh: '道号：崇煜，武当龙门派第二十六代弟子国家体育总局认证武当武术规范化优秀教练员。第十三届全运会武当山赛区太乙五行拳冠军。第六届武当国际演武大赛 太极拳、太极剑冠军。曾任衡东少年军校武当功夫教练师，莫汇苏州武道中心总教练幼时喜读道家经典，十二岁上武当山求学于磨针井信辰道长，致力于传承弘扬武当武术，让更多人爱好学习中华道家优秀文化，曾多次被邀往北京单位和武校授课或常随师父左右去往上海，广州，香港等地区宣传弘扬武当武术优秀传统文化，深得师父赞扬鼓励。传承发扬的路上，坚定信念，不忘使命。现在武当道教学院学习。自2021年，刘昱延老师一直是春之谷学院的武术教练。',
        en: 'Liu Yuting, whose Daoist name is Chongyu, is a twenty-sixth-generation disciple of the Wudang Longmen lineage and an outstanding standardized Wudang martial-arts coach certified by China’s General Administration of Sport. He won the Taiyi Five Elements Boxing championship in the Wudang Mountain division of the 13th National Games and championships in tai chi and tai chi sword at the Sixth Wudang International Martial Arts Competition. He previously taught Wudang kung fu at the Hengdong Youth Military School and served as head coach at the Mohui Suzhou martial arts center. Fond of Daoist classics from childhood, he went to Wudang Mountain at age twelve to study under Daoist Xinchen at Mozhen Well. He is committed to preserving and sharing Wudang martial arts and Chinese Daoist culture and has taught in Beijing, Shanghai, Guangzhou, Hong Kong, and other places. He now studies at Wudang Taoist College and has served as a martial-arts coach at Spring Valley Academy since 2021.',
      },
    ],
  },
  'chai-jian': {
    name: { zh: '柴建', en: 'Chai Jian' },
    role: {
      zh: '三丰自然派第二十六代传人、道医',
      en: 'Twenty-sixth-generation inheritor of the Sanfeng Natural School and Taoist medicine practitioner',
    },
    detailImage: chaiJianDetailImage,
    biography: [
      {
        zh: '柴建（道号：凌虚子），武当三丰自然派第二十六代传人。世居武当山，祖上两代均为武当正一派道人。师从武当三丰自然派第二十五代掌门人张奇习练道法、武术、道医等，多年来博采众长，在道医道药方面取得了较深的造诣。2022年起，柴建老师就作为春之谷学院及EWIP项目的道医老师。',
        en: 'Chai Jian, whose Daoist name is Lingxuzi, is a twenty-sixth-generation inheritor of the Wudang Sanfeng Natural School. His family has lived at Wudang Mountain for generations, and the two generations before him were Daoists of the Wudang Zhengyi tradition. He studied Daoist practice, martial arts, and Taoist medicine under Zhang Qi, the twenty-fifth-generation head of the Wudang Sanfeng Natural School. Drawing on many traditions over the years, he has developed particular expertise in Taoist medicine and herbal remedies. Since 2022, he has taught Taoist medicine at Spring Valley Academy and in the EWIP program.',
      },
    ],
  },
  'zheng-le': {
    name: { zh: '郑乐', en: 'Zheng Le' },
    role: {
      zh: '张三丰历史文化研究会副会长',
      en: 'Former vice chair of the Zhang Sanfeng History and Culture Research Association',
    },
    detailImage: zhengLeDetailImage,
    biography: [
      {
        zh: '长线课人文老师，吉它/书法老师。郑乐，湖北十堰人，大学文化，曾任十堰市张三丰历史文化研究会副会长、十堰市古典吉他学会理事、武当山书法家协会理事、十堰市地方文献研究室成员。长期致力于地方人文、古天文历法、古文字、古建筑研究，尤其孜孜不倦于大武当大汉水文化的研究。自2021年，郑乐老师担任春之谷学院及EWIP的教学。',
        en: 'Zheng Le teaches humanities in the long-term program as well as guitar and calligraphy. A native of Shiyan, Hubei, he has served as vice chair of the Shiyan Zhang Sanfeng History and Culture Research Association, a council member of the Shiyan Classical Guitar Society and Wudang Mountain Calligraphers Association, and a member of the Shiyan Local Documents Research Office. He has long studied local humanities, ancient astronomy and calendars, early writing, and historic architecture, with particular dedication to the culture of the greater Wudang and Han River regions. He has taught at Spring Valley Academy and in EWIP since 2021.',
      },
    ],
  },
  'zhang-lingzhi': {
    name: { zh: '张灵芝', en: 'Zhang Lingzhi' },
    role: {
      zh: '出生于书画世家，深耕艺术教育',
      en: 'Artist and educator from a family tradition of calligraphy and painting',
    },
    detailImage: zhangLingzhiDetailImage,
    biography: [
      {
        zh: '书法、国画老师出生于书画世家，八岁起随父学习书法。曾多次获得全国书法比赛和国画比赛一等奖，以及赛克勒杯国际书法比赛少年组最佳奖（全国三名）。1996年考取南京艺术学院，作品《女青年写生》被留校收藏。入大学后有幸得到老师们与同道益友的开启。方知学习必亲证而知，是为真知，同时开始考察中国文化的过去与现在。2001年开始从事艺术教育。2009年与友人创办甘棠美育。2013年暑假，对艺术教育重新审视:发现艺术教育必须拓宽到完全的教育领域，艺术教育必须从对概念的追逐回到个体的真实体验。2014年确立教育的根本方向:没有深入而具体的观察就没有真正的艺术学习。2016年底筹办月亮院子。旨在全力开启守护式，共生式学习:孩子的观察与思考必须得到小心翼翼的保护；教育者与被教育者，必须同时走在学习之路，让深刻的共同生长在我们的生活中真切的发生。自2018年，张灵芝老师担任春之谷EWIP美术板块老师。',
        en: 'Zhang Lingzhi teaches calligraphy and traditional Chinese painting. Born into a family of calligraphers and painters, she began studying calligraphy with her father at age eight. She received multiple first prizes in national calligraphy and Chinese painting competitions and a youth award in the Sackler Cup International Calligraphy Competition. She entered Nanjing University of the Arts in 1996, where her work Study of a Young Woman was retained in the university collection. She began working in arts education in 2001 and co-founded Gantang Aesthetic Education in 2009. Reconsidering arts education in 2013, she concluded that it must expand into the whole field of education and return from the pursuit of concepts to individual lived experience. In 2014, she established a guiding principle: without deep and concrete observation, there can be no genuine artistic learning. At the end of 2016 she began organizing Moon Courtyard, devoted to protective and symbiotic learning in which children’s observation and thinking are carefully safeguarded and educators and learners grow together. She has taught visual arts in Spring Valley EWIP since 2018.',
      },
    ],
  },
  'jin-zhenbao': {
    name: { zh: '金振豹', en: 'Jin Zhenbao' },
    role: {
      zh: '幼子夏狄守护中心负责人',
      en: 'Director of the Xia Di Youth Care Center',
    },
    detailImage: jinZhenbaoDetailImage,
    biography: [
      {
        zh: '博士，精通英语和德语，曾经为南京师范大学法学院教师和北京中伦律师事务所律师。自2013年以来，金振豹博士因为身体健康原因，通过深入研究和实修，形成了整合道家、儒家、佛家以及相关科学和哲学，动静结合的冥想疗愈体系，使自己的淋巴癌和多种慢性病不药而愈，也使冥想成为简便易行易学，科学有趣有效的自我疗愈和生命成长之道。金振豹博士是深圳动子冥想疗愈中心负责人，中山五桂山桂南学校身心健康顾问，以及由腾讯公益基金、广东中山旗迹美术中心、桂南学校等机构联合发起的乡村美术老师千人种子公益培训计划的专家团成员，温州乡村民宿发展协会疗愈经济专委会理事会顾问，曾在美国，英国，德国，瑞士，西班牙，葡萄牙等国家开展过冥想疗愈和中国文化传统的培训。金振豹老师将在青衿学院担任中国传统文化及冥想疗愈的教学。',
        en: 'Jin Zhenbao holds a doctorate, is fluent in English and German, and formerly taught at the Law School of Nanjing Normal University and practiced law at Zhong Lun Law Firm in Beijing. Since 2013, following health problems, he has developed through study and practice a meditation and healing system that combines Daoist, Confucian, and Buddhist traditions with related scientific and philosophical approaches and integrates stillness with movement. He reports that this practice helped him recover from lymphoma and several chronic illnesses without medication and shaped meditation into an accessible approach to self-healing and personal growth. Jin directs the Shenzhen Dongzi Meditation and Healing Center, advises Guinan School in Wuguishan, Zhongshan, on physical and mental wellbeing, and serves with several nonprofit and professional initiatives. He has led meditation, healing, and Chinese cultural training in the United States, United Kingdom, Germany, Switzerland, Spain, Portugal, and other countries. At Qingjin Academy, he teaches Chinese traditional culture and meditation practices.',
      },
    ],
  },
  'wu-fan': {
    name: { zh: '吴璠', en: 'Wu Fan' },
    role: {
      zh: '应用经济学博士，系统士大学工商管理博导',
      en: 'PhD in applied economics and doctoral supervisor in business administration',
    },
    detailImage: wuFanDetailImage,
    biography: [
      {
        zh: '应用经济学博士，副教授。30 年的经济、管理与金融方面的教育与科研;13 年奢侈品和珠宝企业的品牌管理和营销咨询与培 训，曾担任多家欧洲珠宝品牌中国区商务代表。',
        en: 'Wu Fan holds a PhD in applied economics and is an associate professor. She has thirty years of teaching and research experience in economics, management, and finance, along with thirteen years of brand management, marketing consulting, and training for luxury-goods and jewelry companies. She has also served as the China business representative for several European jewelry brands.',
      },
      {
        zh: '现任莱佛士大学工商管理博导。曾任要客研究院副院长，梵克雅宝 L’ÉCOLE 珠宝艺术中心教务经理，上海建桥学院奢侈品管理系系主任、副教授，西安财经大学金融学副教授；兼任法国诺欧商学院、巴黎商学院、瑞士管理学员等国际院校 EMBA、MBA 等硕士项目客座教授，中国黄金报社《中国黄金珠宝》杂志特邀专栏作者。',
        en: 'She is currently a doctoral supervisor in business administration at Raffles University. Her previous roles include deputy director of the Hurun Research Institute, academic affairs manager at Van Cleef & Arpels’ L’ÉCOLE School of Jewelry Arts, department chair and associate professor of luxury management at Shanghai Jian Qiao University, and associate professor of finance at Xi’an University of Finance and Economics. She has been a guest professor in EMBA, MBA, and other graduate programs at international institutions including NEOMA Business School, Paris School of Business, and the Swiss Institute of Management, and a guest columnist for China Gold Jewelry magazine.',
      },
      {
        zh: '吴璠老师将在青衿学院担任经济管理的板块课程，包括营销战略、零售管理、高客服务专家，致力于高端品牌管理、运营、营销、销售和高客服务体系建设。',
        en: 'At Qingjin Academy, Wu teaches the economics and management module, including marketing strategy, retail management, and services for high-value clients, drawing on her work in premium-brand management, operations, marketing, sales, and client-service systems.',
      },
    ],
  },
  'hu-haiyan': {
    name: { zh: '胡海燕', en: 'Hu Haiyan' },
    role: {
      zh: '医学博士，人类医学研究、写作翻译',
      en: 'Medical doctorate with experience in medical research, writing, and translation',
    },
    detailImage: huHaiyanDetailImage,
    biography: [
      {
        zh: '上海第二医科大学（现上海交通大学医学院）本科学位，日内瓦大学医学院博士和博士后研究员，瑞士伯尔尼生理研京生博士后研究员，日内瓦大学法语系文凭。曾在瑞士、美国、日内瓦从事过医学研究、写作翻译和中文教学。精通英语、法语，胡海燕老师将在青衿学院担任英语、生命科学、医学教师。',
        en: 'Hu Haiyan earned her undergraduate degree from Shanghai Second Medical University, now Shanghai Jiao Tong University School of Medicine, and completed doctoral and postdoctoral study at the University of Geneva Faculty of Medicine. She also conducted postdoctoral research in physiology in Bern, Switzerland, and holds a diploma from the University of Geneva’s French department. She has worked in medical research, writing and translation, and Chinese-language teaching in Switzerland, the United States, and Geneva. Fluent in English and French, she teaches English, life science, and medicine at Qingjin Academy.',
      },
    ],
  },
  'he-xiaoguo': {
    name: { zh: '何孝国', en: 'He Xiaoguo' },
    role: {
      zh: '儒释道三家传统文化与传统身心行者',
      en: 'Practitioner and teacher of Confucian, Buddhist, and Daoist traditions',
    },
    detailImage: heXiaoguoDetailImage,
    biography: [
      {
        zh: '号明道，儒释道三家传统心性文化传承与传播者。精通书法、禅茶与正念疗愈，可深入讲授《劝学》、《道德经》、《大学》、《中庸》、《心经》、《金刚经》、《六祖坛经》等传统文化经典。曾任中外合资公司副总经理、环境科技公司总经理、西南红色书画研究院副院长、正心书院院长、重庆理工大学硕士生校外产业导师、华盛绿色工业基金会绿色发展专家顾问。从小酷爱书法，在因缘际会自心流露，创立正念慧观全息书法流派，开发正念书法疗愈课程，以期帮助到更多正在迷惑与受苦的有缘人。',
        en: 'He Xiaoguo, also known as Mingdao, carries and shares traditional approaches to the cultivation of mind and character from Confucianism, Buddhism, and Daoism. He is accomplished in calligraphy, Chan tea practice, and mindfulness-based healing and teaches classical works including Encouragement of Learning, the Dao De Jing, Great Learning, Doctrine of the Mean, Heart Sutra, Diamond Sutra, and Platform Sutra of the Sixth Patriarch. His previous roles include deputy general manager of a Sino-foreign joint venture, general manager of an environmental technology company, deputy director of the Southwest Red Calligraphy and Painting Research Institute, director of Zhengxin Academy, external industry mentor for master’s students at Chongqing University of Technology, and green-development expert adviser to the Huasheng Green Industry Foundation. A lifelong student of calligraphy, he founded a mindfulness-based holistic calligraphy approach and developed mindful calligraphy and healing courses intended to support people experiencing confusion and suffering.',
      },
    ],
  },
  'zhang-xinxin': {
    name: { zh: '张馨心', en: 'Zhang Xinxin' },
    role: {
      zh: '文艺创作者，集体导演于一身',
      en: 'Writer, artist, performer, and director',
    },
    detailImage: zhangXinxinDetailImage,
    biography: [
      {
        zh: '号乐安。文艺创作者，自幼登台歌舞，集编导演于一身。上海戏剧学院戏剧文学系编剧本科专业，学戏做戏三十余年间原创并制作演出六百余场。创意策展国际艺术节和跨文化交流的信使行者。',
        en: 'Zhang Xinxin, also known as Le’an, is a literary and performing artist who has sung and danced on stage since childhood and works as a writer, performer, and director. She studied playwriting in the Department of Dramatic Literature at the Shanghai Theatre Academy. Across more than thirty years of studying and making theatre, she has created and produced over six hundred performances. She also curates international arts festivals and works as a facilitator of cross-cultural exchange.',
      },
      {
        zh: '当过记者、电台主持人、广告人，音乐MTV、电视剧和综艺节目的制作发行，为房地产、医药、有机农场等品牌媒体宣传。1999年于原上海东方广播电台创办了国内首个亲子育儿节目，并兼职《为了孩子》编辑；迄今25年陪伴孩子一起成长。',
        en: 'She has worked as a journalist, radio host, advertising professional, and producer and distributor of music videos, television dramas, and variety programs, as well as in communications for real-estate, pharmaceutical, organic-farm, and other brands. In 1999, at the former Shanghai East Radio, she founded China’s first radio program for parents and children and also worked as an editor for For the Children. Her work has accompanied children and families for twenty-five years.',
      },
      {
        zh: '2012年与华德福教育结缘后，深耕北京南山等新教育学校社区、研习汉字、中医等传统文化，进修优律诗美、十二感官等人智学，探索沉浸自然“心艺合一”的教学实践和乡村美育，辅导全国教师戏剧培训，指导合唱团、歌舞、小丑、木偶、京剧等表演艺术，发起组织《戏剧与内在成长》、《与偶相遇的生命教育》《回到身体的家》《生命之花》共创领导力等课程，发展诗意的身体与创造性多元化表达，以及艺术疗愈等社会应用。编剧执导《逃跑的煎饼》《安魂曲》《仲夏夜之梦》《浮士德》《XIN西游记》等校园版实验作品，带领儿童、青少年和素人身心演练，共创社区剧场。',
        en: 'After encountering Waldorf education in 2012, Zhang became deeply involved in new-education school communities including Beijing Nanshan. She studied Chinese characters, traditional Chinese medicine, and other cultural traditions, while continuing her education in eurythmy, the twelve senses, and other areas of Anthroposophy. Her work explores nature-immersive teaching, rural aesthetic education, drama training for teachers, and performance forms including choir, song and dance, clowning, puppetry, and Peking opera. She initiated courses on drama and inner growth, life education through puppetry, embodied practice, co-creative leadership, diverse creative expression, and arts-based healing. She has written and directed experimental school productions including The Runaway Pancake, Requiem, A Midsummer Night’s Dream, Faust, and XIN Journey to the West, guiding children, young people, and nonprofessional performers in community theatre-making.',
      },
    ],
  },
  'wang-shiyi': {
    name: { zh: '王诗溢', en: 'Wang Shiyi' },
    role: {
      zh: '神经生物学博士，科学成长社群发起人',
      en: 'PhD in neurobiology and founder of a science-based learning community',
    },
    detailImage: wangShiyiDetailImage,
    biography: [
      {
        zh: '波恩大学医学院神经生物学博士。WorkFace科学成长社群发起人，主理《脑科学与家庭教育》系列读书会和家长课堂。WorkFace上海，武当山召集人。教育纪录片《生命旅途》、《未来学校～儿童社会情感学习》策划。首届教育人戈壁体验赛、家庭戈壁体验赛联合发起人。曾担任家庭教育指导师，创新教育顾问，上海一见图书馆顾问。自2024年9月，王诗溢老师开始担任春之谷EWIP生命科学板块教学。',
        en: 'Wang Shiyi holds a PhD in neurobiology from the University of Bonn Faculty of Medicine. She founded the WorkFace Science and Growth Community and leads the Brain Science and Family Education reading series and parent classes. She convenes WorkFace groups in Shanghai and Wudang Mountain, planned the education documentaries Journey of Life and Future School: Children’s Social and Emotional Learning, and co-founded the first Gobi Experience Challenge for educators and the Family Gobi Experience Challenge. She has worked as a family-education adviser, innovative-education consultant, and adviser to Shanghai Yijian Library. Since September 2024, she has taught the life-science module in Spring Valley EWIP.',
      },
    ],
  },
  alexa: {
    name: { zh: 'ALEXA', en: 'ALEXA' },
    role: {
      zh: '心理学专业毕业，资深国际德语教师',
      en: 'Psychology graduate and experienced international German teacher',
    },
    detailImage: alexaDetailImage,
    biography: [
      {
        zh: '德语老师（线上）。毕业于心理学专业，研究方向为社会科学，儿童发展，认知心理学，神经心理学，具备国际德语教师资格证和国际英语教师资格证。Alexa是德国⼈，曾在英国生活工作十余年，先后在伦敦各个中小学进行德语教学，学生心理关怀辅导等工作。目前任职德国法兰克福某私立学校。教授国际学生德语，以及德国本地学生英语。教学优势：具有国际德语教师资格证。专门研究过如何教授德语为非母语的学生学习德语的方法。并在多年和国际学生的交流磨合中将研究方法付诸实践。目前Alexa班级内就有教授的中国学生，她深知中国学生学习语言的弱项，并能够根据中国学生语言学习的普遍问题进行教学方案的侧重和调整。具有英语德语双国际教师资格证书。可以帮助孩子分析学习语言的共性和方法。让孩子能够在语言学习中获得乐趣。而不是枯燥的记忆。儿童心理学研究的专业背景，以及多年辅导个别学习困难学生的经验能够帮助个体学生分析个人不同的学习困难，并陪伴鼓励学生面对困难，专业的教学技巧也能够帮助学生找到克服语言学习困难的障碍。',
        en: 'Alexa teaches German online. A psychology graduate, she studied social science, child development, cognitive psychology, and neuropsychology and holds international teaching qualifications in both German and English. Originally from Germany, she lived and worked in the United Kingdom for more than ten years, teaching German in primary and secondary schools across London and supporting students’ psychological wellbeing. She now teaches at a private school in Frankfurt, Germany, where she teaches German to international students and English to local students. Her specialist training focuses on teaching German as an additional language, and she has applied this research through years of work with international learners. Because she currently teaches Chinese students, she understands common challenges Chinese learners face and adapts her methods accordingly. Her background in child psychology and experience supporting students with individual learning difficulties help her identify personal barriers, encourage learners, and make language learning enjoyable rather than an exercise in rote memorization.',
      },
    ],
  },
} as const satisfies Record<TeacherDetailSlug, TeacherDetail>;
