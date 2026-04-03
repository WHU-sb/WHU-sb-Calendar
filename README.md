# 武汉大学 iCalendar 校历

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-ES%20Modules-green.svg)](https://nodejs.org/)
[![Build Status](https://github.com/WHU-sb/WHU-sb-Calendar/workflows/Build%20and%20Deploy%20ICS%20Calendar/badge.svg)](https://github.com/WHU-sb/WHU-sb-Calendar/actions)
[![Last commit](https://img.shields.io/github/last-commit/WHU-sb/WHU-sb-Calendar.svg)](https://github.com/WHU-sb/WHU-sb-Calendar/commits/main)
[![Issues](https://img.shields.io/github/issues/WHU-sb/WHU-sb-Calendar.svg)](https://github.com/WHU-sb/WHU-sb-Calendar/issues)
[![Stars](https://img.shields.io/github/stars/WHU-sb/WHU-sb-Calendar.svg)](https://github.com/WHU-sb/WHU-sb-Calendar/stargazers)

武汉大学校历数据集合，支持导入各种日历应用，轻松管理学校日程。

## 项目简介

本项目提供武汉大学官方校历的 iCalendar 格式数据，目前包含从 2021 年到 2026 年（持续更新中）的完整校历信息。

本项目已完成从「硬编码脚本」向「数据驱动架构」的现代化迁移：
- **数据源统一**：所有校历数据均存储在 `data/*.json` 中。
- **自动化校验**：引入对齐审计和溯源审计脚本，确保数据 100% 准确。

> **注意**：本项目仅提供校历数据，不保证数据的绝对实时性。请以武汉大学官方发布的[最新校历](https://uc.whu.edu.cn/xl.htm)为准。

### 主要特性

- **官方数据源**：基于武汉大学本科生院官方校历数据。
- **Sunday-Start 规范**：所有教学周严格从周日开始，到周六结束，完美契合武大作息。
- **现代化架构**：采用 JSON 结构化存储，支持 1-indexed 月份表示，告别 JS Date 的 0 索引歧义。
- **自动更新**：支持在线订阅，校历更新时自动同步。
- **网页预览**：通过 [calendar.whu.sb](https://calendar.whu.sb) 动态加载并提供下载。

## 快速开始

### 在线使用

访问 [项目主页](https://calendar.whu.sb/) 直接预览并下载所需的校历文件。

### 本地开发

1. **克隆项目**

```bash
git clone https://github.com/WHU-sb/WHU-sb-Calendar.git
cd WHU-sb-Calendar
```

2. **安装依赖**

```bash
pnpm install
```

3. **构建项目**

```bash
pnpm run build
```

## 项目结构

```
whu-calendar/
├── data/                   # 结构化 JSON 校历数据
├── src/                    # 引擎源文件
│   ├── engine.ts           # 统一构建引擎
│   ├── check-alignment.ts  # 自动对齐校验工具
│   └── check-legacy-parity.ts # 溯源审计工具
├── legacy/                 # （弃用） 年度 TS 数据源
├── dist/                   # 构建输出目录
│   ├── *.ics               # 生成的 ICS 文件
│   ├── all.ics             # 完整合集
│   └── years.json          # 供前端使用的年份元数据
├── index.html              # 项目主页
└── README.md
```

## 使用方法

见 [document.md](https://github.com/WHU-sb/WHU-sb-Calendar/blob/main/document.md)

## 数据说明

自 2024 年起，本项目弃用了 `calendar_YYYY.ts` 脚本方式，转而采用 JSON 数据驱动。

### 格式对比 (Legacy vs Modern)

| 特性 | Legacy (TS) | Modern (JSON) |
| :--- | :--- | :--- |
| **存储方式** | 硬编码脚本 (`legacy/*.ts`) | 结构化数据 (`data/*.json`) |
| **月份索引** | 0-indexed (0=Jan) | **1-indexed (1=Jan)** |
| **周起始日** | 视脚本而定 | **强制 Sunday (周日)** |
| **校验机制** | 无 | 自动化脚本审计 |

## 开发指南

### 添加新年度校历

1. 在 `data/` 目录下创建新的 `YYYY-YYYY.json` 文件（参考现有模板）。
2. **日期规范**：
    - 月份使用真实数字（如 9 代表 9 月）。
    - 每个学期的 `start` 日期必须固定为**该周的星期天**。
3. 运行 `pnpm run build` 重新生成资源。
4. 运行 `npx tsx src/check-alignment.ts` 进行审计。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- 感谢武汉大学本科生院提供官方校历数据。
- 感谢所有贡献者的支持和建议。

<!--GAMFC--><a href="https://github.com/HsukqiLee" title="Hsukqi Lee"><img src="https://avatars.githubusercontent.com/u/79034142?v=4" width="42;" alt="Hsukqi Lee"/></a>
<a href="https://github.com/ExerciseBook" title="Eric_Lian"><img src="https://avatars.githubusercontent.com/u/6327311?v=4" width="42;" alt="Eric_Lian"/></a>
<a href="https://github.com/little-weakduck" title="Little Weakduck"><img src="https://avatars.githubusercontent.com/u/83490374?v=4" width="42;" alt="Little Weakduck"/></a>
<a href="https://github.com/LeixinSun" title="Leixin Sun"><img src="https://avatars.githubusercontent.com/u/233723091?v=4" width="42;" alt="Leixin Sun"/></a>
<a href="https://github.com/misakayuuki" title="misa想变猫猫娘"><img src="https://avatars.githubusercontent.com/u/45150398?v=4" width="42;" alt="misa想变猫猫娘"/></a>
<a href="https://github.com/LaplaceYoung" title="CauchYoung"><img src="https://avatars.githubusercontent.com/u/219803883?v=4" width="42;" alt="CauchYoung"/></a><!--GAMFC-END-->

## 联系方式

- 项目主页：[Calendar by WHU.sb](https://calendar.whu.sb/)
- 问题反馈：[GitHub Issues](https://github.com/WHU-sb/WHU-sb-Calendar/issues)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=WHU-sb/WHU-sb-Calendar&type=Date)](https://star-history.com/#WHU-sb/WHU-sb-Calendar&Date)
