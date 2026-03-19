# 武汉大学 iCalendar 校历

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-ES%20Modules-green.svg)](https://nodejs.org/)
[![Build Status](https://github.com/ParaParty/whu-calendar/workflows/Build%20and%20Deploy%20ICS%20Calendar/badge.svg)](https://github.com/ParaParty/whu-calendar/actions)
[![Last commit](https://img.shields.io/github/last-commit/ParaParty/whu-calendar.svg)](https://github.com/ParaParty/whu-calendar/commits/master)
[![Issues](https://img.shields.io/github/issues/ParaParty/whu-calendar.svg)](https://github.com/ParaParty/whu-calendar/issues)
[![Stars](https://img.shields.io/github/stars/ParaParty/whu-calendar.svg)](https://github.com/ParaParty/whu-calendar/stargazers)

武汉大学校历数据集合，支持导入各种日历应用，轻松管理学校日程。

## 项目简介

本项目提供武汉大学官方校历的 iCalendar 格式数据，目前包含从 2021 年到 2025 年（持续更新中）的完整校历信息。所有数据均来源于武汉大学本科生院，确保信息准确。

> **注意**：本项目仅提供校历数据，不保证数据的实时性。请以武汉大学官方发布的[最新校历](https://uc.whu.edu.cn/xl.htm)为准。

### 主要特性

- **官方数据源**：基于武汉大学本科生院官方校历数据
- **多平台支持**：兼容 iOS、Android、Windows、macOS 等主流日历应用
- **自动更新**：支持在线订阅，校历更新时自动同步
- **多种格式**：提供单年度、合集、历史版本等多种下载选项
- **开源透明**：完全开源，可自定义和扩展

## 快速开始

### 在线使用

访问 [项目主页](https://whu-calendar.campuses.cn/) 直接下载所需的校历文件。

### 本地开发

1. **克隆项目**

```bash
git clone https://github.com/ParaParty/whu-calendar.git
cd whu-calendar
```

2. **安装依赖**

```bash
npm install
# 或使用 pnpm
pnpm install
```

3. **构建项目**

```bash
npm run build
```

4. **生成校历文件**
```bash
npm run generate
```

## 项目结构

```
whu-calendar/
├── assets/                 # 静态资源文件
├── dist/                   # 构建输出目录
│   ├── *.ics              # 各年度校历文件
│   ├── all.ics            # 完整合集
│   ├── legacy/            # 历史版本合集
│   └── years.json         # 年份信息
├── calendar_*.ts          # 各年度校历数据源
├── utils.ts               # 工具函数
├── build.mjs              # 构建脚本
├── index.html             # 项目主页
└── document.md            # 使用文档
```

## 使用方法

### Windows 系统

1. 下载所需的 `.ics` 文件
2. 右键点击文件
3. 选择"打开方式" → "日历"
4. 校历将自动导入到系统日历

### iOS 系统

1. 打开"设置" → "日历" → "账户"
2. 点击"添加账户" → "其他"
3. 选择"添加已订阅的日历"
4. 输入日历订阅地址

### Android 系统

1. 打开 Google 日历应用
2. 点击"+" → "从 URL 添加"
3. 输入日历订阅地址

### macOS 系统

1. 双击 `.ics` 文件
2. 系统将自动打开日历应用并导入

## 开发指南

### 添加新年度校历

1. 创建新的 `calendar_YYYY.ts` 文件
2. 参考现有文件格式添加校历数据
3. 运行 `npm run build` 重新构建

### 自定义校历数据

每个年度校历文件包含以下主要事件类型：

- 开学时间
- 期末考试
- 教学日程
- 假期安排
- 重要活动

### 构建流程

1. **TypeScript 编译**：将 `.ts` 文件编译为 `.js`
2. **生成 ICS 文件**：运行各年度脚本生成单独的 `.ics` 文件
3. **合并文件**：创建完整合集和历史版本
4. **生成元数据**：创建 `years.json` 供前端使用

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 致谢

- 感谢武汉大学本科生院提供官方校历数据
- 感谢所有贡献者的支持和建议

<!--GAMFC--><!--GAMFC-END-->

## 联系方式

- 项目主页：[WHU Calendar](https://whu-calendar.campuses.cn/)
- 问题反馈：[GitHub Issues](https://github.com/ParaParty/whu-calendar/issues)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ParaParty/whu-calendar&type=Date)](https://star-history.com/#ParaParty/whu-calendar&Date)
