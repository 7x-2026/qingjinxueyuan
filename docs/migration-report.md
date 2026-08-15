# Astro 本地全量重构迁移报告

## 范围与恢复点

- 基线：`main@b7026d2ef4d008183a8d20e1c134efb8c6f291de`（核对时与本地 `origin/main` 一致，工作区干净）。
- 本地实施分支：`refactor/astro-static-site`。
- 本地恢复 Tag：`backup/pre-astro-local`，指向上述基线。
- 首个机械清理提交：`72152de`（`chore: remove tracked dependencies and build output`）。
- 交付 Commit：本报告所在提交；最终 SHA 以 `git rev-parse HEAD` 为准，并在交付答复中明确报告。

本次工作严格限定在本地仓库：未部署、未推送，未连接或修改服务器、DNS、SSH、托管平台及任何线上配置。

## 基线审计

迁移前重新核对得到以下锁定数量：

| 项目                            | 数量/结论                        |
| ------------------------------- | -------------------------------- |
| 课程                            | 16（分类 8 / 5 / 3）             |
| 教师                            | 21（分类 3 / 4 / 4 / 2 / 5 / 3） |
| 公开合作机构                    | 13                               |
| `sucai/` 图片                   | 69                               |
| 旧源码可解析引用                | 67                               |
| 实际进入页面的唯一素材          | 66                               |
| 内容 TXT                        | 2                                |
| 设计参考图                      | 10                               |
| Git 跟踪的 `node_modules` 文件  | 6002                             |
| Git 跟踪的旧 `dist` 文件        | 70                               |
| 上述依赖树中的 Windows 专用文件 | 35                               |

在删除旧构建产物前，完整的旧 `dist/` 已复制到临时目录，并在 390、768、1440px 保存首页基线到 `docs/legacy-reference/`。Git 历史未改写；历史提交继续包含旧包属于正常结果。

## 工程迁移

- React/Vite Hash SPA 被替换为 Astro 静态多页面工程，TypeScript 使用 strict 配置。
- 运行时固定 Node.js 24 主版本，包管理器为 npm；全新 `package-lock.json` 固定实际依赖树。
- 生产依赖仅为 `astro` 与 `@astrojs/sitemap`；检查、格式化、Lint 和 Playwright 均为开发依赖。
- Astro 固定站点 Origin `https://qingjinacademy.org`、静态输出、尾斜杠、默认无前缀中文、`/en/` 英文和 Sitemap。
- 没有 `base`、Adapter 或生产环境变量依赖；Playwright 仅在测试命令内关闭 Astro preview 的 agent-shell 后台化行为。
- `.gitignore` 排除 `node_modules/`、`dist/`、`.astro/`、测试报告、覆盖率和本地环境文件。

最终本地依赖树解析到以下直接版本：

| 工具/依赖               | 版本    |
| ----------------------- | ------- |
| Node.js                 | 24.19.0 |
| npm                     | 11.17.0 |
| Astro                   | 7.2.2   |
| `@astrojs/sitemap`      | 3.7.3   |
| `@astrojs/check`        | 0.9.10  |
| TypeScript              | 6.0.3   |
| ESLint                  | 10.8.1  |
| Prettier                | 3.9.6   |
| `@playwright/test`      | 1.62.1  |
| `eslint-plugin-astro`   | 3.1.0   |
| `prettier-plugin-astro` | 0.14.1  |

## 内容与 TXT 对账

两份 UTF-8 原文件在迁移前记录如下：

| 原文件         | SHA-256                                                            |
| -------------- | ------------------------------------------------------------------ |
| `学校信息.txt` | `2e95f00518aa6e69eafa02908a3ab16185071e679a23e933fb5943fd1d0215b2` |
| `社区信息.txt` | `b5275ef5824bea994b2cd4855bdee494a6bb4b2fe327e87999102fcd0c4fcb56` |

TXT 实际包含 14 个机构详情和 38 个非空正文物理行，每一行迁为一个语义段落：

- 13 个公开机构：34 段，进入 `partners` 并生成双语静态详情页。
- SEKEM：4 段，进入独立 `unlinkedPartnerDetails`，只保留数据，不建立卡片或路由。

