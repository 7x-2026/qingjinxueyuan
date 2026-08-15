# 素材迁移映射

## 对账结论

- 原 `sucai/` 共 69 张 PNG：67 张被旧 `asset(...)` 解析，66 张实际进入页面，2 张完全未引用。
- 67 张解析素材现全部位于 `src/assets/images/`，并通过 Astro 静态导入使用。
- `sucai/about/全球合作.png` 在旧源码中赋给 `images.global`，但全仓没有消费；现保留为 `about/global-partnerships.png`，仍不渲染。
- 两张完全未引用素材迁入 `docs/unused-assets/`，不参与构建。
- 原 `yuanxing/` 的 10 张设计参考图全部迁入 `docs/design-reference/`，只用于人工视觉比对。
- 迁移前后文件内容的 Git blob 哈希多重集一致；本次只移动和重命名，没有重新编码图片。
- 旧数据把 `德国阿兰努斯大学1.png` 配给“德国魏玛包豪斯大学”；新文件名 `bauhaus-weimar.png` 只表达该既有数据角色，不代表已核实图片内容。此疑点按“原文/原映射优先”保留，未擅自替换。

计数关系：`11 about + 1 admissions + 17 courses + 1 donate + 13 partners + 2 shared + 22 teachers = 67`；其中减去 1 张未渲染的 `global-partnerships.png`，页面可见唯一素材为 66 张；再加 2 张 unused，等于原始 69 张。

## `sucai/` → `src/assets/images/`

### About（11）

| 原路径                           | 新路径                                            | 状态             |
| -------------------------------- | ------------------------------------------------- | ---------------- |
| `sucai/about/主图@1.5x.png`      | `src/assets/images/about/hero.png`                | 渲染             |
| `sucai/about/1关于青衿@1.5x.png` | `src/assets/images/about/gallery-01.png`          | 渲染             |
| `sucai/about/2关于青衿@1.5x.png` | `src/assets/images/about/gallery-02.png`          | 渲染             |
| `sucai/about/3关于青衿@1.5x.png` | `src/assets/images/about/gallery-03.png`          | 渲染             |
| `sucai/about/1招生计划@1.5x.png` | `src/assets/images/about/enrollment-01.png`       | 渲染             |
| `sucai/about/2招生计划@1.5x.png` | `src/assets/images/about/enrollment-02.png`       | 渲染             |
| `sucai/about/3招生计划@1.5x.png` | `src/assets/images/about/enrollment-03.png`       | 渲染             |
| `sucai/about/1培养方向@1.5x.png` | `src/assets/images/about/development-01.png`      | 渲染             |
| `sucai/about/2培养方向@1.5x.png` | `src/assets/images/about/development-02.png`      | 渲染             |
| `sucai/about/青衿社区@1.5x.png`  | `src/assets/images/about/community.png`           | 渲染             |
| `sucai/about/全球合作.png`       | `src/assets/images/about/global-partnerships.png` | 源码解析但未渲染 |

### Admissions / Donate / Shared（4）

| 原路径                               | 新路径                                   |
| ------------------------------------ | ---------------------------------------- |
| `sucai/zixunyubaoming/主图@1.5x.png` | `src/assets/images/admissions/hero.png`  |
| `sucai/juanzeng/主图@1.5x.png`       | `src/assets/images/donate/hero.png`      |
| `sucai/shouye/shouye.png`            | `src/assets/images/shared/home-hero.png` |
| `sucai/shouye/code@1.5x.png`         | `src/assets/images/shared/wechat-qr.png` |

### Courses（17）

