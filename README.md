# 青衿学院网站

青衿学院官方网站的本地 Astro 全量重构。项目使用 Node.js 24、npm、Astro、TypeScript strict 和原生浏览器交互，构建结果为可直接托管的纯静态中英文多页面网站。

本仓库当前工作只覆盖本地开发、构建和验收，不包含部署、推送、服务器、DNS、SSH 或任何线上基础设施操作。

## 本地运行

环境要求：Node.js 24.x 与 npm 11.x。`.nvmrc` 固定主版本，`package-lock.json` 固定实际依赖树。

```bash
nvm use
npm ci
npm run dev
```

开发服务器默认由 Astro 提供。生产构建与预览：

```bash
npm run build
npm run preview
```

`dist/` 会保留在本地用于最终检查，但已加入 `.gitignore`，不得提交。

## 质量检查

```bash
npm run format:check
npm run lint
npm run check
npm run build
npm run test:e2e
```

Playwright 会启动基于 `dist/` 的 Astro `preview`，覆盖桌面和移动 Chromium。端到端用例检查 38 个正文 URL、自定义 404、SEO 与语言配对、图片和链接、Sitemap、原生筛选与面板、旧 Hash 兼容、禁用 JavaScript 的内容可读性，以及 320–1440px 的横向溢出。

首次在新机器运行测试前，如本机尚无 Playwright Chromium，需要执行：

```bash
npx playwright install chromium
```

## 内容与路由

- 中文不加语言前缀，英文统一位于 `/en/`。
- 中文 19 个正文 URL（6 个栏目页 + 13 个机构详情），英文同样 19 个，共 38 个。
- 16 门课程、21 位教师、13 个公开合作机构均在构建时预渲染。
- SEKEM 的 4 段原文只保留在 `unlinkedPartnerDetails`，不生成卡片、路由、语言切换目标或 Sitemap 条目。
- 英文缺译字段按统一规则回退中文，不在迁移时自行翻译。

完整映射见 [docs/route-map.md](docs/route-map.md)，内容维护流程见 [docs/content-update.md](docs/content-update.md)。

## 目录结构

```text
src/
  assets/images/       Astro 静态导入图片
  components/          可复用页面组件
  data/                类型化内容、联系信息与构建期验证
  i18n/                中英文界面文案与回退工具
  layouts/             共享页面布局和元数据
  pages/               Astro 文件路由薄包装
  styles/              全局设计令牌、基础样式与工具类
  views/               中英文共用的七类页面 View
docs/
  design-reference/    仅供人工比对的 10 张原型图
  unused-assets/       不参与构建的 2 张未引用旧素材
tests/                  Playwright 生产预览验收
```

## 实现原则

- 旧源码和两份 TXT 是内容与功能权威，设计参考图只决定视觉方向，不从图片 OCR 补写内容。
- 所有导航、CTA、语言切换和机构卡片使用真实 `<a>` 与尾斜杠 URL。
- 课程和教师卡片在 HTML 中全部存在；JavaScript 只增强筛选、移动菜单、联系面板和返回顶部。
- 图片通过 Astro 静态导入及图片组件处理；合作机构 Logo 使用等比 `contain`，不放大裁切。
- 原文中的姓名、数字、金额和疑似错字原样保留。课程标题字段映射是本次唯一按既定决定纠正的数据问题。

迁移审计见 [docs/migration-report.md](docs/migration-report.md)，素材对账见 [docs/asset-map.md](docs/asset-map.md)，缺译清单见 [docs/translation-todo.md](docs/translation-todo.md)。
