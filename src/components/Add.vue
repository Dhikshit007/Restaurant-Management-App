<template>
  <div>
    <Header />
    <h1>Welcome to the Add Restaurant Page</h1>
    <form class="add">
      <input
        type="text"
        name="name"
        placeholder="Enter restaurant name"
        v-model="Restaurant.name"
      />
      <input
        type="text"
        name="cuisine"
        placeholder="Enter cuisine type"
        v-model="Restaurant.cuisine"
      />
      <input
        type="text"
        name="location"
        placeholder="Enter location"
        v-model="Restaurant.location"
      />
      <input
        type="text"
        name="rating"
        placeholder="Enter rating"
        v-model="Restaurant.rating"
      />
      <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "AddPage",
  components: {
    Header,
  },
  data() {
    return {
      Restaurant: {
        name: "",
        cuisine: "",
        location: "",
        rating: "",
      },
    };
  },
  methods: {
    addRestaurant() {
      console.warn(this.Restaurant);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
