<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "HeaderName",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style>
.nav {
  background-color: #2a3b4c;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #ffffff;
  padding: 14px 14px;
  text-decoration: none;
  font-size: 17px;
}
.nav a:hover {
  background-color: #ddd;
  color: black;
}
</style>
