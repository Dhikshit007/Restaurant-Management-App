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
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.cuisine }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.rating }}</td>
        <td>
          <router-link :to="'/update/' + item.id">Update</router-link>
          <button v-on:click="deleterestaurant(item.id)">Delete</button>
        </td>
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
      username: "",
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleterestaurant(id) {
      let result = await axios.delete(
        "http://localhost:8000/restaurants/" + id,
      );
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.username = JSON.parse(user).username;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:8000/restaurants");
      console.warn(result);
      this.restaurant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
