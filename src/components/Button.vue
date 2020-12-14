<template>
  <v-btn @click="operation" class="mr-10 mt-15" depressed color="primary" dark>
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: ["operation", "title"],
};
</script>

<style scoped></style>
