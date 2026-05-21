<template>
  <div>
    <img class="logo" src="../assets/resto-logo.jpg" alt="Vue logo" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="SignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async SignUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("user registered");
      } else {
        alert("something went wrong");
        localStorage.setItem("user-info", JSON.stringifyI(result.data));
      }
    },
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}
.register button {
  width: 320px;
  height: 40px;
  background-color: #236db7;
  color: white;
  border: 1px solid #236db7;
  border-radius: 5px;
  cursor: pointer;
}
</style>
