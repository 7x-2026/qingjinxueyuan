# 内容更新流程

本文件描述重构后的日常内容维护方式。内容改动以 `src/data/` 与 `src/i18n/` 为准，不再从 TXT、图片 OCR、HTML 片段或运行时正则解析内容。

## 基本规则

1. 先确认修改来源可靠，并保留原文中的姓名、号码、金额、顺序及疑似错字；不要顺手润色历史内容。
2. 在相应的类型化数据文件修改内容，保持 `as const satisfies` 与现有联合类型约束。
3. 中文字段 `zh` 必填。只有获得可靠英文原文时才填写 `en`；缺译时省略 `en`，由 `localize()` 回退中文。
4. 新增条目需要稳定的小写英文 slug、连续且唯一的正整数 `order`，以及合法分类。
5. 更新相关文档与 Playwright 路由/计数夹具，然后运行完整质量检查。

## 数据位置

| 内容                                       | 文件                     |
| ------------------------------------------ | ------------------------ |
| 联系电话、邮箱、地点、微信二维码           | `src/data/contact.ts`    |
| 导航、真实路径、旧 Hash 白名单             | `src/data/navigation.ts` |
| 课程与 3 个课程分类                        | `src/data/courses.ts`    |
| 教师与 7 个筛选项                          | `src/data/teachers.ts`   |
| 13 个公开机构及不公开详情                  | `src/data/partners.ts`   |
| 首页培养内容与项目                         | `src/data/programs.ts`   |
| 站点信息和共享图片                         | `src/data/site.ts`       |
| 公共类型                                   | `src/data/types.ts`      |
| 数量、slug、顺序、分类、图片、路由关系验证 | `src/data/validation.ts` |
| 界面文案与本地化工具                       | `src/i18n/`              |

## 新增或修改课程

- 在 `courses` 中保持 1 到 N 的连续 `order`。
- `category` 只能是 `ewip`、`fsp` 或 `pcp`。
- 图片放入 `src/assets/images/courses/`，使用小写英文连字符文件名并静态导入。
- 若改变分类数量，同步更新构建期断言、Playwright 预期和本文档涉及的计数；不能只让筛选界面看起来正确。
- 当前 16 个课程标题没有可靠英文翻译。新增译文前更新 `docs/translation-todo.md`，不得把英文说明再次写进标题字段。

## 新增或修改教师

- `category` 只能是 `anthro`、`culture`、`arts`、`language`、`life` 或 `management`；`all` 仅是筛选项，不是教师分类。
- 图片放入 `src/assets/images/teachers/` 并静态导入。
- 教师姓名和角色的缺译项保持回退，同时更新 `docs/translation-todo.md`。
- 改变总数或分类数量时同步修改验证和 Playwright 预期。

## 新增或修改公开机构

- 公开机构只写入 `partners`；双语静态详情路由会由同一份数据生成。
- slug 一旦公开，应视为永久 URL。确需变更时，必须同时更新路由映射、语言配对、旧 Hash 白名单、Sitemap 预期和重定向策略。
- `paragraphs` 的每项代表一个语义段落，不要把多段合并为一段，也不要在运行时重新解析纯文本。
- Logo 放入 `src/assets/images/partners/`，页面必须等比 `contain`，不要裁切或人为放大低分辨率图片。
- 更新 `tests/fixtures/routes.ts`、`docs/route-map.md` 与 `docs/asset-map.md`，再确认中英文路由、卡片和语言切换一一对应。

SEKEM 是明确例外：其 4 段原文只允许保留在 `unlinkedPartnerDetails`，不得移动到 `partners`，也不得为它新增卡片、路由、语言切换目标或 Sitemap 项。如产品决定公开，必须作为新的明确需求重新评审，不能当作普通内容更新顺带完成。

## 图片更新

1. 把页面素材放到 `src/assets/images/<section>/`，使用小写英文角色名或数据 slug 命名。
2. 通过 Astro 静态 `import` 和 `<Image />`/`<Picture />` 使用，不写运行时路径拼接。
3. 补齐有意义的 `alt`；纯装饰图片使用空 `alt`，不要重复相邻标题。
4. 更新 `docs/asset-map.md`，并确认文件能在生产 `preview` 加载。
5. 原型图只放在 `docs/design-reference/`，未引用素材只放在 `docs/unused-assets/`，两者都不得进入页面构建。

## 英文更新

- 只录入经过确认的译文，不用机器翻译自动清空缺译清单。
- 完成某项翻译后，填写对应 `LocalizedText.en`，逐项从 `docs/translation-todo.md` 移除并在提交说明中列出。
- 检查英文页面的标题、描述、正文、导航、语言切换与 `html lang="en"`；中文页面保持 `lang="zh-CN"`。
- 人名、机构名和专业术语应由内容负责人确认，不能根据文件名或设计参考图猜测。

## 提交前检查

```bash
npm run format:check
npm run lint
npm run check
npm run build
npm run test:e2e
```

另外核对：生成的 38 个正文 URL 是否与 `docs/route-map.md` 一致、所有图片是否加载、Sitemap 是否只包含公开页面、SEKEM 是否仍不公开，以及 `dist/`、`.astro/`、`node_modules/` 是否均未被 Git 跟踪。
