<template>
    <div class="header">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <!-- <slot name="right">
                <span class="more"></span>
                <span class="picRight"></span>
            </slot> -->
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;height: 100px;
        display: flex;
        line-height: 100px;
        font-size: 36px;
        position: fixed;
        top: 0;
        background-color: white;
        z-index: 110;
        .left{
            width: 150px;
        }
        .middle{
            flex: 1;
            text-align: center;
        }
        .right{
            width: 150px;
            background-color: white;
           /*  display: flex;
            align-items: center;
            justify-content: center;
            .more{
                display: block;
                width: 50px;height: 50px;
                background: url(../assets/img/more.png);
                background-size: 100% 100%;
                position: absolute;
                right: 90px;
            }
            .picRight{
                display: block;
                width: 40px;height: 40px;
                background: url(../assets/img/circle.png);
                background-size: 100% 100%;
                position: absolute;
                right: 40px;
            } */
        }
       
        

    }
</style>