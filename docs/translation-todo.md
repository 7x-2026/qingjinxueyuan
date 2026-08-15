# 英文缺译清单

英文页面统一通过 `localize()` 回退到中文；下列字段未获得可靠英文原文，因此 `en` 被有意省略。不要把机器翻译或根据设计图猜测的文字写回数据。

## 课程标题（16）

旧 `content.ts` 把英文说明误填进 `title.en`。本次只纠正字段映射：保留 16 条既有英文说明，课程标题回退中文。

1. `life-biography`：生命自传
2. `six-basic-exercises`：六个基本练习
3. `light-and-spirit`：光与灵的练习
4. `martial-arts-and-harmony`：武艺运动与身心和谐
5. `daoist-medicine`：道医
6. `daoist-music`：道乐
7. `biodynamic-farming`：活力农耕
8. `study-travel`：行走与研学
9. `waldorf-education`：华德福教育
10. `anthroposophic-medicine`：人智医学
11. `curative-education`：疗愈教育（康复村）
12. `art-therapy`：艺术治疗
13. `eurythmy`：优律诗美（音语舞）
14. `anthroposophic-architecture`：人智学建筑与艺术设计
15. `sensory-park`：感官公园
16. `community-management`：社区管理与发展

## 教师（21 个角色，15 个姓名）

21 位教师的 `role.en` 均缺失；旧站只是把中文角色复制到英文键，本次改为明确回退。下列 15 位教师的英文姓名形式也缺失：

- `xinchen-daoist`：信辰道长
- `zang-yibing`：臧艺兵
- `lin-yuan`：林源
- `pan-jianfeng`：潘剑峰
- `song-jinchao`：宋进潮
- `liu-yuting`：刘昱廷
- `chai-jian`：柴建
- `zheng-le`：郑乐
- `zhang-lingzhi`：张灵芝
- `jin-zhenbao`：金振豹
- `wu-fan`：吴璠
- `hu-haiyan`：胡海燕
- `he-xiaoguo`：何孝国
- `zhang-xinxin`：张馨心
- `wang-shiyi`：王诗溢

Ted Warren、Micheal D'Aleo、Karl Schurman、Bo Werner Eriksson、Jeff Martin 和 ALEXA 的既有拉丁字母姓名同时用于中英文；这 6 项不属于缺译。所有疑似拼写或原文错误均原样保留。

## 合作机构详情（14 个标题，38 个段落）

两份 TXT 只提供中文详情。13 个公开机构的 13 个详情标题和 34 个段落，以及不公开 SEKEM 的 1 个标题和 4 个段落，均缺少英文：

| 数据项                    | 段落数 | 公开状态           |
| ------------------------- | -----: | ------------------ |
| `spring-valley-community` |      1 | 公开               |
| `hawthorne-valley`        |      2 | 公开               |
| `camphill-copake`         |      2 | 公开               |
| `goetheanum`              |      3 | 公开               |
| `ytterjarna`              |      2 | 公开               |
| `iuav`                    |      2 | 公开               |
| `alanus`                  |      1 | 公开               |
| `bauhaus-weimar`          |      1 | 公开               |
| `sunbridge`               |      1 | 公开               |
| `scuola-rudolf-steiner`   |      1 | 公开               |
| `spring-valley-eurythmy`  |      3 | 公开               |
| `heliopolis`              |      8 | 公开               |
| `camphill-academy`        |      7 | 公开               |
| `sekem`                   |      4 | 仅保留数据，不公开 |

机构卡片已有的英文 `caption` 保留不变，不在此清单。英文详情页在译文补齐前显示对应中文标题和中文段落。

## 有意保持原样的非译文字段

- 品牌字样“青衿学院”和版权法定名称在两种语言中保持原样。
- 电话显示文字包含原有“（中国地区）”“（美国地区）”标签，号码本身不做翻译；链接使用标准化 `tel:` 值。
- 银行账号、机构名、姓名拼写、金额及原文中的疑似错字都不得由翻译流程擅自更正。
