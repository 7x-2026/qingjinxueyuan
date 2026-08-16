# 青衿学院网站

青衿学院官方网站是一个基于 Astro 的中英文纯静态网站。页面在构建时完成预渲染，提供响应式布局、搜索引擎元数据、可访问的原生交互和渐进增强体验。

## 功能概览

- 中文为默认语言，英文页面统一使用 `/en/` 前缀。
- 6 类栏目页与 13 个合作机构详情页均提供中英文版本，共 38 个正文 URL。
- 每个页面包含 canonical、语言配对、Open Graph 和独立的标题与描述。
- 课程与教师筛选、移动导航、联系面板和返回顶部均使用原生浏览器脚本。
- 禁用 JavaScript 时，主要导航、联系方式、16 门课程和 21 位教师仍然完整可读。
- 图片通过 Astro 静态资源管线生成响应式输出。
- 页面适配桌面、平板与移动设备，并支持 `prefers-reduced-motion`。

## 技术栈

- Node.js 24
- npm
- Astro 7
- TypeScript strict
- `@astrojs/sitemap`
- ESLint 与 Prettier
- Playwright（Chromium）

## 环境准备

建议使用仓库中的 `.nvmrc` 切换 Node.js 版本：

```bash
nvm use
npm ci
```

首次运行端到端测试前，如果本机尚未安装 Playwright Chromium，请执行：

```bash
npx playwright install chromium
```

## 开发与构建

启动开发服务器：

```bash
npm run dev
```

默认访问地址为 `http://localhost:4321/`。需要关闭时，在运行开发服务器的终端按 `Ctrl+C`。

生成并预览生产构建：

```bash
npm run build
npm run preview
```

构建结果写入 `dist/`。该目录由 Git 忽略。

## 可用命令

| 命令                   | 用途                                   |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | 启动 Astro 开发服务器                  |
| `npm run format`       | 使用 Prettier 格式化项目               |
| `npm run format:check` | 检查代码格式                           |
| `npm run lint`         | 运行 ESLint                            |
| `npm run check`        | 运行 Astro 与 TypeScript 诊断          |
| `npm run build`        | 检查项目并生成静态站点                 |
| `npm run preview`      | 预览 `dist/` 中的生产构建              |
| `npm run test:e2e`     | 在生产预览上运行 Playwright 端到端测试 |

## URL 结构

中文栏目页：

```text
/
/about/
/courses/
/teachers/
/admissions/
/donate/
```

英文栏目页在对应路径前添加 `/en`。合作机构详情使用 `/partners/<slug>/` 与 `/en/partners/<slug>/`。所有正文 URL 均使用尾斜杠。

## 内容架构

- `src/data/`：课程、教师、合作机构、联系方式、站点信息和构建期内容验证。
- `src/i18n/`：中英文界面文案、本地化读取和英文缺译回退。
- `src/pages/`：Astro 文件路由。
- `src/views/`：中英文页面共用的页面视图。
- `src/layouts/`：共享 HTML 布局和元数据输出。
- `src/components/`：导航、页脚、筛选、联系面板等组件。
- `src/assets/images/`：由 Astro 静态导入的页面图片。
- `src/styles/`：设计令牌、基础样式、排版和工具类。
- `tests/`：生产预览端到端测试与路由夹具。

内容数据使用稳定 slug 和显式顺序字段。中文内容为必填项；未配置英文内容时，英文页面按字段回退到中文。

## 质量检查

提交代码前运行：

```bash
npm run format:check
npm run lint
npm run check
npm run build
npm run test:e2e
```

端到端测试覆盖正文路由、自定义 404、语言和 SEO 元数据、图片与站内链接、Sitemap、筛选与联系交互、无 JavaScript 阅读体验，以及多个响应式宽度下的页面溢出检查。

## Git 工作流

开始开发前同步主分支并创建短期工作分支：

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/<name>
```

修复使用 `fix/<name>`，普通功能使用 `feature/<name>`。完成质量检查后提交并推送工作分支，再通过审查合并回 `main`。`archive/legacy-site` 仅用于查看历史版本，不在该分支开发，也不合并回 `main`。

## 静态服务器更新

服务器应跟踪 `main`。更新源码并重新生成静态文件：

```bash
git switch main
git pull --ff-only origin main
nvm use
npm ci
npm run build
```

Web 服务器发布目录应指向项目的 `dist/`。是否需要重载服务取决于实际服务器配置。
