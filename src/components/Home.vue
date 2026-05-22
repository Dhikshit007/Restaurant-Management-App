<template>
  <div>
    <h1>Welcome to the Home Page</h1>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
