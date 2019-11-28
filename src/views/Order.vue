<template>
    <div class="order">
        <header-common><div slot="middle">订单</div></header-common>
        <div class="content">
            <div class="order-item" v-for="(item,index) in orderGoods" :key="index">
                <div class="left">
                    <img :src="item[0].GoodsImage" alt="商品">
                    <span>待取货</span>
                </div>
                <div class="right">
                    <p>{{item[0].Title}}</p>
                    <p>&yen;{{item[0].SaleAmount}}</p>
                    <p>商家地址：苏州市工业园区文萃人才公寓4栋</p>
                    <div class="right-bottom">
                        <div class="left">
                            <span>下单时间：{{item[0].createDate}}</span>
                            <span>订单编号：{{item[0].GoodsNo}}</span>
                        </div>
                        <div class="right">
                            <span>联系卖家</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCommon from '../components/HeaderCommon'
export default {
    data(){
        return{
            orderGoods:''
        }
    },
    created(){
        this.orderGoods=this.$store.state.orderGoods
    },
    components:{
        HeaderCommon
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
.order{
    width: 100%;
    .content{
        width: 100%;height: 1100px;
        position: absolute;
        top: 100px;
        .order-item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 10px;
            .left{
                width: 20%;height: 100%;
                img{
                    width: 100%;
                }
            }
            .right{
                width: 75%;height: 100%;
                display: flex;
                flex-direction: column;
                p:nth-of-type(1){
                    @include no-wrap()
                }
                p:nth-of-type(2){
                    color: red;
                }
                p:nth-of-type(3){
                    color:#eee;
                }
            }
        }
    }

}
    
</style>