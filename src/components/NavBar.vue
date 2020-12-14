<template>
  <v-main>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-badge v-if="title == 'Order Placed'" color="pink" dot>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </v-main>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  created() {},
  //keep track the title changes
  computed: {
    title: function() {
      return this.$store.getters.pageTitle;
    },
  },
};
</script>

<style scoped></style>
