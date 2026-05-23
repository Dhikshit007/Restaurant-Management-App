<template>
  <div>
    <Header />
    <h1>Hello user, Welcome on Update restaurant Page</h1>
    <form class="add">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="cuisine"
        placeholder="Enter cuisine"
        v-model="restaurant.cuisine"
      />
      <input
        type="text"
        name="location"
        placeholder="Enter location"
        v-model="restaurant.location"
      />
      <input
        type="number"
        name="rating"
        placeholder="Enter rating"
        v-model="restaurant.rating"
      />
      <button type="button" v-on:click="updateRestaurant">
        Update Restaurant
      </button>
    </form>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateRestaurant",

  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        cuisine: "",
        location: "",
        rating: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      console.warn(this.restaurant);

      const result = await axios.put(
        "http://localhost:8000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          cuisine: this.restaurant.cuisine,
          location: this.restaurant.location,
          rating: this.restaurant.rating,
        },
      );

      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:8000/restaurants/" + this.$route.params.id,
    );
    //console.warn(this.$route.params.id)
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
