import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//导入rem包 自适应生成rem
import 'lib-flexible'
//导入全局公共样式
import './assets/scss/index.scss'
//导入emelent框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
//按需导入 先在全局引入 在哪里使用就在哪里引用
 /* import {
   Swipe,
   SwipeItem,
 } from 'mint-ui';
 Vue.component(Swipe.name, Swipe);
 Vue.component(SwipeItem.name, SwipeItem);
import {
  InfiniteScroll
} from 'mint-ui';

Vue.use(InfiniteScroll); */

//布置全局导航守卫，进入每个路由之前修改相应的title信息
router.beforeEach((to, from, next) => {
  document.title=to.meta.title;
  next()
})


//导入axios 全局axios
import axios from 'axios'
window.axios=axios
Vue.config.productionTip = false
Vue.use(Mint)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
