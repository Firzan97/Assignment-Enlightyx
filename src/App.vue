<template>
  <div>
    <v-app>
      <NavBar />
      <v-main> <Order /></v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Order from "./views/Order.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Order,
  },
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
</style>
