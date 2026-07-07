# 瑞鑫咖啡店管理系统

> 作者：liem

## 项目简介

瑞鑫咖啡店管理系统是一个基于 Vue3 的移动端应用，提供咖啡点单、购物车、订单管理等功能。

## 技术栈

- Vue 3.5
- Vite 6
- Pinia（状态管理）
- Vue Router 4
- Vant 4（移动端 UI 组件库）
- Axios（网络请求）
- Sass（样式预处理）

## 功能模块

- 首页展示：咖啡商品推荐
- 菜单点单：商品浏览与下单
- 购物车：订单管理
- 个人中心：用户信息
- Todo 待办：任务管理

## 项目结构

```
├── src/
│   ├── api/          # 接口请求封装
│   ├── assets/       # 静态资源
│   ├── components/   # 公共组件（含自定义TabBar）
│   ├── router/       # 路由配置
│   ├── stores/       # Pinia状态管理
│   └── views/        # 页面视图
├── index.html
├── vite.config.js
└── package.json
```

## 使用方式

```bash
npm install
npm run dev
```
