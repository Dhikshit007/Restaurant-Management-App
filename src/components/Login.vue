<template>
  <div>
    <img class="logo" src="../assets/resto-logo.jpg" alt="Restaurant Logo" />

    <h1>Login Page</h1>

    <div class="login">
      <input type="text" v-model="name" placeholder="Enter Username" />

      <input type="password" v-model="password" placeholder="Enter Password" />

      <button @click="login">Login</button>

      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>

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
      name: "",
      password: "",
      errorMessage: "",
    };
  },

  methods: {
    async login() {
      this.errorMessage = "";

      if (!this.name || !this.password) {
        this.errorMessage = "Please enter username and password";
        return;
      }

      try {
        const result = await axios.post("http://localhost:8000/login", {
          name: this.name,
          password: this.password,
        });

        localStorage.setItem("user-info", JSON.stringify(result.data));

        this.$router.push({
          name: "HomePage",
        });
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = "Invalid username or password";
          } else {
            this.errorMessage = error.response.data.message || "Login failed";
          }
        } else {
          this.errorMessage = "Unable to connect to server";
        }

        console.error(error);
      }
    },
  },

  mounted() {
    const user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({
        name: "HomePage",
      });
    }
  },
};
</script>

<style scoped>
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

.error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
