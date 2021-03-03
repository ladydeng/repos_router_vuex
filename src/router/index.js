import vue from "vue"
import vueRouter from "vue-router"
import routes from "./routes"

/**
 * 解决在没有输入用户名和密码的情况下
 * 直接点击登录按钮的报错
 */
const routerPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

/**
 * 解决在导航守卫中，获取不到store
 */
import store from "../store"

vue.use(vueRouter)

//创建router实例,传routes配置
const router = new vueRouter({
    routes,//相当于routes:routes
    mode: "history"
})

/**
 * 如果sessionStorage的name与pwd都为空，或者目标路由不为/login的话
 * 跳转到登录页
 */
// router.beforeEach((to, from, next) => {
//     if( (sessionStorage.name && sessionStorage.pwd) || to.path == "/login"){
//         next()
//     }else{
//         next("/login")
//     }
//     next()
// })


router.beforeEach((to, from, next) => {
    if ((store.state.name && store.state.pwd) || to.path == "/login") {
        next()
    } else {
        next("/login")
    }
    next()
})


export default router