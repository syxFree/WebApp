<template>
    <div>
        <headcommon class="head"><div slot="middle">购物车</div></headcommon>
        <div class="content">
            <div class="insert" v-if="flag">
                <p>购物车空空如也~</p>
                <input type="button" value="前往添加商品" @click='toHome'>
            </div>
            <div class="goods">
                <scroll class="wrap">
                    <div class="goods-head" v-if="!flag">
                        <span>共{{length}}件商品</span>
                        <span @click="del">删除</span>
                    </div>
                    <div class="goods-info" v-for="(item,index) in list" :key="index">
                        <div class="item">
                            <div 
                            :class="[checkbox[index]?'checkboxActive':'checkbox']"
                            @click="changeChecked(index)">
                            </div>
                            <div class="img">
                                <img :src="item.GoodsImage" alt="商品">
                            </div>
                            <div class="info">
                                <p>{{item.Title}}</p>
                                <p>规格：<span>2.5kg</span></p>
                                <p>单价：<span>&yen;{{item.SaleAmount}}</span></p>
                            </div>
                            <div class="count">
                                <span @click="decrease(index)">-</span>
                                <span ref="length">{{item.count}}</span>
                                <span @click="increase(index)">+</span>
                            </div>
                        </div>
                    </div>
                </scroll>
                <div class="goods-foot" v-if="!flag">
                    <div 
                    :class="[checkCount==checkCountTrue?'checkboxActive':'checkbox']"
                    @click="checkAllChanged"></div>&nbsp;全选
                    <span>合计：</span>
                    <span>&yen;{{countPrice}}</span>
                    <div 
                    :class="[countLength==0?'btn':'btnActive']"
                    @click='toOrder'>去结算（{{countLength}}）</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headcommon from '../components/HeaderCommon'
