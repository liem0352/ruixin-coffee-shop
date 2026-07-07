import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //路由重定向
      name: 'home',
      redirect: '/shouye',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/shouye', //路由路径
      name: 'shouye', //路由别名
      component: () => import('../views/ShouyeView.vue'), //动态加载 当访问对应路由的湿乎乎显示该组件
    },
    {
      path: '/caidan', //路由路径
      name: 'caidan', //路由别名
      component: () => import('../views/CaidanView.vue'), //动态加载 当访问对应路由的湿乎乎显示该组件
    },
    {
      path: '/gouwudai', //路由路径
      name: 'gouwudai', //路由别名
      component: () => import('../views/GouwudaiView.vue'), //动态加载 当访问对应路由的湿乎乎显示该组件
    },
    {
      path: '/wode', //路由路径
      name: 'wode', //路由别名
      component: () => import('../views/WodeView.vue'), //动态加载 当访问对应路由的湿乎乎显示该组件
    },
  ],
})

export default router
