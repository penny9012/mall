import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)

// 懒加载
const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const profile = () => import('../views/profile/profile')
const shopcart = () => import('../views/shopcart/shopcart')

// 2.创建路由对象
const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/shopcart',
    component: shopcart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出
export default router
