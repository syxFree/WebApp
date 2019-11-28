<template>
    <div>
        <mt-search class="search"
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
            <mt-cell class="searchMsg"
                v-for="(item,index) in result"
                :title="item.title"
                :key='index'
                :value="item.value">
            </mt-cell>
        </mt-search>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            value:'',
            result:[
                {title:'张三',value:'男生'},
                {title:'李四',value:'男生'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .mint-searchbar{
        height: 50px!important;
        background-color: $main!important;
    }
</style>