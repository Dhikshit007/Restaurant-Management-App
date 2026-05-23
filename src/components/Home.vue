<template>
  <div>
    <Header />

    <h1>Welcome {{ username }} to the Home Page</h1>

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
          <router-link :to="'/update/' + item.id"> Update </router-link>

          <button @click="deleterestaurant(item.id)">Delete</button>
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

  components: {
    Header,
  },

  data() {
    return {
      username: "",
      restaurant: [],
    };
  },

  methods: {
    async deleterestaurant(id) {
      const result = await axios.delete(
        `http://localhost:8000/restaurants/${id}`,
      );

      if (result.status === 200) {
        this.loadData();
      }
    },

    async loadData() {
      const user = localStorage.getItem("user-info");

      if (!user) {
        this.$router.push({ name: "SignUp" });
        return;
      }

      const userInfo = JSON.parse(user);

      this.username = userInfo.username || userInfo.name || "";

      const result = await axios.get("http://localhost:8000/restaurants");

      this.restaurant = result.data;
    },
  },

  mounted() {
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
