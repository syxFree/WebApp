<template>
    <div class="details">
        <headcommon class="head">
            <div slot="left" @click="back"><img src="../assets/img/left.png" alt=""></div>
            <div slot="middle"><span>{{product[0].Brand}}</span></div>
        </headcommon>
        <scroll class="wrap">
            <swiper class="swiper">
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="(item,index) in swiperList" :key="index">
                        <img :src="item" :alt="index">
                    </mt-swipe-item>
                </mt-swipe>
            </swiper>
            <div class="price">
                <div class="left">
                    <h3>&yen;{{product[0].SaleAmount}}</h3>
                    <p>{{product[0].Title}}</p>
                </div>
                <div class="right">
                    <img src="../assets/img/share.png" alt="">
                    <span>分享</span>
                </div>
            </div>
            <div class="bg">
            </div>
            <!-- 推荐部分 -->
            <div class="recommend">
                <div class="head-recommend">
                    <span>{{product[0].store}}推荐</span>
                    <span>更多<img src="../assets/img/right.png" alt=""></span>
                </div>
                <div class="content-recommend">
                    <div class="item" v-for="(item,index) in product" :key="index">
                        <div class="item-img">
                            <img :src="item.GoodsImage" alt="">
                        </div>
                        <span>&yen;{{item.SaleAmount}}</span>
                        <p>{{item.Title}}</p>
                    </div>
                </div>
            </div>
            <!-- 商家地址 -->
            <div class="address">
                <img src="../assets/img/address.png" alt="">
                <!-- 商家地址：{{list[0].address}} -->
            </div>
            <div class="bigPic">
                <img :src="product[0].GoodsImage" alt="">
            </div>
        </scroll>
        <details-bar @addCart='addCart'></details-bar>
    </div>
</template>
<script>
import headcommon from '../components/HeaderCommon'
import Swiper from '../components/Swiper'
import DetailsBar from '../components/details/DetailsBar'
import Scroll from '../components/Scroll'
export default {
    name:'syx',
    data(){
        return {
            product:[],
            SwiperImg:[],
            id:'',
            goodsList:[],
            swiperList:[]
        }
    },
    created(){
        this.id=this.$route.params.No
        this.goodsList=this.$store.state.GoodsList
        this.product.push(this.goodsList.find(item=>item.Id==this.id))
        this.product.push(this.goodsList.find(item=>item.Id==parseInt(this.id)+1))
        this.product.push(this.goodsList.find(item=>item.Id==parseInt(this.id)+2))
        
        setTimeout(() => {
            this.product.forEach(item=>{
                this.swiperList.push(item.GoodsImage)
            })
        }, 500);
    },
    mounted(){
        
    },
    /* activated(){
        //得到传来的id
        this.id=this.$route.params.No
        this.product=this.list.find(item=>item.GoodsNo==this.id)
    }, */
    methods: {
        back(){
            this.$router.back()
        },
        addCart(){
            this.$store.commit('addCart',this.product[0])
            // this.$store.dispatch('addCart',product)
            // this.$store.dispatch('actionB')
        }
    },
    components:{
        headcommon,
        Swiper,
        DetailsBar,
        Scroll
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .details{
        background-color: #eee;
        .head{
            position: fixed;
            top: 0;
            z-index: 1000;
            background-color: white;
            .left{
                img{
                    width:40px;height: 40px;
                    margin-left: 20px;
                    margin-top: 30px;
                }
            }
            .middle{
                span{
                    font-size: 38px;
                    font-weight: 600
                }
            }
        }
        .wrap{
            height: 1150px;
            margin-top: 100px;
        }
        .swiper{
            // padding-top: 100px;
            height: 900px;
            box-shadow: 0 -1px 3px #ccc;
            img{
                width: 100%;height: 100%;
            }
        }
        .price{
            width: 100%;height: 150px;
            background-color: white;
            display: flex;
            justify-content: space-between; 
            .left{
                margin-left: 40px;
                h3{
                    color:$main;
                    font-size: 45px;
                    font-weight: 600;
                }
                p{
                    font-size: 32px;
                    width:500px;
                    @include no-wrap;
                }
            }
            .right{
                width: 80px;height: 110px;
                border-left: 2px solid #eee;
                padding-left: 15px;
                display: flex;
                flex-direction: column;
                margin-right: 40px;
                justify-content: center;
                img{
                    width: 60px;height: 60px;
                }
                span{
                    color: #2c2c2c;
                }
            }
        }
        .bg{
            width: 100%;height: 26px;
            background-color: #ddd;
        }
        .recommend{
            width: 100%;
            background-color: white;
            .head-recommend{
                width: 100%;height: 150px;
                position: relative;
                line-height: 150px;
                span:nth-of-type(1){
                    font-size: 32px;
                    margin-left: 20px;
                }
                span:nth-of-type(2){
                    font-size: 32px;
                    position: absolute;
                    display: inline-block;
                    width: 120px;
                    right: 10px;
                    img{
                        width: 40px;height: 40px;
                        position: absolute;
                        top: 52px;
                    }
                }
            }
            .content-recommend{
                display: flex;
                .item{
                    width: 33%;
                    padding-bottom: 20px;
                    .item-img{
                        width: 100%;
                        img{
                            width: 100%
                        }
                    }
                    span{
                        color: $main;
                        margin-left: 20px;
                    }
                    p{  
                        width: 100%;
                        padding:0 10px 0 20px;
                        @include no-wrap-multi(2)
                    }
                }
            }
        }
        .address{
            width: 100%;height: 140px;
            overflow: hidden;
            padding: 0 30px;
            background-color: #eee;
            line-height: 140px;
            letter-spacing: 1px;
            img{
                width: 30px;height: 30px;
            }
            
        }
        .bigPic{
            background-color: white;
            text-align: center;
            width: 100%;height: 800px;
            img{
                width: 90%;height: 100%;
            }
        }
    }
    
    
</style>