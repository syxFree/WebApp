<template>
    <div>
        <header-common><div slot="middle">主人</div></header-common>
        <div class="all">
         <div class="card">
           <img class="head" src="@/assets/img/swiper1.jpg" alt="">
           <div class="info"> 
           <img src="" alt=""><span>江苏苏州</span>
           <img src="" alt=""><span>19971219</span>
           </div>
         </div>
           <ul>
        <li @click="go">宠物档案</li>
        <li>我的优惠券</li>
        <li>设置</li>
      </ul>
      <a href="#">退出登录</a>
      </div>  
    </div>
</template>

<script>
import HeaderCommon from '../components/HeaderCommon'
export default {
  name: "my",
  data(){
    return{
      
    }
  },
  components:{
    HeaderCommon
  },
  methods: {
    go(){
      this.$router.push('/chongwudangan')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";

</style>
<style scoped>
.all{
  background-color: #F6F1E4; 
  height: 1100px;width: 100%;
  position: absolute;
  top: 100px;
  padding-top: 15px;
}
.card{
  margin:0 auto;
  width: 650px;
  height: 350px;
  border-radius: 40px;
  background: linear-gradient(to top, #F9E4A7,#FBF7EA); 
  padding-top: 30px;
}
.head{
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 80px;
  border: 5px solid #FCE196;
  margin: 0 auto;
}
.info{
  padding-top: 5px;
  margin-top: 50px;
}
.info>img{
  vertical-align: middle;
  margin-left: 70px;
}
span{
  font-size: 30px;
  color: grey;
  line-height: 50px;
  vertical-align: middle;
  margin-right: 50px;
}
ul{
  margin-top: 80px;
}
ul li{
  list-style: none;
  height: 80px;
  margin-top: 30px;
  background-color: #fff;
  font-size: 30px;
  color: grey;
  line-height: 85px;
  text-align: left;
  padding-left: 50px;
}
a{
  text-decoration: underline;
  color: grey;
  font-size: 30px;
  display: block;
  margin-top: 150px;
  cursor: pointer;
}
</style>