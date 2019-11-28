<template>
    <div class="login">
        <div class="header">
            <span class="back" @click='back'><img src="../assets/img/left.png" alt=""></span>
            <span>注册登录</span>
        </div>
        <div class="middle">
            <img src="../assets/img/dog.jpeg" alt="">
        </div>
        <div class="form">
            <form action="/" method="post">
                <input type="text" name="phone" v-model="phone" placeholder="请输入手机号">
                <input type="password" name="password" v-model="password" autocomplete placeholder="请输入密码">
                <input type="button" value="登录" @click='toHome'>
            </form>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            phone:'',
            password:''
        }
    },
    
    methods: {
        
        back(){
            this.$router.back()
        },
        toHome(){
            if(this.phone!=''&&this.password!=''){
                 this.$router.push('/')
            }
            else{
              Toast({
                message: '请输入账号或密码',
                position: 'bottom',
                duration: 2000
                });
           }
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
.login{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1111;
    background-color: white;
}
    .header{
        width: 100%;height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 38px;
        .back{
            position: absolute;
            left: 10px;
            top:10px;
            img{
                width: 40px;
            }
        }
    }
    .middle{
        width:100%;height: 500px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 60%;
            border-radius: 50%;
        }
    }
    .form{
        width: 100%;
        height: auto;
        padding: 0 30px;
        text-align: center;
        font-size: 32px;
        input{
            width: 80%;height: 120px;
            border: none;
            border-bottom: 2px solid #eee;
            outline: none;
            &:nth-of-type(3){
                margin-top: 80px;
                border-radius: 120px;
                background-color: $main;
            }
        }
        .footer{
            display: none;
        }
    }
</style>