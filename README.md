<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="ruixin-coffee-shop 瑞鑫咖啡店管理系统,Vue3 + Vant 移动端点单系统">
</p>

# 瑞鑫咖啡店管理系统

一个基于 Vue3 的移动端咖啡点单应用。顾客可以浏览菜单、选择规格（杯型/温度/甜度）、加入购物车并提交订单；同时提供 Todo 待办与个人中心。采用 Vite 构建，Pinia 管理状态，Vant 4 提供 UI 组件，并使用自定义 TabBar 替代原生导航。

## 功能模块

| 视图 | 路由 | 说明 |
|------|------|------|
| 首页 | `/shouye` | 商品推荐、热门展示、活动 Banner |
| 菜单 | `/caidan` | 分类浏览、商品详情、规格选择、加入购物车 |
| 购物袋 | `/gouwudai` | 数量调整、金额计算、订单提交 |
| 我的 | `/wode` | 用户信息、历史订单、系统设置 |
| Todo | `/todo` | 任务增删、状态切换、分类管理 |
| 关于 | `/about` | 项目介绍、版本信息 |

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.5 | 前端框架 |
| Vite | 6 | 构建工具 |
| Pinia | - | 状态管理 |
| Vue Router | 4 | 路由 |
| Vant | 4 | 移动端 UI |
| Axios | - | HTTP 请求 |
| Sass | - | CSS 预处理 |

## 项目结构

```
├── src/
│   ├── api/{axios.js, config.js, request.js}     # 接口封装
│   ├── assets/{base.css, main.css, logo.svg, images/}
│   ├── components/
│   │   ├── MyTabBar.vue                          # 自定义 TabBar
│   │   └── icons/
│   ├── router/index.js                           # 路由表
│   ├── stores/counter.js                         # Pinia
│   ├── views/
│   │   ├── ShouyeView.vue    CaidanView.vue
│   │   ├── GouwudaiView.vue  WodeView.vue
│   │   └── TodoView.vue      AboutView.vue
│   ├── App.vue
│   └── main.js
├── vite.config.js · package.json · index.html
└── .prettierrc.json · .gitignore
```

## 快速开始

**环境**：Node.js >= 16.0.0，npm / pnpm / yarn

```bash
# 安装依赖
npm install

# 开发运行（访问 http://localhost:5173）
npm run dev

# 打包构建（产物在 dist/）
npm run build

# 代码检查
npm run lint
```

## 自定义 TabBar

`MyTabBar.vue` 替代原生 TabBar，支持更灵活的样式与交互：

| 标签 | 图标 | 页面 |
|------|------|------|
| 首页 | `home` | `/shouye` |
| 菜单 | `menu` | `/caidan` |
| 购物袋 | `shopbag` | `/gouwudai` |
| 我的 | `my` | `/wode` |

## 设计特点

- **移动端优先**：针对移动端设备优化交互体验
- **Vant 组件库**：使用有赞 Vant 4 提供丰富移动端组件
- **自定义 TabBar**：替代原生 TabBar，支持更灵活样式与交互
- **Sass 预处理**：可维护的样式代码
- **模块化结构**：API、组件、视图、状态分离

## 许可证

MIT License

---

<p align="center"><sub>作者 liem · 瑞鑫咖啡店管理系统</sub></p>
