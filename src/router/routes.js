import Home from "../views/Home"
import Login from "../views/Login"
import HelloWorld from "../components/HelloWorld"

export default [
    {
        path: "/home",
        component: Home,
        name: "home",
        /**
         * beforeEnter路由独享守卫
         * @param {*} to 目标路由
         * @param {*} from 发生改变时的路由
         * @param {*} next 下一步将要执行的跳转
         */
        // beforeEnter: (to, from, next) => {
        //     console.log(from)

        //     /**
        //      * 发生改变时的路由对象中的path为/login
        //      * 且目标路由对象中params的用户名和密码不能为空,
        //      * 不满足条件则回到登录页面
        //      */
        //     if (from.path != "/login" || to.params.name == "" || to.params.pwd =="") {
        //         next("/login")
        //     }
        //     next()
        // }
    },
    {
        path: "/login",
        component: Login,
        name: "login"
    },
    {
        path: "/hello",
        component: HelloWorld,
        name: "hello"
    }
]