<template>
    <div class="headerNav">
        <input type="text" placeholder="输入商品名称" @click="search">
        <span @click='goToLogin'>登录</span>
    </div>
</template>
<script>
export default {
    methods: {
        goToLogin(){
            this.$router.push('/login')
        },
        search(){
            this.$router.push('/search')
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .headerNav{
        position: fixed;
        z-index: 100;
        top:0;
        width: 100%;
        height: 120px;
        color:white;
        background-color: $main;
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        input{
            width: 85%;height: 80px;
            border: none;
            border-radius: 50px;
            text-align: center;
            color: #222;
            font-size: 32px;
        }
        span{
            font-size:32px; 
        }
    }
</style>