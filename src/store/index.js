import Vue from 'vue'
import Vuex from 'vuex'
//页面持久化，刷新页面数据不会丢失
import presistedState from 'vuex-persistedstate'
 
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const store= new Vuex.Store({
    //配置插件 保持活性
    plugins: [presistedState({
        storage: window.sessionStorage
    })],
    state:{
        //商品列表
        GoodsList:[],
        //购物车列表
        cartList:[],
        //订单页列表
        orderGoods:[],
        a:1,
        b:2
    },
    mutations,
    actions,
    //处理一些数据后返回的值，方便页面使用
    getters:{
        //比如多个地方需要用到一个处理后的值，如果在每个组件都写相应的方法的话，无疑是浪费时间的，所以用getters中定义的方法返回一个值，方便你多处的调用
    },
    modules:{

    }
 })
 export default store