import alanusLogo from '../assets/images/partners/alanus.png';
import alanusGallery01 from '../assets/images/partners/gallery/alanus-01.jpg';
import bauhausWeimarLogo from '../assets/images/partners/bauhaus-weimar.png';
import bauhausWeimarGallery01 from '../assets/images/partners/gallery/bauhaus-weimar-01.jpg';
import camphillAcademyLogo from '../assets/images/partners/camphill-academy.png';
import camphillAcademyGallery01 from '../assets/images/partners/gallery/camphill-academy-01.jpg';
import camphillAcademyGallery02 from '../assets/images/partners/gallery/camphill-academy-02.jpg';
import camphillAcademyGallery03 from '../assets/images/partners/gallery/camphill-academy-03.jpg';
import camphillAcademyGallery04 from '../assets/images/partners/gallery/camphill-academy-04.jpg';
import camphillCopakeLogo from '../assets/images/partners/camphill-copake.png';
import camphillCopakeGallery01 from '../assets/images/partners/gallery/camphill-copake-01.jpg';
import goetheanumLogo from '../assets/images/partners/goetheanum.png';
import goetheanumGallery01 from '../assets/images/partners/gallery/goetheanum-01.jpg';
import goetheanumGallery02 from '../assets/images/partners/gallery/goetheanum-02.jpg';
import hawthorneValleyLogo from '../assets/images/partners/hawthorne-valley.png';
import hawthorneValleyGallery01 from '../assets/images/partners/gallery/hawthorne-valley-01.jpg';
import heliopolisLogo from '../assets/images/partners/heliopolis.png';
import heliopolisGallery01 from '../assets/images/partners/gallery/heliopolis-01.jpg';
import heliopolisGallery02 from '../assets/images/partners/gallery/heliopolis-02.jpg';
import iuavLogo from '../assets/images/partners/iuav.png';
import iuavGallery01 from '../assets/images/partners/gallery/iuav-01.jpg';
import iuavGallery02 from '../assets/images/partners/gallery/iuav-02.jpg';
import scuolaRudolfSteinerLogo from '../assets/images/partners/scuola-rudolf-steiner.png';
import scuolaRudolfSteinerGallery01 from '../assets/images/partners/gallery/scuola-rudolf-steiner-01.jpg';
import springValleyCommunityLogo from '../assets/images/partners/spring-valley-community.png';
import springValleyCommunityGallery01 from '../assets/images/partners/gallery/spring-valley-community-01.jpg';
import springValleyEurythmyLogo from '../assets/images/partners/spring-valley-eurythmy.png';
import springValleyEurythmyGallery01 from '../assets/images/partners/gallery/spring-valley-eurythmy-01.jpg';
import springValleyEurythmyGallery02 from '../assets/images/partners/gallery/spring-valley-eurythmy-02.jpg';
import sunbridgeLogo from '../assets/images/partners/sunbridge.png';
import sunbridgeGallery01 from '../assets/images/partners/gallery/sunbridge-01.jpg';
import sunbridgeGallery02 from '../assets/images/partners/gallery/sunbridge-02.jpg';
import ytterjarnaLogo from '../assets/images/partners/ytterjarna.png';
import ytterjarnaGallery01 from '../assets/images/partners/gallery/ytterjarna-01.jpg';
import type { Partner, UnlinkedPartnerDetail } from './types';

