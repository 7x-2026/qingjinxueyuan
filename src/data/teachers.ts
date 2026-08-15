import alexaImage from '../assets/images/teachers/alexa.png';
import boWernerErikssonImage from '../assets/images/teachers/bo-werner-eriksson.png';
import chaiJianImage from '../assets/images/teachers/chai-jian.png';
import heXiaoguoImage from '../assets/images/teachers/he-xiaoguo.png';
import huHaiyanImage from '../assets/images/teachers/hu-haiyan.png';
import jeffMartinImage from '../assets/images/teachers/jeff-martin.png';
import jinZhenbaoImage from '../assets/images/teachers/jin-zhenbao.png';
import karlSchurmanImage from '../assets/images/teachers/karl-schurman.png';
import linYuanImage from '../assets/images/teachers/lin-yuan.png';
import liuYutingImage from '../assets/images/teachers/liu-yuting.png';
import michealDAleoImage from '../assets/images/teachers/micheal-d-aleo.png';
import panJianfengImage from '../assets/images/teachers/pan-jianfeng.png';
import songJinchaoImage from '../assets/images/teachers/song-jinchao.png';
import tedWarrenImage from '../assets/images/teachers/ted-warren.png';
import wangShiyiImage from '../assets/images/teachers/wang-shiyi.png';
import wuFanImage from '../assets/images/teachers/wu-fan.png';
import xinchenDaoistImage from '../assets/images/teachers/xinchen-daoist.png';
import zangYibingImage from '../assets/images/teachers/zang-yibing.png';
import zhangLingzhiImage from '../assets/images/teachers/zhang-lingzhi.png';
import zhangXinxinImage from '../assets/images/teachers/zhang-xinxin.png';
import zhengLeImage from '../assets/images/teachers/zheng-le.png';
import type { Teacher, TeacherCategory } from './types';

export const teacherCategories = [
  { id: 'all', title: { zh: '全部', en: 'All' } },
  { id: 'anthro', title: { zh: '人智学', en: 'Anthroposophy' } },
  { id: 'culture', title: { zh: '中国传统文化', en: 'Chinese Culture' } },
  { id: 'arts', title: { zh: '艺术', en: 'Arts' } },
  { id: 'language', title: { zh: '语言', en: 'Language' } },
  { id: 'life', title: { zh: '生命科学', en: 'Life Science' } },
  { id: 'management', title: { zh: '经济管理', en: 'Management' } },
] as const satisfies readonly TeacherCategory[];

export const teachers = [
  {
    slug: 'ted-warren',
    order: 1,
    name: { zh: 'Ted Warren', en: 'Ted Warren' },
    role: { zh: '人智学导师，高中、大学人文教师' },
    category: 'anthro',
    image: tedWarrenImage,
  },
  {
    slug: 'micheal-d-aleo',
    order: 2,
    name: { zh: "Micheal D'Aleo", en: "Micheal D'Aleo" },
    role: { zh: '人智学导师，自然、物理、天文教师' },
    category: 'anthro',
    image: michealDAleoImage,
  },
  {
    slug: 'karl-schurman',
    order: 3,
    name: { zh: 'Karl Schurman', en: 'Karl Schurman' },
    role: { zh: '7-12年级历史、英语教师，教学督导' },
    category: 'anthro',
    image: karlSchurmanImage,
  },
  {
    slug: 'xinchen-daoist',
    order: 4,
    name: { zh: '信辰道长' },
    role: { zh: '龙门派第二十五代弟子，武当武术传人' },
    category: 'culture',
    image: xinchenDaoistImage,
  },
  {
    slug: 'zang-yibing',
    order: 5,
    name: { zh: '臧艺兵' },
    role: { zh: '原华中师范大学音乐学院教授、院长' },
    category: 'arts',
    image: zangYibingImage,
  },
  {
    slug: 'lin-yuan',
    order: 6,
    name: { zh: '林源' },
    role: { zh: '青衿学院创始人，春之谷学院院长' },
    category: 'management',
    image: linYuanImage,
  },
  {
    slug: 'bo-werner-eriksson',
    order: 7,
    name: { zh: 'Bo Werner Eriksson', en: 'Bo Werner Eriksson' },
    role: { zh: '在欧洲学习华德福绘画和艺术教师' },
    category: 'arts',
    image: boWernerErikssonImage,
  },
  {
    slug: 'jeff-martin',
    order: 8,
    name: { zh: 'Jeff Martin', en: 'Jeff Martin' },
    role: { zh: '美国芝加哥华德福教师和讲主讲' },
    category: 'language',
    image: jeffMartinImage,
  },
  {
    slug: 'pan-jianfeng',
    order: 9,
    name: { zh: '潘剑峰' },
    role: { zh: '社区管理和发展专家、心性陪伴者' },
    category: 'management',
    image: panJianfengImage,
  },
  {
    slug: 'song-jinchao',
    order: 10,
    name: { zh: '宋进潮' },
    role: { zh: '襄阳民间文学研究所所长、民歌传承人' },
    category: 'culture',
    image: songJinchaoImage,
  },
  {
    slug: 'liu-yuting',
    order: 11,
    name: { zh: '刘昱廷' },
    role: { zh: '全真武当山道医及太乙五行拳导师' },
    category: 'life',
    image: liuYutingImage,
  },
  {
    slug: 'chai-jian',
    order: 12,
    name: { zh: '柴建' },
    role: { zh: '三丰自然派第二十六代传人、道医' },
    category: 'life',
    image: chaiJianImage,
  },
  {
    slug: 'zheng-le',
    order: 13,
    name: { zh: '郑乐' },
    role: { zh: '张三丰历史文化研究会副会长' },
    category: 'culture',
    image: zhengLeImage,
  },
  {
    slug: 'zhang-lingzhi',
    order: 14,
    name: { zh: '张灵芝' },
    role: { zh: '出生于书画世家，深耕艺术教育' },
    category: 'arts',
    image: zhangLingzhiImage,
  },
  {
    slug: 'jin-zhenbao',
    order: 15,
    name: { zh: '金振豹' },
    role: { zh: '幼子夏狄守护中心负责人' },
    category: 'life',
    image: jinZhenbaoImage,
  },
  {
    slug: 'wu-fan',
    order: 16,
    name: { zh: '吴璠' },
    role: { zh: '应用经济学博士，系统士大学工商管理博导' },
    category: 'management',
    image: wuFanImage,
  },
  {
    slug: 'hu-haiyan',
    order: 17,
    name: { zh: '胡海燕' },
    role: { zh: '医学博士，人类医学研究、写作翻译' },
    category: 'life',
    image: huHaiyanImage,
  },
  {
    slug: 'he-xiaoguo',
    order: 18,
    name: { zh: '何孝国' },
    role: { zh: '儒释道三家传统文化与传统身心行者' },
    category: 'culture',
    image: heXiaoguoImage,
  },
  {
    slug: 'zhang-xinxin',
    order: 19,
    name: { zh: '张馨心' },
    role: { zh: '文艺创作者，集体导演于一身' },
    category: 'arts',
    image: zhangXinxinImage,
  },
  {
    slug: 'wang-shiyi',
    order: 20,
    name: { zh: '王诗溢' },
    role: { zh: '神经生物学博士，科学成长社群发起人' },
    category: 'life',
    image: wangShiyiImage,
  },
  {
    slug: 'alexa',
    order: 21,
    name: { zh: 'ALEXA', en: 'ALEXA' },
    role: { zh: '心理学专业毕业，资深国际德语教师' },
    category: 'language',
    image: alexaImage,
  },
] as const satisfies readonly Teacher[];