| 原路径                                        | 新路径                                                      |
| --------------------------------------------- | ----------------------------------------------------------- |
| `sucai/kecheng/主图.png`                      | `src/assets/images/courses/hero.png`                        |
| `sucai/kecheng/生命自传@1.5x.png`             | `src/assets/images/courses/life-biography.png`              |
| `sucai/kecheng/六个基本练习@1.5x.png`         | `src/assets/images/courses/six-basic-exercises.png`         |
| `sucai/kecheng/光与灵的练习@1.5x.png`         | `src/assets/images/courses/light-and-spirit.png`            |
| `sucai/kecheng/武艺运动与身心和谐@1.5x.png`   | `src/assets/images/courses/martial-arts-and-harmony.png`    |
| `sucai/kecheng/道医@1.5x.png`                 | `src/assets/images/courses/daoist-medicine.png`             |
| `sucai/kecheng/道乐@1.5x.png`                 | `src/assets/images/courses/daoist-music.png`                |
| `sucai/kecheng/活力农耕@1.5x.png`             | `src/assets/images/courses/biodynamic-farming.png`          |
| `sucai/kecheng/行走与研学@1.5x.png`           | `src/assets/images/courses/study-travel.png`                |
| `sucai/kecheng/华德福教育@1.5x.png`           | `src/assets/images/courses/waldorf-education.png`           |
| `sucai/kecheng/人智医学@1.5x.png`             | `src/assets/images/courses/anthroposophic-medicine.png`     |
| `sucai/kecheng/疗愈教育（康复村）@1.5x.png`   | `src/assets/images/courses/curative-education.png`          |
| `sucai/kecheng/艺术治疗@1.5x.png`             | `src/assets/images/courses/art-therapy.png`                 |
| `sucai/kecheng/优律诗美（音语舞）@1.5x.png`   | `src/assets/images/courses/eurythmy.png`                    |
| `sucai/kecheng/人智学建筑与艺术设计@1.5x.png` | `src/assets/images/courses/anthroposophic-architecture.png` |
| `sucai/kecheng/感官公园@1.5x.png`             | `src/assets/images/courses/sensory-park.png`                |
| `sucai/kecheng/社区管理与发展@1.5x.png`       | `src/assets/images/courses/community-management.png`        |

### Partners（13）

| 原路径                                           | 新路径                                                   |
| ------------------------------------------------ | -------------------------------------------------------- |
| `sucai/hezuo/美国纽约春之谷.png`                 | `src/assets/images/partners/spring-valley-community.png` |
| `sucai/hezuo/美国纽约霍桑山谷社区.png`           | `src/assets/images/partners/hawthorne-valley.png`        |
| `sucai/hezuo/美国科培克康复社区.png`             | `src/assets/images/partners/camphill-copake.png`         |
| `sucai/hezuo/瑞士歌德馆.png`                     | `src/assets/images/partners/goetheanum.png`              |
| `sucai/hezuo/瑞典雅纳社区.png`                   | `src/assets/images/partners/ytterjarna.png`              |
| `sucai/hezuo/威尼斯建筑大学_百度百科.png`        | `src/assets/images/partners/iuav.png`                    |
| `sucai/hezuo/德国阿兰努斯大学.png`               | `src/assets/images/partners/alanus.png`                  |
| `sucai/hezuo/德国阿兰努斯大学1.png`              | `src/assets/images/partners/bauhaus-weimar.png`          |
| `sucai/hezuo/美国纽约日桥学院.png`               | `src/assets/images/partners/sunbridge.png`               |
| `sucai/hezuo/意大利米兰施泰纳学校艺术学院.png`   | `src/assets/images/partners/scuola-rudolf-steiner.png`   |
| `sucai/hezuo/美国纽约春之谷音语舞学校.png`       | `src/assets/images/partners/spring-valley-eurythmy.png`  |
| `sucai/hezuo/埃及赫利奥波利斯可持续发展大学.png` | `src/assets/images/partners/heliopolis.png`              |
| `sucai/hezuo/美国坎普希尔学院.png`               | `src/assets/images/partners/camphill-academy.png`        |

### Teachers（22）

