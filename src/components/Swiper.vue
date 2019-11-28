<template>
    <div class="swiper">
        <slot>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in list" :key="index">
                    <img :src="item" :alt="index">
                </mt-swipe-item>
            </mt-swipe>
         </slot>

    </div>
</template>
<script>

export default {
   data(){
       return{
           list:[
               require("@/assets/img/swiper1.jpg"),
               require("@/assets/img/swiper2.jpg"),
               require("@/assets/img/swiper2.jpg"),
               require("@/assets/img/swiper4.png")]
       }
   }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/base.scss';
    .swiper{
        width: 100%;height: 400px;
        background-color: white;
        padding: 20px;
        img{
            width: 100%;height: 100%;
            border-radius: 20px
        }
    }
</style>