<template>
  <div>
    <p>Your Order</p>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="item in order" :key="item.id">
            <td>
              {{ item.name }}
              <p>RM {{ item.price }}</p>
            </td>
            <td>
              <p>X {{ item.qty }}</p>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <p>TOTAL IS RM {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  name: "OrderPlaced",
  props: ["order", "totalPrice"],
  data() {
    return {
      orders: [],
      count: 1,
    };
  },
  methods: {
    index() {
      return this.count++;
    },
  },
  //update page title
  created() {
    this.$store.commit("updateTitle", "Order Placed");
  },
};
</script>

<style scoped></style>
