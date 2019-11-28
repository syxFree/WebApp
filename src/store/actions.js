export default {
    addCart({commit,state}, payload) {
            //这里是用了结构赋值，commit相当于context.commit,可以异步的进行操作
            //传参的时候可以在后边跟一个参数，mutations中通过payload接收
            setTimeout(() => {
                commit('addCart', payload)
            }, 2000);

            //在调用的时候用this.$store.dispatch('addCart',num),区别于直接调用的this.$store.commit
        },
        //异步思想
        async actionA({
                commit
            }) {
                console.log("执行了actionA")
                commit('getA')
            },
            async actionB({
                dispatch,
                commit
            }) {
                console.log("执行了actionB")
                await dispatch('actionA')
                commit('getB')
            }

    //当有异步操作时，在这里执行，因为在mutations中的异步追踪不到
}