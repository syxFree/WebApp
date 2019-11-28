import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Index=()=>import('./views/Index.vue')
const Search = () => import('./views/Search.vue')
const Login=()=>import('./views/Login.vue')
const Car=()=>import('./views/Car.vue')
const Order=()=>import('./views/Order.vue')
const Myself = () => import('./views/Myself.vue')
const Details = () => import('./views/Details.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass:'active', //精准定位 这个会具体到某一个class linkActiveClass是查询到一个路由下的所有
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/search',
      name:'search',
      component:Search,
      meta: {
        title: '搜索页'
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path:'/car',
      name:'car',
      component:Car,
      meta: {
        title: '购物车页'
      }
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      meta: {
        title: '订单页'
      }
    },
    {
      path:'/myself',
      name:'myself',
      component:Myself,
      meta: {
        title: '个人中心页'
      }
    },
     {
       path: '/details/:No',
       name: 'details',
       component: Details,
       meta: {
         title: '商品详情页'
       }
     }
  ]
})
