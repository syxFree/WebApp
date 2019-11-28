<template>
  <div id="app">
    <div class="footer" v-if="pageNow">
      <router-link to="/" tag="div" class="footerItem" @click.native="flag=0">
        <div :class="[flag==0?'p1ImgChange':'p1Img']"></div>
        <p :class="[flag==0?active:'']">首页</p>
      </router-link>
      <router-link to="/car" tag="div" class="footerItem" @click.native="flag=1">
        <div :class="[flag==1?'p2ImgChange':'p2Img']"></div>
        <P :class="[flag==1?active:'']">购物车</P>
      </router-link>
      <router-link to="/order" tag="div" class="footerItem" @click.native="flag=2">
        <div :class="[flag==2?'p3ImgChange':'p3Img']"></div>
        <p :class="[flag==2?active:'']">订单</p>
      </router-link>
      <router-link to="/myself" tag="div" class="footerItem" @click.native="flag=3">
       <div :class="[flag==3?'p4ImgChange':'p4Img']"></div>
        <p :class="[flag==3?active:'']">我的</p>
      </router-link>
    </div>
    
    <!-- keep-alive让组件不用频繁的创建销毁 -->
    
      <transition>
        <!-- <keep-alive exclude="syx"> -->
          <router-view/>
        <!-- </keep-alive> -->
      </transition>
    
  
  </div>
</template>
<script>
export default {
  data(){
    return {
      flag:0,
      pageNow:true,
      active:'active',
      p1Img:'p1Img',
      p1ImgChange:'p1ImgChange',
      p2Img:'p1Img',
      p2ImgChange:'p1ImgChange',
      p3Img:'p1Img',
      p3ImgChange:'p1ImgChange',
      p4Img:'p1Img',
      p4ImgChange:'p1ImgChange'
    }
  },
 
  watch:{
    //隐藏登录页的底部公共样式
    "$route.path":function(newVal){
        if(newVal=='/login' || newVal=='/search' || newVal.substr(0,8)=='/details'){
          this.pageNow=false
        }
        else{
          this.pageNow=true
        }
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

  .footer{
    height: 150px;
    display: flex;
    box-shadow: 0 -1px 2px #f4f4f4;
    position: fixed;
    z-index: 100;
    background-color: white;
    bottom: 0;
    left: 0;
    right: 0;
    .footerItem{
      width: 25%;height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      background-color: white;
      img{
        width: 38px;
      }
      .active{
        color: $main;
      }
      .p1Img{
          @include bg(url(./assets/img/home.png))
      }
      .p1ImgChange{
          @include bg(url(./assets/img/home1.png))
      }
      .p2Img{
          @include bg(url(./assets/img/car.png))
      }
      .p2ImgChange{
         @include bg(url(./assets/img/car1.png))
      }
      .p3Img{
          @include bg(url(./assets/img/order.png))
      }
      .p3ImgChange{
         @include bg(url(./assets/img/order1.png))
      }
      .p4Img{
          @include bg(url(./assets/img/myself.png))
      }
      .p4ImgChange{
         @include bg(url(./assets/img/myself1.png))
      }
    }
  }
  
</style>
