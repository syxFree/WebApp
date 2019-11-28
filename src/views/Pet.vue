<template>
    <div class="nav">
        <div class="top">
        <img class="butt" src="@/assets/images/qiehuanqizuo.png" alt="" @click="go">
        <p>宠物档案</p>
        </div>
        <ul id="cass">
            <li>
                宠物头像
                <img src="@/assets/images/105.jpg" alt="">
            </li>
            <li>
                宠物性别
                <span class="span">男孩子</span>
                <span class="span">女孩子</span>
            </li>
            <li>
                是否绝育
                <span class="span">已绝育</span>
                <span class="span">未绝育</span>
            </li>
            <li>
                宠物昵称
                <input type="text" name="" id="" placeholder="输入昵称">
            </li>
            <li>
                宠物生日
            </li>
            <li>
                宠物类别
            </li>
            <li>
                宠物品种
            </li>
        </ul>
        <button>保存档案</button>
    </div>
</template>
<script>
export default {
    methods: {
        go(){
            this.$router.push("/my")
        }
    },
}
</script>
<style scoped>
.nav{
    background-color: #F3F3F3;
    height: 100%;
}
.top{
    background-color: #fff;
    padding-bottom: 10px;
}
li>img{
    width: 100px;
    height: 100px;
    border-radius: 80px;
    float: right;
}
.butt{
    margin-top: 30px;
    width: 40px;
    height: 40px;
    margin-right: 90%;
}
p{
    height: 50px;
    text-align: center;
    margin-top: -50px;
    font-size: 35px !important;
    font-weight: bold;
}
#cass{
    width: 95%;
    margin: 20px auto;
    background-color: #fff;
}
#cass li{
    list-style: none;
    height: 130px;
    /* background-color: #fff; */
    font-size: 35px;
    color: grey;
    line-height: 85px;
    text-align: left;
    padding: 0 20px 10px 20px;
    border-bottom: 1px solid #EFEFEF;
    line-height: 100px;
    padding-top: 20px;
}
.span{
    border: 1px solid #EAEAEA;
    display: block;
    float: right;
    width: 120px;
    height: 70px;
    line-height: 70px;
    font-size: 30px;
    text-align: center;
    border-radius: 20px;
    margin-right: 10px;
    margin-top: 15px;
}
input{
    border: none;
    float: right;
    width: 150px;
    margin-top: 28px;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #DFDFDF;
    font-size: 35px;
}
button{
    width: 80%;
    height: 90px;
    background-color: #F2873B;
    color: #fff;
    font-size: 30px;
    border: none;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 180px;
}
</style>