import boWernerErikssonDetailImage from '../assets/images/teachers/details/bo-werner-eriksson.jpg';
import chaiJianDetailImage from '../assets/images/teachers/details/chai-jian.webp';
import chengMingxuDetailImage from '../assets/images/teachers/details/cheng-mingxu.webp';
import guoHuiDetailImage from '../assets/images/teachers/details/guo-hui.webp';
import huHaiyanDetailImage from '../assets/images/teachers/details/hu-haiyan.jpg';
import jeffMartinDetailImage from '../assets/images/teachers/details/jeff-martin.png';
import karlSchurmanDetailImage from '../assets/images/teachers/details/karl-schurman.jpg';
import linYuanDetailImage from '../assets/images/teachers/details/lin-yuan.jpg';
import liuYutingDetailImage from '../assets/images/teachers/details/liu-yuting.jpg';
import michealDAleoDetailImage from '../assets/images/teachers/details/micheal-d-aleo.png';
import muChuanzhenDetailImage from '../assets/images/teachers/details/mu-chuanzhen.webp';
import oferSagieDetailImage from '../assets/images/teachers/details/ofer-sagie.webp';
import panJianfengDetailImage from '../assets/images/teachers/details/pan-jianfeng.jpg';
import songJinchaoDetailImage from '../assets/images/teachers/details/song-jinchao.jpg';
import tedWarrenDetailImage from '../assets/images/teachers/details/ted-warren.jpg';
import wangShiyiDetailImage from '../assets/images/teachers/details/wang-shiyi.jpg';
import wuFanDetailImage from '../assets/images/teachers/details/wu-fan.jpg';
import xinchenDaoistDetailImage from '../assets/images/teachers/details/xinchen-daoist.webp';
import yangLiangDetailImage from '../assets/images/teachers/details/yang-liang.webp';
import yangZhengrongDetailImage from '../assets/images/teachers/details/yang-zhengrong.png';
import yangZhihuangDetailImage from '../assets/images/teachers/details/yang-zhihuang.webp';
import zangYibingDetailImage from '../assets/images/teachers/details/zang-yibing.jpg';
import zhangLingzhiDetailImage from '../assets/images/teachers/details/zhang-lingzhi.jpg';
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
  | 'wu-fan'
  | 'hu-haiyan'
  | 'wang-shiyi'
  | 'yang-liang'
  | 'yang-zhengrong'
  | 'guo-hui'
  | 'cheng-mingxu'
  | 'yang-zhihuang'
  | 'mu-chuanzhen'
  | 'ofer-sagie';

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
  'yang-liang': {
    name: { zh: '杨亮', en: 'Yang Liang' },
    role: { zh: '物理教师', en: 'Physics teacher' },
    detailImage: yangLiangDetailImage,
    biography: [
      {
        zh: '物理教师。法律专科毕业，并多年从事法律相关工作；自学通过国家软件水平考试并获得软件工程师资格，曾任西安鼎研智能仪器公司研发部负责人，获得发明专利一项、实用新型专利一项，曾获陕西省科学进步三等奖、西安市科学进步二等奖。2017—2019年完成了春之谷学院等校发起的“天梯计划”华德福高中教师培训，从师美国物理学家、教育家迈可·阿德罗，并深入学习他的“感知性物理教学”。之后任西安子峪小学初期改造工程负责人、豆蔻学堂科学老师、子峪小学高年级兼职物理老师、豆蔻社区负责人，并创办豆蔻感官体验场。',
        en: 'Yang Liang teaches physics. He graduated from a junior-college law program and worked in law for many years. Through independent study, he passed China’s national computer software proficiency examination and qualified as a software engineer. He previously led the research and development department at Xi’an Dingyan Intelligent Instruments and is credited with one invention patent and one utility-model patent. He received a third prize in the Shaanxi Science and Technology Progress Awards and a second prize in the Xi’an Science and Technology Progress Awards. From 2017 to 2019, he completed the Ladder Program for Waldorf high-school teacher training initiated by Spring Valley Academy and other schools, studying with the American physicist and educator Micheal D’Aleo and learning his perception-based approach to physics teaching. He later led the initial renovation project at Xi’an Ziyu Primary School, taught science at Doukou Learning Center, taught physics part-time in Ziyu Primary School’s upper grades, led the Doukou community, and founded the Doukou Sensory Experience Center.',
      },
    ],
  },
  'yang-zhengrong': {
    name: { zh: '杨峥嵘', en: 'Yang Zhengrong' },
    role: { zh: '生命科学教师', en: 'Life science teacher' },
    detailImage: yangZhengrongDetailImage,
    biography: [
      {
        zh: '生命科学教师。博士，东南大学计算机专业和生物医药学专业。2004—2018年作为研究员在外国专家局研究图形处理和情感神经学。青少年时读到薛定谔的《生命是什么》，手不释卷，感觉世界之门由此敞开；后来进入大学和科研领域，生命的奥秘始终萦绕心头。在南京艺术学院舞蹈学院王佳维老师的编导课中，他又展开了交叉学科教学，并从中发展出“思考从相互作用中升起”的边缘性思考，希望将这些经验与华德福中学阶段培养的直觉思维结合起来，并带入身体的过程。2018年参加春之谷学院全日制研修班培训，毕业后一直担任EWIP生命科学主课教学。',
        en: 'Yang Zhengrong teaches life science. He holds a doctorate and studied computer science and biomedicine at Southeast University. From 2004 to 2018, he worked as a researcher at the State Administration of Foreign Experts Affairs, studying graphics processing and affective neuroscience. As a young person, he was captivated by Erwin Schrödinger’s What Is Life?, which opened a door onto the world for him; the mysteries of life remained central as he entered university and scientific research. Through a choreography course taught by Wang Jiawei at the School of Dance of Nanjing University of the Arts, he also developed interdisciplinary teaching and an approach in which thinking arises through interaction. He hopes to connect this experience with the intuitive thinking cultivated in Waldorf secondary education and bring it into bodily processes. He attended Spring Valley Academy’s full-time training program in 2018 and has taught the EWIP life-science main lesson since graduating.',
      },
    ],
  },
  'guo-hui': {
    name: { zh: '郭徽', en: 'Guo Hui' },
    role: {
      zh: '艺术教师、艺术治疗践行者，光舞艺术工作室主理人',
      en: 'Art teacher, art therapy practitioner, and director of Light Dance Art Studio',
    },
    detailImage: guoHuiDetailImage,
    biography: [
      {
        zh: '艺术老师，艺术治疗践行者，光舞艺术工作室主理人。毕业于西安美术学院设计系，2012年因孩子与华德福教育相遇，开启了一场自我成长的探索、蜕变之旅。2016年参加银川Van老师三年制艺术深化学习；2020年参加春之谷第九届一年制全日制学习；2022年参加中国·瑞士国际艺术治疗教育协会（iARTe）授予的四年制专业艺术治疗师培训课程，学习至今。自2021年起在公立学校、华德福学校等机构从事艺术教学工作，在实践中深刻体会到艺术工作带给孩子、成人和自己的改变，也因此坚定而热爱地走在这条五彩斑斓的艺术之路上。',
        en: 'Guo Hui is an art teacher, an art therapy practitioner, and the director of Light Dance Art Studio. She graduated from the Department of Design at Xi’an Academy of Fine Arts. Her child introduced her to Waldorf education in 2012, beginning a journey of exploration, transformation, and personal growth. In 2016, she began a three-year program of advanced art study with teacher Van in Yinchuan. In 2020, she joined the ninth one-year full-time program at Spring Valley Academy. Since 2022, she has studied in the four-year professional art therapist training program offered by the International Association for Art Therapy Education between China and Switzerland (iARTe). She has taught art in public schools, Waldorf schools, and other institutions since 2021. Through this work, she has experienced the changes art can bring to children, adults, and herself, strengthening her commitment to this colorful path in art.',
      },
    ],
  },
  'cheng-mingxu': {
    name: { zh: '程铭旭', en: 'Cheng Mingxu' },
    role: { zh: '数学教师', en: 'Mathematics teacher' },
    detailImage: chengMingxuDetailImage,
    biography: [
      {
        zh: '拥有20年高中数学教学经验和8年华德福数学教学经验，完成华德福数学1—12年级培训。让学习成为一种习惯，让成长伴随一生；人生的每个阶段都藏着独特的风景与宝藏，等待人们去发现和珍藏。',
        en: 'Cheng Mingxu has twenty years of experience teaching high-school mathematics and eight years of experience teaching mathematics in Waldorf education. He has completed Waldorf mathematics training for grades 1–12. He encourages students to make learning a habit and growth a lifelong companion, discovering and treasuring the distinctive landscapes and gifts held within every stage of life.',
      },
    ],
  },
  'yang-zhihuang': {
    name: { zh: '杨志凰', en: 'Yang Zhihuang' },
    role: {
      zh: '生机互动农业教育者',
      en: 'Biodynamic agriculture educator',
    },
    detailImage: yangZhihuangDetailImage,
    biography: [
      {
        zh: '中国台湾省国立成功大学电机工程学系学士。2006年师承Hans Mulder老师开始学习生机互动农业；2008年起推动台湾省宜兰县八宝有机示范聚落（慈心华德福社群有机聚落社区），并赴德国Weleda药厂所属生机互动农场观摩学习；2009年赴菲律宾Don Bosco永续发展基金会所属生机互动农场交流学习。2010年至今担任台湾省八宝有机教育推广农园负责人。2013年参与台湾省宜兰县政府食农减碳—低碳生活营造计划，担任项目经理；2016年赴新西兰Hohepa人智学疗愈社区生机互动农场学习；2018年在青海西宁赛维有机农场分享生机互动农业，并担任北京房山书院亲子农耕体验课程导师。',
        en: 'Yang Zhihuang earned a bachelor’s degree from the Department of Electrical Engineering at National Cheng Kung University in Taiwan, China. He began studying biodynamic agriculture with Hans Mulder in 2006. In 2008, he began promoting the Babao Organic Demonstration Community in Yilan County, Taiwan, an organic settlement associated with the Ci-Xin Waldorf community, and undertook observational study at the biodynamic farm affiliated with Weleda in Germany. In 2009, he joined an exchange at a biodynamic farm run by the Don Bosco Sustainable Development Foundation in the Philippines. Since 2010, he has led the Babao Organic Education and Promotion Farm. In 2013, he served as project manager for a food, agriculture, carbon-reduction, and low-carbon living initiative of the Yilan County government. He studied at the biodynamic farm of the Hohepa Anthroposophical therapeutic community in New Zealand in 2016. In 2018, he shared biodynamic agriculture at Saiwei Organic Farm in Xining, Qinghai, and taught parent-child farming courses at Fangshan Academy in Beijing.',
      },
      {
        zh: '培训认证包括：美国IOIA有机加工品验证稽核员培训（2005），顺势疗法研习（2006年3月），台湾有机农产品验证辅导及稽核人员训练（2009），古典顺势医学研习（2010—2011），台湾生物动力农业三年六期培训（2009—2012），日本大仁农场MOA自然农法研修（2012），慈心有机农业发展基金会有机农产品验证稽核员（2010—2016），环球国际有机验证公司外聘有机农产品验证稽核员（2016—2017），台湾省有机农业生产协会有机农产品验证稽核员（2017—2020），以及朴门农业设计、泰国米之神（KKF）在地有益菌培养和台湾地区人智学医疗（IPMT 2015、2016、2018）研习。他还曾从事玉山国家公园自然生态保育义务解说志愿服务32年，并参与合著《有机农场在台湾》（台湾有机食农游艺教育推广协会，2006）。',
        en: 'His training and certifications include the United States International Organic Inspectors Association course for organic processing inspectors in 2005; homeopathy study in March 2006; training for organic agricultural product certification and inspection in Taiwan in 2009; classical homeopathic medicine study in 2010–2011; a three-year, six-session biodynamic agriculture program in Taiwan from 2009 to 2012; MOA natural farming study at Japan’s Ohito Farm in 2012; organic product inspection work with the Tse-Xin Organic Agriculture Foundation from 2010 to 2016; external inspection work with Universal International Organic Certification from 2016 to 2017; and inspection work with the Taiwan Organic Agricultural Production Association from 2017 to 2020. He has also studied permaculture design, local beneficial-microorganism cultivation with Thailand’s Khao Kwan Foundation, and Anthroposophic medicine through IPMT programs in Taiwan in 2015, 2016, and 2018. He volunteered for thirty-two years as an ecological conservation interpreter at Yushan National Park and co-authored Organic Farms in Taiwan, published in 2006 by the Taiwan Organic Food and Farming Education Promotion Association.',
      },
    ],
  },
  'mu-chuanzhen': {
    name: { zh: '穆傳蓁', en: 'Mu Chuanzhen' },
    role: {
      zh: '生命科学、健康与农业教育者',
      en: 'Life science, health, and agriculture educator',
    },
    detailImage: muChuanzhenDetailImage,
    biography: [
      {
        zh: '國立中興大學昆蟲研究所碩士，體制內中學部學校教師服務十年，榮獲台灣地區第一屆Super教師獎，服務慈心華德福教育十八年，在慈心擔任7～12年級的健康專業課程、環境教育、化學、農耕等。2024年從慈心華德福退休，擔任督導工作與支援師培課程。',
        en: 'Mu Chuanzhen holds a master’s degree from the Graduate Institute of Entomology at National Chung Hsing University. She taught for ten years in the conventional secondary-school system, received Taiwan’s first Super Teacher Award, and served in Ci-Xin Waldorf education for eighteen years. At Ci-Xin, she taught health studies, environmental education, chemistry, and farming for grades 7–12. She retired from Ci-Xin Waldorf School in 2024 and continues to provide mentoring and support for teacher-training courses.',
      },
      {
        zh: '曾擔任各年級課程：7年級生理學、化學、園藝；8年級解剖學、食品營養學；9年級生命科學（感官）、有機化學；10年級胚胎學、人類生物學；11年級植物學、細胞與遺傳；12年級生態學。特別强项是人智學的健康飲食觀，尤其針對嬰幼兒及小學時期的營養健康維護，以及1—12年級園藝農耕版塊、有機農業、青少年教育等。曾接受台灣地區人智醫學課程8年、初高中師資培訓6年。',
        en: 'Her grade-level teaching has included physiology, chemistry, and horticulture in grade 7; anatomy, food, and nutrition in grade 8; life science focused on the senses and organic chemistry in grade 9; embryology and human biology in grade 10; botany, cells, and genetics in grade 11; and ecology in grade 12. Her particular strengths include Anthroposophical perspectives on healthy eating, nutritional health for infants and primary-school children, gardening and farming modules for grades 1–12, organic agriculture, and adolescent education. She has completed eight years of Anthroposophic medicine courses in Taiwan and six years of secondary-school teacher training.',
      },
    ],
  },
  'ofer-sagie': {
    name: { zh: 'Ofer Sagie', en: 'Ofer Sagie' },
    role: {
      zh: '戏剧导演、制片、演员及全人教育教师',
      en: 'Theatre director, producer, actor, and holistic education teacher',
    },
    detailImage: oferSagieDetailImage,
    biography: [
      {
        zh: '奥弗·萨吉老师的人生经历丰富。上世纪六十年代，他出生在一个“桃花源”般的社区，经历过不同文化的洗礼，通晓希伯来语、英语和德语。早年在纽约、伦敦、特拉维夫等地专修戏剧，在日本学习Butoh舞（舞踏），在德国、英格兰、法国、瑞士、挪威和以色列等多个国家参与过超过45部戏剧项目，担任导演、制片、演员，并积累了丰富的灯光和舞台设计经验。在法国工作和生活期间，他还成立了自己的剧团。丰富而特殊的成长经历让他由戏剧走向探寻自我的修习之路。从事戏剧工作多年后，他在瑞士歌德大殿接受四年全人教育培训，在以色列接受四年语言、戏剧和Bothmer（空间体育）体操培训。2003年完成学业后，他继续从事戏剧导演和制片工作，并为成人、青少年及特殊儿童开设课程与讲座，教授演讲、戏剧和Bothmer体操等。他对戏剧的解读源于全人教育的精神内核，工作坊从身、心、灵等层面展开。',
        en: 'Ofer Sagie was born in the 1960s in an idyllic community and grew up amid different cultures. He speaks Hebrew, English, and German. Early in his career, he studied theatre in New York, London, and Tel Aviv and studied Butoh dance in Japan. He has worked on more than forty-five theatre projects in Germany, England, France, Switzerland, Norway, Israel, and other countries as a director, producer, and actor, and he also has extensive experience in lighting and stage design. While living and working in France, he founded his own theatre company. His rich and unusual experiences led him from theatre toward a path of self-exploration. After many years in theatre, he completed four years of holistic education training at the Goetheanum in Switzerland and four years of language, drama, and Bothmer gymnastics training in Israel. After completing his studies in 2003, he continued directing and producing theatre and began offering courses and lectures for adults, young people, and children with special needs in speech, drama, and Bothmer gymnastics. His approach to theatre grows from the spiritual foundations of holistic education, and his workshops engage body, soul, and spirit.',
      },
    ],
  },
} as const satisfies Record<TeacherDetailSlug, TeacherDetail>;
