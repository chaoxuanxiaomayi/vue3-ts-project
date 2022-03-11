import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const asyncRoutes :Array<RouteRecordRaw> =[
  {
    path:"/documentation",
    component:Layout,
    redirect:"/documentation/index",
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () => import(/* webpackChunkName: "documentation" */ '@/views/documentation/index.vue'),
        meta: {
          title: 'Documentation',
          icon: 'documentation'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
        meta: {
          title: 'Guide',
          icon: 'guide'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: 'System',
      icon: 'lock'
    },
    children: [
      {
        path: 'menu',
        component: () => import(/* webpackChunkName: "menu" */ '@/views/system/menu.vue'),
        meta: {
          title: 'Menu Management',
          icon: 'list'
        }
      },
      {
        path: 'role',
        component: () => import(/* webpackChunkName: "role" */ '@/views/system/role.vue'),
        meta: {
          title: 'Role Management',
          icon: 'message'
        }
      },
      {
        path: 'user',
        component: () => import(/* webpackChunkName: "user" */ '@/views/system/user.vue'),
        meta: {
          title: 'User Management',
          icon: 'email'
        }
      }
    ]
  },
  { // 外链路由
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com/',
        redirect: '/',
        meta: {
          title: 'External Link',
          icon: 'link'
        }
      }
    ]
  }
]


const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'


        }
      }
    ]
  }
]

export const routes = [
  ...constantRoutes, // 解构语法可能报波浪线tslib版本升级 没懂 暂时先不管
  ...asyncRoutes
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

