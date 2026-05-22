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
        name="contact"
        placeholder="Enter location"
        v-model="restaurant.location"
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
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      console.warn(this.restaurant);

      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
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
      "http://localhost:3000/restaurant/" + this.$route.params.id,
    );
    //console.warn(this.$route.params.id)
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>
