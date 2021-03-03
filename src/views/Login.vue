<template>
  <div class="login">
    <h2>Login Page</h2>
    <div class="login">
      <input type="text" placeholder="用户名" ref="name" /><br><br>
      <input type="text" placeholder="密码" ref="pwd" /><br><br>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
      /**
       * 编程式导航：
       *点击login函数，进行路由跳转
       */
    login() {
      var name = this.$refs.name.value;
      var pwd = this.$refs.pwd.value;

      // 把用户登录信息存到sessionStorage中
      // sessionStorage.setItem("name", name);
      // sessionStorage.setItem("pwd", pwd);

      /** 使用对象风格提交
       * 把用户登录信息存到全局状态管理中
      */
      this.$store.commit("saveUser",{
        name,
        pwd
      })

      this.$router.push({
        name: "home",
        /**
         * 使用name与params，在浏览器地址栏的不会出现用户登录信息
         * 更大的保障用户安全
         */
        params: {
          name,
          pwd,
        },
      });
    },
  },
};
</script>

<style scoped>
.login {
  background: rgb(240, 131, 8);
  padding: 10px;
}

#name,
#pwd {
  width: 200px;
  height: 30px;
  margin-bottom: 5px;
  padding: 2px;
}
</style>