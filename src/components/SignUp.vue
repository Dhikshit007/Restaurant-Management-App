<template>
  <div>
    <img class="logo" src="../assets/resto-logo.jpg" alt="Vue logo" />
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="password" v-model="password" placeholder="Enter password" />
      <button v-on:click="SignUp">Sign Up</button>
      <p>
        <router-link to="/login"> Already have an account? Login</router-link>
      </p>
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
      let result = await axios.post("http://localhost:8000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
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
<style></style>
