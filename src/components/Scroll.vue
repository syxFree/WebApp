<template>
    <div class="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        //返回顶部
        scrollTo(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        },
        //下拉加载更多，将方法传给父组件 用延时函数，来防抖，防止一直触发
        finishPullUp(){
            setTimeout(() => {
                this.scroll.finishPullUp()
            }, 2000);
        },
        //记录离开时的位置
        getScrollY(){
            return this.scroll?this.scroll.y:0
        }
    },
    mounted(){
        this.scroll=new BScroll('.wrap',{
            // 滚动过程中侦测的类型
            //0，1不侦测实时位置 2不侦测手指离开后的惯性滑动的位置 3 侦测一切位置
            probetype:this.probeType,
            click:true,  //滚动内部点击事件可以使用
            pullUpLoad:this.pullUpLoad  //上拉加载更多
        })
        this.scroll.on('scroll',(position)=>{
            //子组件向父组件传值
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingup')
        })
    }
}
</script>
<style lang="scss" scoped>
</style>