export const partners = [
  {
    name: 'Spring Valley Apartments',
    caption: { zh: '美国纽约春之谷', en: 'Spring Valley, New York' },
    group: 'community',
    logo: springValleyCommunityLogo,
    slug: 'spring-valley-community',
    order: 1,
    detailTitle: { zh: '美国纽约春之谷社区' },
    website: 'https://threefold.org/our-community/about-us/',
    gallery: [
      {
        image: springValleyCommunityGallery01,
        alt: {
          zh: '美国纽约春之谷社区相关图片',
          en: 'Spring Valley community in New York',
        },
      },
    ],
    paragraphs: [
      {
        zh: '美国纽约春之谷(Spring Valley)，距离纽约曼哈顿往北一小时左右的车程。一条小溪环绕着社区，溪畔树叶与野花相映成趣。一座木桥横跨两岸，从桥上走过，见桥下流水潺潺，落英缤纷。清晨, 鸟儿们的歌声将你唤醒，夜晚，蝉儿及蛙鸣伴你入眠。工作结束后，穿过原始树林回到木屋的途中，野鸭、松鼠、梅花鹿和天鹅等野生动物自由自在地穿梭在你周围。地里的玉米漏出微笑，成串的苹果压弯树枝。社区周围近2000多英亩的土地属于施泰纳三元社会基金会。早在1920年，有几位来自纽约曼哈顿的富有的、而又有理想、追求精神生活的年青人凑在一起买下了这一大片土地，以人智学理念为基础，实践自然活力农耕。后来，在这里又相继建立了华德福学校、音语舞学校、华德福教师培养学院、华德福教育研究所和施泰纳老人同胞社区、健康食品用品商店、自然活力农耕农场及表演礼堂等，就这样，逐渐发展成一个人文与自然共生，集精神、文化和健康为一体的三元社会社区。这里，鸡犬相闻，门不闭户，择邻而居，来自世界各地的教师、医生、艺术家、志愿者，在这个社区里生活、工作和学习，大家相敬如宾，犹如一家人，社区恍若陶渊明描述的”世外桃园”。',
      },
    ],
  },
  {
    name: 'Hawthorne Valley',
    caption: { zh: '美国纽约霍桑山谷社区', en: 'Hawthorne Valley, New York' },
    group: 'community',
    logo: hawthorneValleyLogo,
    slug: 'hawthorne-valley',
    order: 2,
    detailTitle: { zh: '美国纽约霍桑山谷社区' },
    website: 'https://hawthornevalley.org/',
    gallery: [
      {
        image: hawthorneValleyGallery01,
        alt: {
          zh: '美国纽约霍桑山谷社区相关图片',
          en: 'Hawthorne Valley community in New York',
        },
      },
    ],
    paragraphs: [
      {
        zh: '霍桑山谷农场的使命愿景是：培育养育我们的土地，建立一个真正的生物动力农场，将儿童和成人与养育他们的土地和食物联系起来，并提供最优质的农产品。通过农产品，我们希望开启一个关于我们的环境、我们的经济和我们自己的教育对话。通过我们的乳品店、农场商店和面包店为我们的农产品增加价值，使我们能够以一种平衡的方式种植我们的农场，减少对土地、植物和动物的压力。这些增值活动的收入加上直接销售的较大利润使农场能够维持合理的人力规模。因此，我们能够避免传统的以单一文化为基础的、工业化规模的、工厂化的耕作方法，这些方法在今天的国家很普遍。我们与农场学习和职业培训项目的关系使许多年轻人来到了农场。我们希望，我们所有人之间正在进行的对话将有助于提高对可持续生活和工作做法的重要性的认识。',
      },
      {
        zh: '霍桑山谷农场根据自身的自然环境与物产资源，制定了一系列研学课程，依据不同学龄段的儿童和青少年对知识的需求和体能要求不同，量身定制了多样化课程：一年级，孩子们会参与每周的农场零活，包括喂鸡、放羊或者就看看动物；二年级，孩子们可以种植小麦，并在小麦丰收的时候亲子参与打谷、扬场；三年级，孩子们可以采集枫树汁，用亲自种的小麦磨成的面粉做煎饼，参与房屋搭建，建造游戏屋或花园棚屋等；四年级，孩子们可以认养奶牛，作为“人与动物”板块，打造小牛看护俱乐部；五年级，同学们在学习本地地理期间，可以通过绘图、水彩、粘土塑形来描述农场地形；六年级，同学们会参观当地奶油厂并了解到每磅牛奶的成本以及多少磅牛奶能做出一磅奶酪，使得自己对组成食品系统的各部分关系和价格有了更深的理解；七年级，同学们开始通过探险拓宽已熟悉的领域，在不同程度上探索霍桑山谷以外的世界；八年级，同学们将学习气象学，他们观察山谷的微气候，通过置身自然环境来表达天气模式，并与生态系统的学习再次连接；九年级，同学们会回到农场进行一周的实习课，可能会在奶油厂、面包房、泡菜地窑间轮换实习；十年级，同学们通过实地测量霍桑谷的田地和森林学会了三角法之后，将要用一周的时间外出去测量一个不同的地方，作为他们探索更广大世界旅程的延续。',
      },
    ],
  },
  {
    name: 'Camphill Village Copake',
    caption: { zh: '美国科培克康复社区', en: 'Camphill Village Copake' },
    group: 'community',
    logo: camphillCopakeLogo,
    slug: 'camphill-copake',
    order: 3,
    detailTitle: { zh: '美国科培克康复社区' },
    website: 'https://camphillvillage.org/',
    gallery: [
      {
        image: camphillCopakeGallery01,
        alt: {
          zh: '林源老师参访美国纽约科培克康复学院',
          en: 'Lin Yuan visiting Camphill Village Copake in New York',
        },
      },
    ],
    paragraphs: [
      {
        zh: '美国科培克康复社区（Copake Camphill）是全美第一个康复社区，成立于1961年， 也是最大的一个针对特殊需求的成年人而建立的康复村。它坐落在纽约州北部农村，占地615英亩，被山丘和成片的树林环绕，风景优美，随处都是徒步路线，有点世外桃源的感觉。社区有一些独特而有意义的工作坊：蜡烛作坊、书本装订作坊、彩花玻璃作坊、编织作坊等。',
      },
      {
        zh: '由于康复村社区与华德福教育同出于人智学理念，而华德福教育已在国内有了多年的广泛运用，加上康复村社区的运营模式除了智障服务以外，还涉及到有机农业、可持续性环保、社会企业、灵性教育、养老服务等多项社会创新领域的热点可持续发展项目，是非常值得我们学习的。',
      },
    ],
  },
  {
    name: 'GOETHEANUM',
    caption: { zh: '瑞士歌德馆', en: 'Goetheanum, Switzerland' },
    group: 'community',
    logo: goetheanumLogo,
    slug: 'goetheanum',
    order: 4,
    detailTitle: { zh: '瑞士歌德馆' },
    website: 'https://goetheanum.ch/en',
    gallery: [
      {
        image: goetheanumGallery01,
        alt: {
          zh: '瑞士歌德馆相关图片一',
          en: 'Goetheanum in Switzerland, image one',
        },
      },
      {
        image: goetheanumGallery02,
        alt: {
          zh: '瑞士歌德馆相关图片二',
          en: 'Goetheanum in Switzerland, image two',
        },
      },
    ],
    paragraphs: [
      {
        zh: '瑞士歌德馆位于瑞士多尔纳赫，是人智学世界中心，以约翰·沃尔夫冈·冯·歌德的名字命名，并由奥地利的哲学家、建筑家施泰纳在1913至1922年期间筹划。中心包括两个表演厅、画廊、演讲处、图书馆、书店，以及人智学协会的行政办公地点。附近的建筑物包括人智学研究和教育设施。在这里一年举行几次会议，主要是普遍关心的问题，教师、农民、医生、治疗师和其他职业的专题会议也定期举行。',
      },
      {
        zh: '歌德大殿是灵性科学学校和全球人智学社团的总部。精神科学学校拥有11个系，在全球范围内积极从事研究、开发、教学和研究成果的实际实施，并得到了人智学社团的支持。活动范围从专题讲座到大型国际会议，再到合奏团的表演以及音语舞、戏剧、木偶和音乐的客座表演。',
      },
      {
        zh: '1882年，21岁的施泰纳意气风发地编写了一本关于歌德科学研究内容的《歌德科学》。魏玛档案馆注意到这本书，于1888年录用了施泰纳，让他专门编辑歌德与席勒的著作。歌德成为施泰纳建构自我世界的精神导师，他想修建一座建筑，向自己引路人致敬。施泰纳的建筑哲学被称为“有机建筑”，它包括硬结构、心理氛围及生活在其中的人之活动诸方面。施泰纳设计的歌德大殿蓝图，最早是木制结构。不料整体完工的第二天，被狂徒人为纵火，将大殿毁于一旦。施泰纳立刻决定原址重建，一切照旧，只是改为水泥材料，以防再次被毁。那个时代，欧洲的建筑元素都是尖顶、曲线，巴洛克……歌德大殿的不规则外形，特立独行的外立面，惊世骇俗。这里至今还是施泰纳一手创立的人智学工作总部。',
      },
    ],
  },
  {
    name: 'Ytterjarna',
    caption: { zh: '瑞典雅纳社区', en: 'Ytterjarna Community, Sweden' },
    group: 'community',
    logo: ytterjarnaLogo,
    slug: 'ytterjarna',
    order: 5,
    detailTitle: { zh: '瑞典雅纳社区' },
    website: 'https://www.ytterjarna.se/',
    gallery: [
      {
        image: ytterjarnaGallery01,
        alt: {
          zh: '瑞典雅纳社区相关图片',
          en: 'Ytterjärna community in Sweden',
        },
      },
    ],
    paragraphs: [
      {
        zh: '瑞典雅纳社区是具有60多年历史的人智学社区。1935年第一家人智学的治疗教育之家成立，1949年第一家人智学的华德福学校成立。社区有四家治疗教育学校，分别适于不同年龄需要的特需人群，有1500人从事特殊教育工作。世界各地的华德福学校使用的科乐尔木笛、钟琴、莱尔琴等乐器的乐器厂，就在雅纳镇上，乐器都是特需人群手作制造。',
      },
      {
        zh: '雅纳社区的治疗教育学校是瑞典最好的、水平最高的，是一所践行人智学治疗教育的特殊学校，1945年由古斯塔夫∙瑞塔先生创办。特殊需求的孩子都是免费入学的，全部由政府出资，提供给1个特殊孩子的费用是普通孩子的8-10倍。这北欧高福利国家的特点之一，足以呈现一个高度人文关怀、高度文明的社会。',
      },
    ],
  },
  {
    name: 'IUAV',
    caption: { zh: '威尼斯建筑大学IUAV', en: 'IUAV University of Venice' },
    group: 'school',
    logo: iuavLogo,
    slug: 'iuav',
    order: 6,
    detailTitle: { zh: '威尼斯建筑大学IUAV' },
    website: 'https://www.iuav.it/it',
    gallery: [
      {
        image: iuavGallery01,
        alt: {
          zh: '威尼斯建筑大学IUAV相关图片一',
          en: 'IUAV University of Venice, image one',
        },
      },
      {
        image: iuavGallery02,
        alt: {
          zh: '威尼斯建筑大学IUAV相关图片二',
          en: 'IUAV University of Venice, image two',
        },
      },
    ],
    paragraphs: [
      {
        zh: '在从米兰前往科内利亚诺的途中，经过著名的水城威尼斯。这座几乎漂浮在海上的历史悠久岛屿城市，不仅是伟大的冒险家和文化交流使者马可·波罗的故乡，更是连接东西方丝绸之路的重要节点。凭借深厚的文化底蕴和对现代艺术发展的推动，自1895年起，威尼斯便开始举办双年展，如今仍是世界最重要的三大艺术展览之一。而与艺术双年展交替举办的建筑双年展，更彰显了建筑艺术在威尼斯历代辉煌历史中的重要地位。',
      },
      {
        zh: '在威尼斯这座充满建筑美学的城市，有一座威尼斯建筑大学，这所著名学府具有独特魅力与教育特色。与华德福学校所倡导的社区文化相呼应，威尼斯建筑大学作为一所高校，将自身定位为推动新型地域文化研究的生产中心和引领未来的先锋社区。这是一个由教师、学生和工作人员组成的共同体，以可持续的未来理念为共识，致力于探索新场景、新范式，并为全球紧迫问题和不确定性提供创新解决方案。古典与现代，科技与艺术交融的威尼斯建筑大学在这一既具前瞻性又心系全球的办学理念支持下，威尼斯建筑大学不仅提供建筑设计、区域规划、设计和艺术领域从本科到研究生的完整课程体系，还设有博士学院、进修课程和专业化培训学院，为希望重返校园的成人进修者以及致力于深入研究领域的毕业生提供了更加广阔的发展平台。',
      },
    ],
  },
  {
    name: 'alanus hochschule',
    caption: { zh: '德国阿兰努斯大学', en: 'Alanus University, Germany' },
    group: 'school',
    logo: alanusLogo,
    slug: 'alanus',
    order: 7,
    detailTitle: { zh: '德国阿兰努斯大学' },
    website: 'https://www.alanus.edu/',
    gallery: [
      {
        image: alanusGallery01,
        alt: {
          zh: '德国阿兰努斯大学相关图片',
          en: 'Alanus University in Germany',
        },
      },
    ],
    paragraphs: [
      {
        zh: '德国阿兰努斯大学是一个与人智学及华德福教育密切关联的学习和培训基地。跨学科的通识教育:优律思美、音乐治疗、建筑学、华德福教育等阿兰努斯艺术与社会大学是一所获得国家认证的私立艺术大学，位于德国波恩附近的阿尔夫特。自2014年8月起，该校还在曼海姆设有一个学习中心。学校下设多个学科，包括建筑、视觉艺术、戏剧、优律思美、艺术治疗、教育学、哲学和经济学等20多个学位课程。大学的名字来源于12世纪的法国神学家阿兰努斯，这位被称为“万能博士”的学者教授当时的“自由七艺”。阿兰努斯大学的通识教育课程延续了这种全面教育的传统，不仅为专业学习提供坚实基础，更超越了单纯的专业知识范畴。无论是艺术家、教育家、艺术治疗师、建筑师还是企业管理者，来自各个学科的学生都会在通识教育课程中相遇。课程内容涵盖哲学与文化史、社会学、艺术学与美学，以及人类学与伦理学。此外，作为一所以人智学为导向的高校，通识教育课程还提供与人智学相关的讨论和研究机会。通过这些活动，学生们不仅能够激发独立和批判性思维，还能拓宽视野，帮助他们在文化和社会语境中找到自己的立场。目前，学校大约有1600名学生注册学习。阿兰努斯大学为不同需求和不同角色的学生提供多样课程设置，不仅开设全日制和非全日制两种专业设置，在常年招收国际学生的基础上，还开设了英文授课的优律诗美硕士专业，为致力于深造本学的国内外学生提供更广阔的机会。',
      },
    ],
  },
  {
    name: 'Bauhaus-Universitat Weimar',
    caption: { zh: '德国魏玛包豪斯大学', en: 'Bauhaus University Weimar' },
    group: 'school',
    logo: bauhausWeimarLogo,
    slug: 'bauhaus-weimar',
    order: 8,
    detailTitle: { zh: '德国魏玛包豪斯大学' },
    website: 'https://www.uni-weimar.de/de/universitaet/start/',
    gallery: [
      {
        image: bauhausWeimarGallery01,
        alt: {
          zh: '德国魏玛包豪斯大学相关图片',
          en: 'Bauhaus University Weimar in Germany',
        },
      },
    ],
    paragraphs: [
      {
        zh: '德国魏玛包豪斯大学的前身为1860年成立的大公美术学院，1919年，著名建筑师瓦尔特·格罗皮乌斯在此基础上创立了包豪斯学派，以其先锋式的教学理念和实践将该校发展为世界现代设计的发源地。1996年学校正式更名为“包豪斯大学”，以纪念这一重要的历史传统，并延续包豪斯学派的创新和实验精神。目前，大学提供约40个学位课程或项目，涵盖范围广泛，从自由艺术、设计、视觉传达、媒体设计、媒体研究、计算机科学，到建筑学、土木工程、建筑材料学、环境科学及管理等领域。由包豪斯引领的现代设计理念：涵盖建筑，戏剧，家具产品设计等方面包豪斯宣言节选:一切创造活动的终极目标就是建筑！为建筑进行装饰一度是美术最高尚的功能，而且美术也是伟大的建筑不可或缺的伙伴。如今，它们自鸣得意地离群索居，而可能从这种局面里拯救它们的唯一出路，就是让一切手工艺人自觉地进行团结合作。旧时代的艺术学校无法实现这种统一——又怎能实现呢？因为艺术无法被教授。它们必须回归工作坊。让我们来创办一个新型的手工艺人行会，取消工匠与艺术家的等级差异，再也不要用它树起妄自尊大的藩篱！让我们一同期待、构思并且创造出未来的新建筑，用它把一切——建筑与雕塑与绘画——都组合在一个单一的形式里，有朝一日，它将会从百万工人的手中冉冉地升上天堂，水晶般清澈地象征着未来的新信念。',
      },
    ],
  },
  {
    name: 'Sunbridge Institute',
    caption: { zh: '美国纽约日桥学院', en: 'Sunbridge Institute' },
    group: 'school',
    logo: sunbridgeLogo,
    slug: 'sunbridge',
    order: 9,
    detailTitle: { zh: '美国纽约日桥学院' },
    website: 'https://www.sunbridge.edu/',
    gallery: [
      {
        image: sunbridgeGallery01,
        alt: {
          zh: '美国纽约日桥学院相关图片一',
          en: 'Sunbridge Institute in New York, image one',
        },
      },
      {
        image: sunbridgeGallery02,
        alt: {
          zh: '美国纽约日桥学院相关图片二',
          en: 'Sunbridge Institute in New York, image two',
        },
      },
    ],
    paragraphs: [
      {
        zh: '日桥学院于1967年建于密西根，1986年移到纽约春之谷，1991年在纽约州教育部正式注册为日桥学院。2008年改名为日桥研究院。可以在这里完成华德福教师证书培训，并攻读美国政府承认的教育学硕士学位，日桥学院提供人智学的基础课程、华德福幼儿师资课程、小学师资课程、治疗教育、华德福管理和社会发展等，它成立40多年来，为北美和全世界培养了大批的华德福教师和人智学社区工作者，为人智学及华德福教育在美国及世界的发展做出了重要贡献。',
      },
    ],
  },
  {
    name: 'Scuola Rudolf Steiner',
    caption: {
      zh: '意大利米兰施泰纳学校艺术学院',
      en: 'Scuola Rudolf Steiner, Milan',
    },
    group: 'school',
    logo: scuolaRudolfSteinerLogo,
    slug: 'scuola-rudolf-steiner',
    order: 10,
    detailTitle: { zh: '意大利米兰施泰纳学校艺术学院' },
    website: 'https://www.scuolasteinermilano.it/',
    gallery: [
      {
        image: scuolaRudolfSteinerGallery01,
        alt: {
          zh: '意大利米兰施泰纳学校艺术学院相关图片',
          en: 'Scuola Rudolf Steiner in Milan, Italy',
        },
      },
    ],
    paragraphs: [
      {
        zh: '这所建于二战后的意大利第一所华德福学校，坐落于欧洲中心城市之一，艺术与经济发展并肩齐驱的都市——米兰。学校深入实践了将施泰纳教育理念与班级体系相结合，形成了特色鲜明的教学板块:幼儿园的第一个七年阶段：一个值得模仿的美好世界;小学和初中的第二个七年阶段：一个值得试验的美丽世界；高中的第三个七年阶段：一个值得探索的真实世界。在逐步完善施泰纳学校的教育体系同时，该校于1996年获得了法律上开设实验性质中学和高中的认可，尤其是高中部，得以以艺术理科高中的形式诞生。2000年，学校成立了专门的艺术学院，帮助未来意向从事艺术生产相关活动的学生们。艺术学院也获得了法律认可，因此学生无需参加外部考试，每学年结束时由自己的教师进行审查即可。此外，艺术学院还根据“米开朗基罗计划”开展课程，这个课程以艺术毕业考试作为结课方式，使学生能够进入大学专业。',
      },
    ],
  },
  {
    name: 'Spring Valley Eurythmy School',
    caption: {
      zh: '美国纽约春之谷音语舞学校',
      en: 'Spring Valley Eurythmy School',
    },
    group: 'school',
    logo: springValleyEurythmyLogo,
    slug: 'spring-valley-eurythmy',
    order: 11,
    detailTitle: { zh: '春之谷音语舞学校' },
    website: 'https://www.eurythmy.org/',
    gallery: [
      {
        image: springValleyEurythmyGallery01,
        alt: {
          zh: '春之谷音语舞学校相关图片一',
          en: 'Eurythmy Spring Valley, image one',
        },
      },
      {
        image: springValleyEurythmyGallery02,
        alt: {
          zh: '春之谷音语舞学校相关图片二',
          en: 'Eurythmy Spring Valley, image two',
        },
      },
    ],
    paragraphs: [
      {
        zh: '早在1970年，Lisa Monges，在德国和瑞士多纳学习音语舞后，在春之谷创立了音语舞的培训，1980年，表演艺术家Dorothea Mier成立了音语舞学校，Barbara Schneider-Serio成为目前学校的负责人。音语舞是华德福学校的必修课程，因为它用舞蹈的方式表达对音乐和语言的理解，它的动作和造型又是画画和雕塑的人体演绎,而它对心灵和精神感受的表现力使得它成为一门综合的课程和艺术。',
      },
      {
        zh: '星芒体的成长与神经系统的整合与呼吸可以通过音语舞协调起来。光的轻盈与大地的重暖也可以音语舞的四肢表达出来。盐及矿物的结晶体，可以通过伸展的四肢构成立方体;五角星的花样也可以通过人体描绘出来，植物和矿物都可以通过人体说话。风水火土是音语舞的四大元素。群舞而非独舞，在个性中表达共性，在共性中滋养个性。而心，非脑，是歌者，演说者及舞者的中心，它是我，亦即他人，这与中国道家的修真说不谋而合。',
      },
      {
        zh: '春之谷音语舞学校坐落在日桥边，一座全木质结构的房子，开着巨大的窗户，树荫和小溪一览无遗，成为音语舞的一个组成部分。学生不多，但课程很密集，长达四年，学生来自世界各地，毕业后在舞蹈队里继续学习和表演，他们过者极为贫穷的生活，但他们的精神生活极其富有。教师同时在日桥学院，绿荫华德福学校任教。施泰纳说，音语表演艺术家具有终身不灭的意志，因为他们将精神力通过语言和音语舞带到了他们的身体的每一个细胞里。',
      },
    ],
  },
  {
    name: 'Heliopolis University',
    caption: {
      zh: '埃及赫利奥波利斯可持续发展大学',
      en: 'Heliopolis University for Sustainable Development',
    },
    group: 'school',
    logo: heliopolisLogo,
    slug: 'heliopolis',
    order: 12,
    detailTitle: { zh: '埃及赫利奥波利斯可持续发展大学' },
    website: 'https://hu.edu.eg/',
    gallery: [
      {
        image: heliopolisGallery01,
        alt: {
          zh: '埃及赫利奥波利斯大学相关图片一',
          en: 'Heliopolis University in Egypt, image one',
        },
      },
      {
        image: heliopolisGallery02,
        alt: {
          zh: '埃及赫利奥波利斯大学相关图片二',
          en: 'Heliopolis University in Egypt, image two',
        },
      },
    ],
    paragraphs: [
      {
        zh: '埃及赫利奥波利斯可持续发展大学（Heliopolis University）于2012年在SEKEM成立。该校将学习、研究与实践融于一体的多学科整体方法来阐述可持续发展的概念和理论，并致力于提升埃及和世界对可持续发展、经济团结、社会责任和环境平衡的意识与觉知。',
      },
      {
        zh: '项目能力学位。该大学采用了“项目能力学位”的概念，让理论与现实需求相结合，以此希望培养能够通过创新、协作和技术面对和克服未来挑战的社会创业家。2018年的第三批毕业生，约150名学子从此开启新的人生旅程。学生需要与合作企业基于解决实际问题来开展项目。因此，他们一边在现实生活环境中学习，一边又能应用新技能来获得新的能力。这也使学生能专注于自己选择的领域，在整个过程中保持高度的积极性，最后获得以扎实的学术教育和实践经验而毕业。从长远来看，这将使个人成功与事业成功有意义地联系起来，同时也满足了社会需求。',
      },
      {
        zh: '埃及第一个有机农业学院。2018年9月23日，赫利奥波利斯可持续发展大学 (HU) 成立了有机农业学院，是埃及第一个此类学院。该学院重点关注当前的生态挑战，如粮食安全、气候变化和生物多样性。',
      },
      {
        zh: '“我们相信有机农业将成为未来的主流农法...埃及有机农业领域的合格农夫数量相对较少，这意味着学院将直接服务于市场需求，让他们一毕业就找到有意义的工作，甚至未来成为这个新兴领域的成功企业家。”——校长Prof. Dr. Mohamed Yousri Hashem',
      },
      {
        zh: '有机农业学院的第一批27名学生在SEKEM实地学习生物动力技术 每个学期 他们将有两个星期的实践课。有机农业学院目前主要有两个专业：有机作物生产与食品加工技术。除此之外，跨文化交流也将是重点之一，学生会在国外度过至少一个学期，并进行一学期的实习，如在SEKEM农场。学院期待这种多元融合的教育方法有助于塑造未来的领导者，让这些学子为埃及的有机未来发挥主动性并起到推动作用。',
      },
      {
        zh: '该学院也欢迎国际学生的加入，以英语为学习语言。我非常喜欢学院的课程安排，在农场和大学校园将理论和实践结合在一起，为学好有机农业提供了完美的基础...但真正令人惊喜和印象深刻的是核心课程！我可以负责任地说，我们每个学生都喜爱这些课程。',
      },
      {
        zh: '核心课程是赫利奥波利斯可持续发展大学每个教师的必修模块，特别包括艺术和社会科学，以支持学生发挥个人潜力。该计划不仅是为大学教职员工设计的，也是为整个大学的所有学子设计的。文化与艺术始终占据着SEKEM教育的核心位置眼见为实 看这丰富的演出活动还有不亚于专业演唱会的狂欢节！',
      },
      {
        zh: '2021年11月，赫利奥波利斯可持续发展大学 (HU) 成为埃及第一所100%可再生能源运营的高校，为绿色未来铺平道路。多个SEKEM机构参与并支持了该项目：生态能源和该校的碳足迹中心主要负责实施。一些本科生和毕业生从事能源管理工作，SEKEM职业培训中心的学生建造并安装了产生清洁电力的太阳能电池板。多个内部机构联合共建和管理能源的方式是让分离的现代社会职能重新聚合在一个村落里的绝佳缩影。SEKEM的目标是到2027年仅使用可再生能源运营其所有机构。赫利奥波利斯可持续发展大学是实现这一目标的第一个SEKEM机构。',
      },
    ],
  },
  {
    name: 'Camphill Academy',
    caption: { zh: '美国坎普希尔学院', en: 'Camphill Academy' },
    group: 'school',
    logo: camphillAcademyLogo,
    slug: 'camphill-academy',
    order: 13,
    detailTitle: { zh: '坎普希尔学院' },
    website: 'https://camphill.edu/',
    gallery: [
      {
        image: camphillAcademyGallery01,
        alt: {
          zh: '坎普希尔学院相关图片一',
          en: 'Camphill Academy, image one',
        },
      },
      {
        image: camphillAcademyGallery02,
        alt: {
          zh: '坎普希尔学院相关图片二',
          en: 'Camphill Academy, image two',
        },
      },
      {
        image: camphillAcademyGallery03,
        alt: {
          zh: '坎普希尔学院相关图片三',
          en: 'Camphill Academy, image three',
        },
      },
      {
        image: camphillAcademyGallery04,
        alt: {
          zh: '坎普希尔学院相关图片四',
          en: 'Camphill Academy, image four',
        },
      },
    ],
    paragraphs: [
      {
        zh: '坎普希尔学院是一个植根于北美坎普希尔运动生活和工作的学习社区。它旨在提供变革性的学习路径，使个人能够发挥自己的潜质，为人类、社会和地球的治愈做出贡献。',
      },
      {
        zh: '坎普希尔学院包容性社会发展课程的学生无需支付学费即可参与。坎普希尔学院透过其创新的社区奖学金模式为学生提供了这种独特的机会，让他们可以在没有学费负担的情况下接受高等教育。社区奖学金涵盖所有计划费用，使学生能够充分参与社区生活，在学术进步的同时获得实务经验。这种模式不仅缓解了财务压力，还创造了一个支持性的协作学习环境，使高等教育变得容易获得且无债务。对于参与社区的住宿成员的学生，社区奖学金包括额外福利，如食宿、健康保险和小额津贴。',
      },
      {
        zh: '坎普希尔学院提供三个级别的人智包容性社会发展全日制学术课程：基础研究课程、专业辅助证书课程和文凭课程。这些计划是在我们参与社区的有意社区生活的背景下提供的。坎普希尔学院的学生是各自所在社区的正式成员，在课程期间与残疾和健康的社区成员一起生活和学习。',
      },
      {
        zh: '包容性社会发展是一个专业领域，致力于与不同背景和能力的人们共同创造包容性社区。我们的工作领域为那些可能因社会和个人情况而被边缘化的个人和社区提供支持。包容性社会发展超越了传统的社会工作和人类服务，创造了个人和社区生活的整体图景，包括身体、心理、社会和精神福祉。发展这种深入的洞察力作为社区建设和治疗活动的基础需求：对人类身体、灵魂和精神组织的全面、跨学科的理解；对人类从童年到老年的发展以及一般教育和社会原则的理解；从事人类现象学研究的能力。',
      },
      {
        zh: '坎普希尔学院提供三个级别的人智包容性社会发展全日制学术课程：基础研究课程、专业辅助证书课程和文凭课程。这些课程相互依存，每个课程都为学生完成学业提供了可能的退出点。',
      },
      {
        zh: '包容性社会发展文凭课程是从专业辅助认证课程延伸而来的。文凭颁发给那些成功完成第三年和第四年课程和实习的人，以及完成第四年课程后六到十二个月的专业实习。该文凭受到歌德学院精神科学学院人智学包容性社会发展委员会的国际认可，使持有者有资格在人智学包容性社会发展专业领域实践。但具体执业范围受国家和地方法规的约束，文凭并不等同于任何特定的职业认证或执照要求。',
      },
      {
        zh: '社会艺术家在生活中的任何地方都会遇到人们，因此我们在包容性社会发展计划中针对不同的传记和社会背景提供了三个重点：治疗教育支持学生与儿童和年轻人一起工作；社会治疗支持学生与成年人和长者共同创建社区；社会农业与生物动力学支持学生参与社区和包容性为基础的农业和生态管理举措。',
      },
    ],
  },
] as const satisfies readonly Partner[];

