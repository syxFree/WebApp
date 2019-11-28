<template>
    <div>
        <headernav></headernav>
        <scroll class="wrap" ref="scroll" 
        :pull-up-load='true' 
        :probe-type='3' 
        @scroll="indexScroll"
        @pullingup='pullingup'>
            <swiper></swiper>
            <table-nav :list='list' ref="tabBar"></table-nav>
        </scroll>
        <top @click.native="toTop" v-if="toTopFlag"></top>
    </div>
</template>
<script>
import headernav from '../components/Home/HeadNav'
import Swiper from '../components/Swiper'
import TableNav from '../components/Home/Table'
import  Scroll from '../components/Scroll'
import Top from '../components/Top'
import {request} from '../network/request'
export default {
    data(){
         return {
            toTopFlag:false,
            list:[],
            pageNow:1,
            saveY:0
         }
    },
    created(){
        request({
            url:'/api/manage/GoodsList',
            params:{
                pageNo:this.pageNow,
                pageSize:30
            }
        }).then(res=>{
            this.list=res.data
            this.$store.commit('getList',this.list)
        }).catch(err=>console.log(err))
    },
    //记录离开时的位置
    activated(){
        this.$refs.scroll.scrollTo(0,this.saveY)
    },
    deactivated(){
        this.saveY=this.$refs.scroll.getScrollY()
    },
    methods: {
        //回到顶部
        toTop(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
        //回到顶部按钮显示隐藏
        indexScroll(position){
            if(position.y<-1000){
                this.toTopFlag=true
            }else{
                this.toTopFlag=false
            }
        },
        //下拉加载更多
        pullingup(){
            this.pageNow++
            request({
                url:'/api/manage/GoodsList',
                params:{
                    pageNo:this.pageNow,
                    pageSize:30
                }
            }).then(res=>{
                this.list.push(...res.data)
                //加载更多数据后，将数据再次传递到vuex
                this.$store.commit('getList',this.list)
            }).catch(err=>console.log(err))
            this.$refs.scroll.finishPullUp()
            // this.$refs.scroll.refresh()
        }
    },
    components:{
         headernav,
         Swiper,
         TableNav,
         Scroll,
         Top
    },
     //报证其他页面跳转到首页时flag为0
     beforeRouteEnter(to, from, next) {
        next(vm => {
          vm.$parent.flag=0
        })
      },
}
</script>
<style lang="scss" scoped>
    .wrap{
        height: 1190px;
        margin-top: 120px;
        // overflow: hidden;
        // overflow: auto;
    }
</style>