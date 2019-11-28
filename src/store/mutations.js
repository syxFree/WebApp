export default{
        getList(state, payload) {
            state.GoodsList = payload
        },
        addCart(state, payload) {
            let oldProduct = null;
            //循环匹配新加入的对象是否已经存在
            for (let item of state.cartList) {
                if (item.Id == payload.Id) {
                    oldProduct = item
                }
            }
            //如果存在，则将存在的商品的数量加一，否则将新对象push到老数组中
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                payload.check=true
                state.cartList.push(payload)
            }
            /*  let product = state.cartList.find(item=>item.id===payload.id)
                if(product){

                }else{

                } */
        },
        //删除购物车内商品
        delCart(state,index){
            var newList=[]
            index.forEach(item=>{
                newList.push(state.cartList[item])
            })
            state.cartList=newList
            // state.cartList
        },
        //结算商品，将商品添加到状态管理中 方便订单页取
        orderGoods(state, orderGoods){
            state.orderGoods.push(orderGoods)   
        },
        //商品加减
        descreaseCount(state, payload) {
            if (state.cartList[payload].count <= 1) {
                return
            } else {
                state.cartList[payload].count--
            }
        },
        increaseCount(state, payload) {
            state.cartList[payload].count++
        },
        //单选按钮点击时切换选中和不选中的状态
        changeChecked(state,payload){
            state.cartList[payload].check=!state.cartList[payload].check
        },


        getA(state) {
            state.a++
            console.log(state.a)
        },
        getB(state) {
            state.b++
            console.log(state.b)
        }
}