import Scroll from '../components/Scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            flag:false,
            count:'0',
            check:[],
            list:[],
            checkbox:[]
        }
    },
    created(){
        //将商品详情页的数据加载到购物车中
        //引用了mapStore之后，相当于本页面直接就有了vuex中的state，所以可以直接调用
        this.list=this.$store.state.cartList
        this.list.forEach(item=>{
            this.checkbox.push(item.check)
        })
    },
    mounted(){
        //根据购物车商品数量改变页面布局
        if(this.length==0){
            this.flag=true
        }else{
            this.flag=false
        }
    },
    methods: {
        toHome(){
            this.$router.push('/')
        },
        //点击删除相应的商品
        del(){
            var delList=[]
            this.checkbox.forEach((item,index)=>{
                if(item!=true){
                    delList.push(index)
                }
            })
            console.log(delList.length)
            if(delList.length==this.length){
                alert("请先选择要删除的商品")
            }else{
                var confirm1=confirm("确定删除吗？")
                if(confirm1){
                    this.$store.commit('delCart',delList)
                    this.list=this.$store.state.cartList
                    if(this.length==0){
                        this.flag=false;
                    }
                }else{
                    return
                }
            }
            
           
        },
        //点击结算商品
        toOrder(){
            var orderList=[]
            var orderGoods=[]
            this.checkbox.forEach((item,index)=>{
                if(item==true){
                    orderList.push(index)
                }
            })
            orderList.forEach((item)=>{
                orderGoods.push(this.list[item])
            })
            this.$store.commit('orderGoods',orderGoods)
            this.del()
        },
        ...mapMutations({
            //写成触发模式好像不用传index，只要上边写了index,就会直接传到mutations
            decrease:'descreaseCount',
            increase:'increaseCount',
            // changeChecked:'changeChecked'
        }),
        changeChecked(index){
            this.$store.commit('changeChecked',index)
            const checkbox1=[]
            this.list.forEach(item=>{
                checkbox1.push(item.check)
            })
            this.checkbox=checkbox1
        },
        //全选框的选中和不选中切换
        checkAllChanged(){
            if(this.checkCount==this.checkCountTrue){
                var checkboxA=[]
                this.checkbox.forEach(()=>{
                    checkboxA.push(false)
                    this.checkbox=checkboxA
                })
            }else{
                var checkboxB=[]
                this.checkbox.forEach(()=>{
                    checkboxB.push(true)
                    this.checkbox=checkboxB
                })
            }
        }
    },
    components:{
        headcommon,
        Scroll
    },
    computed:{
        ...mapState(['a']),
        length(){
            //计算商品种类的个数,头部的
            return this.list.length
        },
        countLength(){
            // 计算总件数
            let a=0
            this.checkbox.forEach((item,i)=>{
                if(item==true){
                    a++
                }
            })
            return a
        },
        countPrice(){
            let price=0
            this.checkbox.forEach((item,i)=>{
                if(item==true){
                    price+=this.list[i].SaleAmount*this.list[i].count
                }
            })
            return price
        },
        //全选按钮的设置
        checkCount(){
            return this.checkbox.length
        },
        checkCountTrue(){
            var count=0
            this.checkbox.forEach(item=>{
                if(item==true){
                    count++
                }
            })
            return count
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
          vm.$parent.flag=1
        })
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .content{
        width: 100%;height: 1000px;
        overflow: auto;
        position: absolute;
        top: 100px;
        background-color: #eee;
        // margin-top: 100px;
        .insert{
            width: 100%;height: 400px;
            text-align: center;
            font-size: 32px;
            position: absolute;
            top: 400px;
            input{
                width:550px;height: 100px;
                background-color: #eee;
                border: 2px solid $deepyellow;
                color: $deepyellow;
                border-radius: 20px;
                font-size: 40px;
                margin-top: 20px
            }
        }
        .goods{
            width: 100%;
            // overflow: auto;
            line-height: 60px;
             .checkbox{
                width: 50px;height: 50px;
                background-color: white;
                border: 1px solid #ccc;
                border-radius: 50%;
                display: flex;
                align-items: center;
            }
            .checkboxActive{
                width: 50px;height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                background:url(../assets/img/checked.png);
                background-size: 100%;
            }
            .wrap{
                height: 900px;
                .goods-head{
                    width: 100%;
                    height: 60px;
                    position: relative;
                    z-index: 100;
                    font-size: 28px;
                    span:nth-child(1){
                        position: absolute;
                        left: 40px;
                    }
                    span:nth-child(2){
                        position: absolute;
                        right:60px;
                    }
                }
                .goods-info{
                    width: 100%;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    .item{
                        width: 90%;
                        height: 300px;
                        border-bottom: 1px solid #eee;
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 auto;
                        align-items: center;
                        position: relative;
                       
                        .img{
                            width: 150px;height: 90%;
                            display: flex;
                            justify-content: center;
                            img{
                                width: 80%;height: 90%;
                                margin: 0 auto;
                            }
                        }
                        .info{
                            width: 460px;height: 90%;
                            font-size: 32px;
                            margin-left: 10px;
                            padding: 10px;
                            p:nth-child(1){
                                @include no-wrap-multi(2)
                            }
                            p:nth-child(3){
                                span{
                                    color: $main;
                                }
                            }
                        }
                        .count{
                            position: absolute;
                            right: 0;
                            bottom: 40px;
                            span{
                                display: block;
                                float: left;
                                width: 60px;height: 60px;
                                text-align: center;
                                line-height: 60px;
                                border:1px solid #eee;
                                font-size: 30px;
                            }
                        }
                    }
                }
            }
            .goods-foot{
                width: 100%;height: 100px;
                background-color: white;
                padding-left: 30px;
                position: fixed;
                bottom: 150px;
                display: flex;
                align-items: center;
                font-size: 32px;
                input[type='checkbox']{
                    width: 50px;height: 50px;
                    margin-left: 30px;
                }
                span:nth-of-type(1){
                    margin-left: 20px;
                }
                span:nth-of-type(2){
                    color: $main;
                }
                .btn{
                    @include btn;
                    background-color: #ccc;
                }
                .btnActive{
                    @include btn;
                    background-color: $main;
                }
            }
 
        }
    }
</style>