// Private partner content must not create a card, route, language switch target,
// or sitemap entry.
export const unlinkedPartnerDetails = [
  {
    id: 'sekem',
    title: { zh: '埃及SEKEM塞克姆社区' },
    paragraphs: [
      {
        zh: '1977年，埃及药理学家和社会企业家Ibrahim Abouleish博士在埃及开罗东北60公里处一片未被开发的沙漠（70公顷）上发起了SEKEM（古埃及语：‘来自太阳的活力’）计划，旨在可持续地实现埃及的文化复兴。通过采用生物动力农业方法，沙漠土地得以恢复生机，农业业务蓬勃发展。多年来，SEKEM已成为一家多元化的农业工业集团和非政府组织的保护伞。',
      },
      {
        zh: '“在沙漠中，我看到自己站在一口井前汲水。我小心翼翼地种植树木、草本植物和鲜花，用珍贵的水滴滋润它们的根部。清凉的井水吸引人类和动物来这里恢复活力。树木遮荫，土地变绿，鲜花盛开，昆虫、鸟类和蝴蝶向造物主上帝表达虔诚，仿佛它们在引用《古兰经》第一章。人类感知到对上帝的隐秘赞美，关心并将所有创造物视为人间天堂的反映。对我来说，在恶劣环境中出现绿洲的想法就像在夜间穿越沙漠的漫长旅程后，黎明时分的复活景象。在沙漠的实际工作开始之前，我就看到了它，就像一个模型。但实际上，我的愿望更多：我希望整个世界都能发展。”——Ibrahim Abouleish 博士',
      },
      {
        zh: 'SEKEM组织位于开罗东北部，目前包括：生物动力农场；农产品和加工食品（Hator 和 Libra）、草药茶和美容产品（ISIS Organic）、药草和药品（ATOS Pharma）和有机棉产品（NatureTex）的贸易公司；医疗中心；以华德福教育原则为基础的学校，向任何宗教或种族背景的学生开放；专门满足弱势群体儿童需求的社区学校；托儿所；职业培训中心；学院（马哈德成人教育培训学院）和研究中心（SEKEM应用艺术与科学学院）；赫利奥波利斯可持续发展大学。',
      },
      {
        zh: 'SEKEM的目标是与埃及生物动力协会合作，到2025年底帮助4万名农民过渡到生物动力农业。到2028年，覆盖25万名农民，农场面积达到160万英亩。SEKEM 的其他努力包括开垦1000公顷沙漠，并建立一个自给自足的社区。埃及96%的土地都是沙漠，恰如其名的“绿化沙漠”计划旨在养活数万人，同时封存碳。SEKEM从原始沙漠中的一顶帐篷发展成为一家领先的发展组织，它经营着学校、培训中心和一所大学等，为农民和青年提供应对土地退化和荒漠化的培训。从沙漠到超市，整体农业与加工公司相结合，形成了一个封闭的价值链，使SEKEM为埃及和全世界生产出具有完全透明度和可追溯性的最高品质产品。',
      },
    ],
  },
] as const satisfies readonly UnlinkedPartnerDetail[];

export const publicPartnerSlugs: readonly string[] = partners.map(
  ({ slug }) => slug,
);

export function getPartnerBySlug(slug: string): Partner | undefined {
  return partners.find((partner) => partner.slug === slug);
}