| 原路径                               | 新路径                                              |
| ------------------------------------ | --------------------------------------------------- |
| `sucai/shizi/Banner-老师@1.5x.png`   | `src/assets/images/teachers/hero.png`               |
| `sucai/shizi/Ted Warren.png`         | `src/assets/images/teachers/ted-warren.png`         |
| `sucai/shizi/Micheal D'Aleo.png`     | `src/assets/images/teachers/micheal-d-aleo.png`     |
| `sucai/shizi/Karl Schurman.png`      | `src/assets/images/teachers/karl-schurman.png`      |
| `sucai/shizi/信辰道长.png`           | `src/assets/images/teachers/xinchen-daoist.png`     |
| `sucai/shizi/臧艺兵.png`             | `src/assets/images/teachers/zang-yibing.png`        |
| `sucai/shizi/林源.png`               | `src/assets/images/teachers/lin-yuan.png`           |
| `sucai/shizi/Bo Werner Eriksson.png` | `src/assets/images/teachers/bo-werner-eriksson.png` |
| `sucai/shizi/Jeff Martin.png`        | `src/assets/images/teachers/jeff-martin.png`        |
| `sucai/shizi/潘剑峰.png`             | `src/assets/images/teachers/pan-jianfeng.png`       |
| `sucai/shizi/宋进潮.png`             | `src/assets/images/teachers/song-jinchao.png`       |
| `sucai/shizi/刘昱廷.png`             | `src/assets/images/teachers/liu-yuting.png`         |
| `sucai/shizi/柴建.png`               | `src/assets/images/teachers/chai-jian.png`          |
| `sucai/shizi/郑乐.png`               | `src/assets/images/teachers/zheng-le.png`           |
| `sucai/shizi/张灵芝.png`             | `src/assets/images/teachers/zhang-lingzhi.png`      |
| `sucai/shizi/金振豹.png`             | `src/assets/images/teachers/jin-zhenbao.png`        |
| `sucai/shizi/吴璠.png`               | `src/assets/images/teachers/wu-fan.png`             |
| `sucai/shizi/胡海燕.png`             | `src/assets/images/teachers/hu-haiyan.png`          |
| `sucai/shizi/何孝国.png`             | `src/assets/images/teachers/he-xiaoguo.png`         |
| `sucai/shizi/张馨心.png`             | `src/assets/images/teachers/zhang-xinxin.png`       |
| `sucai/shizi/王诗溢.png`             | `src/assets/images/teachers/wang-shiyi.png`         |
| `sucai/shizi/ALEXA.png`              | `src/assets/images/teachers/alexa.png`              |

## 未引用素材（2）

| 原路径                                                 | 新路径                                                    |
| ------------------------------------------------------ | --------------------------------------------------------- |
| `sucai/hezuo/ChatGPT Image 2026年5月27日 19_30_59.png` | `docs/unused-assets/partner-chatgpt-image-2026-05-27.png` |
| `sucai/shizi/主图@1.5x.png`                            | `docs/unused-assets/teachers-main.png`                    |

## `yuanxing/` → `docs/design-reference/`（10）

| 原路径                                | 新路径                                              |
| ------------------------------------- | --------------------------------------------------- |
| `yuanxing/关于青衿@0.5x.png`          | `docs/design-reference/about-desktop.png`           |
| `yuanxing/咨询与报名@0.5x.png`        | `docs/design-reference/admissions-desktop.png`      |
| `yuanxing/师资@0.5x.png`              | `docs/design-reference/teachers-desktop.png`        |
| `yuanxing/捐赠@0.5x.png`              | `docs/design-reference/donate-desktop.png`          |
| `yuanxing/移动端-底部@0.5x.png`       | `docs/design-reference/mobile-footer.png`           |
| `yuanxing/老师课程@0.5x.png`          | `docs/design-reference/teacher-courses-desktop.png` |
| `yuanxing/课程@0.5x.png`              | `docs/design-reference/courses-desktop.png`         |
| `yuanxing/首页1.2--二维码@0.5x.png`   | `docs/design-reference/home-qr.png`                 |
| `yuanxing/首页1.2--切图@0.5x.png`     | `docs/design-reference/home-main.png`               |
| `yuanxing/首页1.2--联系电话@0.5x.png` | `docs/design-reference/home-phone.png`              |
