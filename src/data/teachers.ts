import boWernerErikssonImage from '../assets/images/teachers/bo-werner-eriksson.png';
import chaiJianImage from '../assets/images/teachers/chai-jian.png';
import chengMingxuImage from '../assets/images/teachers/details/cheng-mingxu.webp';
import guoHuiImage from '../assets/images/teachers/details/guo-hui.webp';
import huHaiyanImage from '../assets/images/teachers/hu-haiyan.png';
import jeffMartinImage from '../assets/images/teachers/jeff-martin.png';
import karlSchurmanImage from '../assets/images/teachers/karl-schurman.png';
import linYuanImage from '../assets/images/teachers/lin-yuan.png';
import liuYutingImage from '../assets/images/teachers/liu-yuting.png';
import michealDAleoImage from '../assets/images/teachers/micheal-d-aleo.png';
import muChuanzhenImage from '../assets/images/teachers/details/mu-chuanzhen.webp';
import oferSagieImage from '../assets/images/teachers/details/ofer-sagie.webp';
import panJianfengImage from '../assets/images/teachers/pan-jianfeng.png';
import songJinchaoImage from '../assets/images/teachers/song-jinchao.png';
import tedWarrenImage from '../assets/images/teachers/ted-warren.png';
import wangShiyiImage from '../assets/images/teachers/wang-shiyi.png';
import wuFanImage from '../assets/images/teachers/wu-fan.png';
import xinchenDaoistImage from '../assets/images/teachers/xinchen-daoist.png';
import yangLiangImage from '../assets/images/teachers/details/yang-liang.webp';
import yangZhengrongImage from '../assets/images/teachers/details/yang-zhengrong.png';
import yangZhihuangImage from '../assets/images/teachers/details/yang-zhihuang.webp';
import zangYibingImage from '../assets/images/teachers/zang-yibing.png';
import zhangLingzhiImage from '../assets/images/teachers/zhang-lingzhi.png';
import zhengLeImage from '../assets/images/teachers/zheng-le.png';
import { teacherDetails } from './teacher-details';
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
    category: 'anthro',
    image: tedWarrenImage,
    ...teacherDetails['ted-warren'],
  },
  {
    slug: 'micheal-d-aleo',
    order: 2,
    category: 'anthro',
    image: michealDAleoImage,
    ...teacherDetails['micheal-d-aleo'],
  },
  {
    slug: 'karl-schurman',
    order: 3,
    category: 'anthro',
    image: karlSchurmanImage,
    ...teacherDetails['karl-schurman'],
  },
  {
    slug: 'xinchen-daoist',
    order: 4,
    category: 'culture',
    image: xinchenDaoistImage,
    ...teacherDetails['xinchen-daoist'],
  },
  {
    slug: 'zang-yibing',
    order: 5,
    category: 'arts',
    image: zangYibingImage,
    ...teacherDetails['zang-yibing'],
  },
  {
    slug: 'lin-yuan',
    order: 6,
    category: 'management',
    image: linYuanImage,
    ...teacherDetails['lin-yuan'],
  },
  {
    slug: 'bo-werner-eriksson',
    order: 7,
    category: 'arts',
    image: boWernerErikssonImage,
    ...teacherDetails['bo-werner-eriksson'],
  },
  {
    slug: 'jeff-martin',
    order: 8,
    category: 'language',
    image: jeffMartinImage,
    ...teacherDetails['jeff-martin'],
  },
  {
    slug: 'pan-jianfeng',
    order: 9,
    category: 'management',
    image: panJianfengImage,
    ...teacherDetails['pan-jianfeng'],
  },
  {
    slug: 'song-jinchao',
    order: 10,
    category: 'culture',
    image: songJinchaoImage,
    ...teacherDetails['song-jinchao'],
  },
  {
    slug: 'liu-yuting',
    order: 11,
    category: 'life',
    image: liuYutingImage,
    ...teacherDetails['liu-yuting'],
  },
  {
    slug: 'chai-jian',
    order: 12,
    category: 'life',
    image: chaiJianImage,
    ...teacherDetails['chai-jian'],
  },
  {
    slug: 'zheng-le',
    order: 13,
    category: 'culture',
    image: zhengLeImage,
    ...teacherDetails['zheng-le'],
  },
  {
    slug: 'zhang-lingzhi',
    order: 14,
    category: 'arts',
    image: zhangLingzhiImage,
    ...teacherDetails['zhang-lingzhi'],
  },
  {
    slug: 'wu-fan',
    order: 15,
    category: 'management',
    image: wuFanImage,
    ...teacherDetails['wu-fan'],
  },
  {
    slug: 'hu-haiyan',
    order: 16,
    category: 'life',
    image: huHaiyanImage,
    ...teacherDetails['hu-haiyan'],
  },
  {
    slug: 'wang-shiyi',
    order: 17,
    category: 'life',
    image: wangShiyiImage,
    ...teacherDetails['wang-shiyi'],
  },
  {
    slug: 'yang-liang',
    order: 18,
    category: 'anthro',
    image: yangLiangImage,
    ...teacherDetails['yang-liang'],
  },
  {
    slug: 'yang-zhengrong',
    order: 19,
    category: 'life',
    image: yangZhengrongImage,
    ...teacherDetails['yang-zhengrong'],
  },
  {
    slug: 'guo-hui',
    order: 20,
    category: 'arts',
    image: guoHuiImage,
    ...teacherDetails['guo-hui'],
  },
  {
    slug: 'cheng-mingxu',
    order: 21,
    category: 'anthro',
    image: chengMingxuImage,
    ...teacherDetails['cheng-mingxu'],
  },
  {
    slug: 'yang-zhihuang',
    order: 22,
    category: 'life',
    image: yangZhihuangImage,
    ...teacherDetails['yang-zhihuang'],
  },
  {
    slug: 'mu-chuanzhen',
    order: 23,
    category: 'life',
    image: muChuanzhenImage,
    ...teacherDetails['mu-chuanzhen'],
  },
  {
    slug: 'ofer-sagie',
    order: 24,
    category: 'arts',
    image: oferSagieImage,
    ...teacherDetails['ofer-sagie'],
  },
] as const satisfies readonly Teacher[];

export const publicTeacherSlugs: readonly string[] = teachers.map(
  ({ slug }) => slug,
);

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachers.find((teacher) => teacher.slug === slug);
}
