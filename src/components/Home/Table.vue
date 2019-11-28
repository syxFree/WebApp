<template>
    <div>
        <div class="tab">
            <div class="item" v-for="(item,index) in arr" :key="index" @click="search(item.type,index)">
                <h3 :class="[flag==index?active:'']">{{item.item1}}</h3>
                <p :class="[flag==index?avtiveSpan:'']">{{item.item2}}</p>
            </div>
        </div>
        <div class="goods">
            <div v-for="(item,index) in search(flag)" :key="index" class="divStyle" @click='toDetails(index)'>
                <div class="imgbg">
                    <img v-lazy='item.GoodsImage' :src="item.GoodsImage" alt="" class="imgStyle">
                </div>
                <div>
                    <h3 class="info">{{item.Title}}</h3>
                </div>
                <div class="footer">
                    <span class="price">¥{{item.SaleAmount}}</span>
                    <span class="amount">{{item.OrderNum}}人付款</span>
                    <span class="shenglue">…</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // list:[],
            arr:[
                {item1:'全部',item2:'猜你喜欢',type:0},
                {item1:'狗粮',item2:'猜你喜欢',type:1},
                {item1:'猫粮',item2:'猜你喜欢',type:2},
                {item1:'其他',item2:'猜你喜欢',type:3},
            ],
            flag:0,
            active:'active',
            avtiveSpan:'avtiveSpan',
        }
    },
    props:['list'],
    methods: {
      search(type){
        this.flag=type
        switch(type){
            case 1:type='狗粮'; break;
            case 2:type='猫粮';break;
            case 3:type="零食";break;
        }
        if(type==0){
            return this.list
        }
        else{
            return this.list.filter(item=>{
              if(item.ClassifyName==type){
                  return item
              }
          })
        }
      },
      toDetails(i){
          this.$router.push('/details/'+this.search(this.flag)[i].Id).catch(err => console.log(err));
        // 请求头发送 
        /*   this.$router.push({
              path:'/details',
              query:{
                  No:this.search(this.flag)[i].GoodsNo
              }
          }) */
      }
    },
}
</script>
<style lang="scss" scoped>
    image[lazy=loading] {
    width: 40px;
    height: 200px;
    margin: auto;
    }
    .tab{
        display: flex;
        width: 100%;
        height: 170px;
        padding: 0 15px 25px 15px;
        .item{
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h3{
                font-size: 40px;
                padding-bottom: 16px;
            }
            p{
                font-size: 30px;
            }
            .active{
                color: rgb(240,180,13)
            }
            .avtiveSpan{
                color: white!important;
                background-color: rgb(240,180,13);
                padding: 6px 25px;
                border-radius: 32px;
            }
        }
    }
    .goods{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        .divStyle {
            border-radius: 16px;
            width: 45%;
            background-color: white;
            margin-bottom: 20px;
            .imgbg{
                width:100%;height: 60%;
                border-radius: 16px;
                background-color: #eee;
                .imgStyle {
                width: 100%;height: 101%;
                border-radius: 32px;
            }
            }
            .info {
                -webkit-line-clamp: 2;
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                padding: 0 32px;
                margin: 32px 0;
                font-size: 32px;
            }
            .footer {
                padding: 0 0 32px 32px;
                position: relative;
                .amount {
                    margin-left: 20px;
                    padding-bottom: 32px;
                    font-size: 30px;
                }
                .price {
                    color: rgb(247, 193, 43);
                    font-size: 30px
                }
                  .shenglue {
                    position: absolute;
                    right: 4%;
                    top: 0;
                }
            }
        }
    }

    
</style>