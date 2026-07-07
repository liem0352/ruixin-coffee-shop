# 瑞鑫咖啡店管理系统

> 作者：liem

## 项目简介

瑞鑫咖啡店管理系统是一个基于 Vue3 的移动端应用，提供咖啡点单、购物车、订单管理、Todo 待办等功能。项目采用 Vite 构建，使用 Pinia 进行状态管理，Vant 作为移动端 UI 组件库。

## 功能模块

### 首页展示（ShouyeView）
- 咖啡商品推荐
- 热门商品展示
- 营销活动 Banner

### 菜单点单（CaidanView）
- 商品分类浏览
- 商品详情查看
- 加入购物车
- 规格选择（杯型、温度、甜度）

### 购物车（GouwudaiView）
- 商品数量调整
- 金额计算
- 订单提交

### Todo 待办（TodoView）
- 任务添加与删除
- 任务状态切换
- 任务分类管理

### 个人中心（WodeView）
- 用户信息展示
- 历史订单查看
- 系统设置

### 关于（AboutView）
- 项目介绍
- 版本信息

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.5 | 前端框架 |
| Vite | 6 | 构建工具 |
| Pinia | - | 状态管理 |
| Vue Router | 4 | 路由管理 |
| Vant | 4 | 移动端 UI 组件库 |
| Axios | - | HTTP 请求 |
| Sass | - | CSS 预处理器 |

## 项目结构

```
├── src/
│   ├── api/                  # 接口请求封装
│   │   ├── axios.js          # Axios 实例配置
│   │   ├── config.js         # 接口配置
│   │   └── request.js        # 请求封装
│   ├── assets/               # 静态资源
│   │   ├── base.css          # 基础样式
│   │   ├── main.css          # 主样式
│   │   ├── logo.svg          # Logo
│   │   └── images/           # 图片资源
│   │       └── tab icons     # TabBar 图标
│   ├── components/           # 公共组件
│   │   ├── MyTabBar.vue      # 自定义 TabBar
│   │   ├── HelloWorld.vue    # 示例组件
│   │   ├── TheWelcome.vue    # 欢迎组件
│   │   ├── WelcomeItem.vue   # 欢迎项
│   │   └── icons/            # 图标组件
│   ├── router/               # 路由配置
│   │   └── index.js          # 路由表
│   ├── stores/               # Pinia 状态管理
│   │   └── counter.js        # 示例 Store
│   ├── views/                # 页面视图
│   │   ├── ShouyeView.vue    # 首页
│   │   ├── CaidanView.vue    # 菜单
│   │   ├── GouwudaiView.vue  # 购物车
│   │   ├── WodeView.vue      # 个人中心
│   │   ├── TodoView.vue      # Todo 待办
│   │   ├── AboutView.vue     # 关于
│   │   └── HomeView.vue      # Home
│   ├── App.vue               # 根组件
│   ├── main.js               # 入口文件
│   └── 01-vant组件库.vue      # Vant 组件示例
├── public/                   # 公共资源
│   └── favicon.ico           # 网站图标
├── index.html                # HTML 模板
├── vite.config.js            # Vite 配置
├── package.json              # 项目依赖
├── jsconfig.json             # JS 配置
├── .prettierrc.json          # Prettier 配置
├── .gitignore                # Git 忽略
└── .gitattributes            # Git 属性
```

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm 或 pnpm 或 yarn

### 安装依赖

```bash
npm install
```

或使用其他包管理器：

```bash
# 使用 pnpm
pnpm install

# 使用 yarn
yarn
```

### 开发运行

```bash
npm run dev
```

启动后访问 `http://localhost:5173`

### 打包构建

```bash
npm run build
```

构建产物位于 `dist/` 目录。

### 代码检查

```bash
npm run lint
```

## 自定义 TabBar

项目使用自定义 TabBar 组件（`MyTabBar.vue`），包含以下标签：

| 标签 | 图标 | 页面 |
|------|------|------|
| 首页 | `home` | `/shouye` |
| 菜单 | `menu` | `/caidan` |
| 购物袋 | `shopbag` | `/gouwudai` |
| 我的 | `my` | `/wode` |

## 设计特点

- **移动端优先**：针对移动端设备优化交互体验
- **Vant 组件库**：使用有赞 Vant 4 提供丰富的移动端组件
- **自定义 TabBar**：替代原生 TabBar，支持更灵活的样式与交互
- **Sass 预处理**：使用 Sass 编写可维护的样式代码
- **模块化结构**：API、组件、视图、状态分离，便于维护

## 许可证

MIT License
