# 路由映射

站点固定使用 `https://qingjinacademy.org` 作为 canonical Origin，所有正文 URL 均以 `/` 结尾。中文是无前缀默认语言，英文使用 `/en/` 前缀。

## 正文 URL（38）

| 页面                      | 中文（`zh-CN`）                      | 英文（`en`）                            |
| ------------------------- | ------------------------------------ | --------------------------------------- |
| 首页                      | `/`                                  | `/en/`                                  |
| 关于青衿                  | `/about/`                            | `/en/about/`                            |
| 课程                      | `/courses/`                          | `/en/courses/`                          |
| 师资                      | `/teachers/`                         | `/en/teachers/`                         |
| 咨询/报名                 | `/admissions/`                       | `/en/admissions/`                       |
| 捐赠                      | `/donate/`                           | `/en/donate/`                           |
| `spring-valley-community` | `/partners/spring-valley-community/` | `/en/partners/spring-valley-community/` |
| `hawthorne-valley`        | `/partners/hawthorne-valley/`        | `/en/partners/hawthorne-valley/`        |
| `camphill-copake`         | `/partners/camphill-copake/`         | `/en/partners/camphill-copake/`         |
| `goetheanum`              | `/partners/goetheanum/`              | `/en/partners/goetheanum/`              |
| `ytterjarna`              | `/partners/ytterjarna/`              | `/en/partners/ytterjarna/`              |
| `iuav`                    | `/partners/iuav/`                    | `/en/partners/iuav/`                    |
| `alanus`                  | `/partners/alanus/`                  | `/en/partners/alanus/`                  |
| `bauhaus-weimar`          | `/partners/bauhaus-weimar/`          | `/en/partners/bauhaus-weimar/`          |
| `sunbridge`               | `/partners/sunbridge/`               | `/en/partners/sunbridge/`               |
| `scuola-rudolf-steiner`   | `/partners/scuola-rudolf-steiner/`   | `/en/partners/scuola-rudolf-steiner/`   |
| `spring-valley-eurythmy`  | `/partners/spring-valley-eurythmy/`  | `/en/partners/spring-valley-eurythmy/`  |
| `heliopolis`              | `/partners/heliopolis/`              | `/en/partners/heliopolis/`              |
| `camphill-academy`        | `/partners/camphill-academy/`        | `/en/partners/camphill-academy/`        |

每一行的两种语言页面互相输出 `hreflang="zh-CN"` 和 `hreflang="en"`，并分别输出自 canonical。13 个机构 slug 从同一份公开数据生成两组静态路径，因此机构正文共 26 个输出。

`/404.html` 是自定义错误页，不计入 38 个正文 URL，也不进入 Sitemap。任何未知 slug 都返回 404。

## 旧 Hash 兼容

兼容脚本只在中文首页识别下列精确值，命中后替换为真实路径：

| 旧 Hash                             | 新路径                               |
| ----------------------------------- | ------------------------------------ |
| `#/`                                | `/`                                  |
| `#/home`                            | `/`                                  |
| `#/about`                           | `/about/`                            |
| `#/courses`                         | `/courses/`                          |
| `#/teachers`                        | `/teachers/`                         |
| `#/consult`                         | `/admissions/`                       |
| `#/donate`                          | `/donate/`                           |
| `#/partner/spring-valley-community` | `/partners/spring-valley-community/` |
| `#/partner/hawthorne-valley`        | `/partners/hawthorne-valley/`        |
| `#/partner/camphill-copake`         | `/partners/camphill-copake/`         |
| `#/partner/goetheanum`              | `/partners/goetheanum/`              |
| `#/partner/ytterjarna`              | `/partners/ytterjarna/`              |
| `#/partner/iuav`                    | `/partners/iuav/`                    |
| `#/partner/alanus`                  | `/partners/alanus/`                  |
| `#/partner/bauhaus-weimar`          | `/partners/bauhaus-weimar/`          |
| `#/partner/sunbridge`               | `/partners/sunbridge/`               |
| `#/partner/scuola-rudolf-steiner`   | `/partners/scuola-rudolf-steiner/`   |
| `#/partner/spring-valley-eurythmy`  | `/partners/spring-valley-eurythmy/`  |
| `#/partner/heliopolis`              | `/partners/heliopolis/`              |
| `#/partner/camphill-academy`        | `/partners/camphill-academy/`        |

未知 Hash 保持原状，不猜测、不跳转，也不开放通配重定向。

## 明确不公开

SEKEM 只以内部 ID `sekem` 保存在 `unlinkedPartnerDetails`。以下路径不存在，并必须返回 404：

- `/partners/sekem/`
- `/en/partners/sekem/`

页面卡片、站内链接、语言切换和 Sitemap 均不得出现 SEKEM 路由。
