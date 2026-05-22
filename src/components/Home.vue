<template>
  <div>
    <Header />
    <h1>Welcome {{ name }} to the Home Page</h1>
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Cuisine</td>
        <td>Location</td>
        <td>Rating</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cuisine }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.rating }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/restaurant");
    console.warn(result);
    this.restaurant = result.data;
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
