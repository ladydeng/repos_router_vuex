import vue from "vue"
import vuex from "vuex"

vue.use(vuex)

const store = new vuex.Store({
    state:{
        name:"",
        pwd:""
    },
    getters:{},
    mutations:{
        /**
         * saveUser函数，把传过来的用户信息存到state中
         * @param {state} state 状态
         * @param {payload} payload 整个对象都作为载荷传给 saveUser 函数
         */
        saveUser(state,payload){
            state.name = payload.name
            state.pwd = payload.pwd
        }
    },
    actions:{}
})

export default store