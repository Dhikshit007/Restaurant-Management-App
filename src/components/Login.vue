<template>
  <div>
    <img class="logo" src="../assets/resto-logo.jpg" alt="Vue logo" />
    <h1>Login Page</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="Login">Login</button>
      <p>
        <router-link to="/signUp"> New User? Sign Up </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
};
</script>
