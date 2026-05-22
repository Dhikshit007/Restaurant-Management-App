<template>
  <div>
    <Header />
    <h1>Welcome to the Add Restaurant Page</h1>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "AddPage",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
