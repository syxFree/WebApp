import axios from 'axios'
//方案1
// export function request(config,success,failure){
//     const instance1=axios.create({
//         baseURL:'10.110.5.26:30000',
//         timeout:5000
//     })
//     instance1(config).then(res=>{
//         console.log(res)
//         success(res)
//     }).catch(err=>{
//         console.log(err)
//         failure(err)
//     })
// }

//方案2
// export function request(config) {
//     return new Promise((resolve,reject)=>{
//         const instance1 = axios.create({
//             baseURL: '10.110.5.26:30000',
//             timeout: 5000
//         })
//         instance1(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     }) 
// }

//方案3
export function request(config) {
    //因为时封装好的axios 本来就是一个promise对象 这里不用自己再去写then,catch方法了
    const instance1 = axios.create({
        baseURL: 'https://ys.lumingx.com',
        timeout: 5000
    })

    //拦截器
    // 请求拦截
    // instance1.interceptors.request.use(config=>{
    //     //主要用于以下几点
    //     //检查config中一些信息是否符合服务器要求
    //     //发送网络请求后的一些动画，比如发送玩请求的正在加载
    //     //登录时，检查用户是否登陆，如果没有则转到登录页，重新让用户登录
    //     // console.log(config)
    //     console.log("来到了发送拦截")
    //     return config
    // },err=>{
    //     console.log(err)
    // })
    //响应拦截
    instance1.interceptors.response.use(res=>{
        //这里值返回前端需要的data数据
        // console.log("来到了拦截响应")
        return res.data
    },err=>{
        console.log(err)
    })
    return instance1(config)
}