<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 100px;
}
.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}
.register button,
.login button,
.add button {
  width: 320px;
  height: 40px;
  background-color: #236db7;
  color: white;
  border: 1px solid #236db7;
  border-radius: 5px;
  cursor: pointer;
}
</style>