旧运行时解析器会把这些原文折叠为 15 个段落数组元素；本次按物理正文行迁移后为 38 个语义段落。删除 TXT 前已按标题、字符、顺序和段落进行自动对账，同时移除 raw import、正则解析和 eager glob。

旧 `content.ts` 和页面字面量被拆到类型化数据及 `src/i18n/`。中文是必填权威文本，英文可选并统一回退。16 个课程标题缺译，英文页回退中文标题；旧有 16 条英文说明继续保留在说明字段。教师角色、部分教师姓名、机构详情及其他实际回退项记录在 `docs/translation-todo.md`，没有自行翻译或纠正原文疑点。

## 素材对账

- 67 张旧源码可解析图片以文件移动方式进入 `src/assets/images/`，按页面角色或数据 slug 使用小写英文名。
- 其中 66 张是页面可见素材；`about/global-partnerships.png` 保留为“源码引用但旧站未渲染”，本次仍不擅自加入页面。
- 2 张完全未引用图片进入 `docs/unused-assets/`。
- 10 张原型图进入 `docs/design-reference/`，只作人工视觉方向参考，不用于 OCR 补写内容。
- 图片迁移未重新编码；文件内容 Git blob 哈希多重集前后一致。

完整逐文件记录见 `docs/asset-map.md`。

## 页面与行为

- 共享布局和七类共享 View 由中英文 Astro 文件路由薄包装调用。
- 输出 38 个正文 URL：中文 6 + 13、英文 6 + 13，另有自定义 404；完整清单见 `docs/route-map.md`。
- 每页输出独立标题、描述、自 canonical、`zh-CN`/`en` hreflang、正确 `html lang` 和 Open Graph；OG 图片复用既有首页 Hero。
- 所有导航、CTA、语言切换和机构卡片使用真实链接。中文首页只兼容显式白名单中的旧 Hash，未知 Hash 不跳转。
- 课程 16 项和教师 21 项全部预渲染；原生脚本在启用 JavaScript 后提供可访问筛选，无 JavaScript 时仍完整可读。
- 移动菜单、电话/微信面板和返回顶部使用原生脚本，支持 Escape、焦点进入/恢复、`aria-expanded` 与 reduced motion。
- 咨询页保留原流程、费用和汇款文字，并使用真实 `tel:`/`mailto:`。
- 捐赠页不再提供演示表单、输入框、支付按钮或伪成功提示，只保留既有静态说明和真实联系方式。

## 路由与公开边界

Sitemap、页面链接和语言切换只包含 13 个公开机构。以下两个路径必须返回 404：

- `/partners/sekem/`
- `/en/partners/sekem/`

`dist/` 在最终本地构建后必须存在，但保持忽略；`node_modules/`、`dist/`、`.astro/` 的 Git 跟踪数量必须为零。

## 最终验收记录

下表只记录干净安装后的本地最终交付审计结果。

| 检查                                   | 结果                                                                |
| -------------------------------------- | ------------------------------------------------------------------- |
| `npm ci`                               | 通过：按锁文件干净安装 385 个包                                     |
| `npm run format:check`                 | 通过                                                                |
| `npm run lint`                         | 通过                                                                |
| `npm run check`                        | 通过：0 errors、0 warnings、0 hints                                 |
| `npm run build`                        | 通过：静态输出 39 页（38 个正文 + 自定义 404）                      |
| `npm run test:e2e`                     | 通过：22 passed、12 个跨项目去重 skip、0 failed，29.6 秒            |
| 38 个正文 URL / 自定义 404 / SEKEM 404 | 通过：38 个正文均为 200，未知页与两条 SEKEM 路径均为 404            |
| 320、390、768、1024、1440px 响应式检查 | 通过：38 个正文 × 5 个宽度均无横向溢出；390/768/1440 已人工对比旧版 |
| Git 清洁与生成目录跟踪审计             | 通过：生成目录跟踪数为 0；`dist/` 本地存在且保持忽略                |

上述结果来自最后一次本地交付审计；最终提交后再次核对工作区状态，并在交付答复中报告实际 SHA。
