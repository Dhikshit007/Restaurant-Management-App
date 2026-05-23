<template>
  <div>
    <img class="logo" src="../assets/resto-logo.jpg" alt="Vue logo" />

    <h1>Login Page</h1>

    <div class="login">
      <input type="text" v-model="email" placeholder="Enter email" />

      <input type="password" v-model="password" placeholder="Enter password" />

      <button v-on:click="Login">Login</button>

      <p>
        <router-link to="/signup"> New User? Sign Up </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async Login() {
      let result = await axios.get(
        `http://localhost:8000/users?username=${this.username}&password=${this.password}`,
      );

      console.warn(result);

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));

        this.$router.push({ name: "HomePage" });
      } else {
        alert("Invalid Email or Password");
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
.logo {
  width: 100px;
}

.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.login button {
  width: 320px;
  height: 40px;
  border: 1px solid #236db7;
  background-color: #236db7;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.login p {
  margin-top: 20px;
}
</style>
