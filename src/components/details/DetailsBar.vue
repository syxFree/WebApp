<template>
    <div class="cartBar">
        <div class="item" @click="toHome">
            <img src="@/assets/img/cartHome.png" alt="">
            <span>店铺</span>
        </div>
        <div class="item" @click="toCall">
            <img src="@/assets/img/wechat.png" alt="">
            <span>咨询</span>
        </div>
        <div class="item" @click="toCart">
            <img src="@/assets/img/cart.png" alt="">
            <span>购物车</span>
            <div class="circle-num">
                {{$store.state.cartList.length}}
            </div>
        </div>
        <div class="insertToCart" @click='insert'>
            <span>加入购物车</span>
        </div>
        <div class="buy" @click="buy">
            <span>立即购买</span>
        </div>
    </div>
</template>
<script>
//带括号的引入是引入js里的方法 是export导出的
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            count:2
        }
    },
    methods: {
        toHome(){
            this.$router.push('/')
        },
        toCall(){

        },
        toCart(){
            this.$router.push('/car')
        },
        insert(){
            Toast("加入购物车成功")
            this.$emit('addCart')
            
        },
        buy(){
            this.$router.push('/order')
        }
    },
}
</script>
<style lang="scss" scoped>
    .cartBar{
        width: 100%;height: 140px;
        background-color: white;
        position: fixed;
        bottom: 0;
        display: flex;
        flex: auto;
        .item{
            display: flex;
            width: 15%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            img{
                width: 55px;height: 55px;
            }
            .circle-num{
                width: 38px;height: 38px;
                border-radius: 50%;
                border: 2px solid rgb(204, 9, 9);
                color: rgb(204, 9, 9);
                position: absolute;
                top: 10px;left: 55px;
                background-color: white;
                text-align: center;
                line-height: 34px;
                z-index: 10;
            }
        }
        .insertToCart{
            width: 27.5%;
            line-height: 140px;
            font-size: 36px;
            color: white;
            text-align: center;
            background-color: #F7A734;
        }
        .buy{
            width: 27.5%;
            line-height: 140px;
            font-size: 36px;
            text-align: center;
            color: white;
            background-color:#FA752A;
        }
    }
</style>