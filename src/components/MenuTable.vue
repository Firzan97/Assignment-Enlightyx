<template>
  <v-row no-gutters justify="center">
    <v-col v-for="n in 1" :key="n" cols="12" sm="6">
      <v-simple-table v-if="checkout == false">
        <template v-slot:default>
          <tbody>
            <tr v-for="item in menu" :key="item.id">
              <td>
                {{ item.id }}
              </td>
              <td></td>
              <td>
                {{ item.name }}
                <p>RM {{ item.price }}</p>
              </td>
              <td>
                <v-btn @click="remove(item.id - 1)" depressed color="primary">
                  -
                </v-btn>
              </td>
              <td>{{ quantity[item.id - 1] }}</td>
              <td>
                <v-btn @click="add(item.id - 1)" depressed color="primary">
                  +
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <OrderPlaced
        v-if="checkout == true"
        :order="order"
        :totalPrice="totalPrice"
      />
      <Button v-if="checkout == true" title="Back" :operation="backToMenu" />
      <Button v-if="checkout == true" title="Done" :operation="checkoutMenu" />
      <Button v-else title=" Check Out" :operation="addToCart" />
      <p>{{ orderStatus }}</p>
    </v-col>
  </v-row>
</template>

<script>
const axios = require("axios");
import OrderPlaced from "./OrderPlaced.vue";
import Button from "./Button.vue";
export default {
  name: "MenuTable",
  components: { OrderPlaced, Button },
  data() {
    return {
      dialog: false,
      menu: [],
      quantity: [0, 0, 0, 0, 0, 0, 0, 0],
      count: [0, 0, 0, 0, 0, 0, 0, 0],
      order: [],
      checkout: false,
      totalPrice: 0.0,
      orderStatus: "",
    };
  },
  //execute get menu everytime the component loaded
  created() {
    this.getMenu();
  },
  methods: {
    //update page title
    backToMenu() {
      this.orderStatus = "";
      this.checkout = false;
      this.$store.commit("updateTitle", "Our Restaurant");
    },

    //validation to make sure the user cannot checkout if no item selected
    updateCheckout() {
      if (this.order.length != 0) {
        this.checkout = true;
      } else {
        this.orderStatus = "Please select at least 1 menu";
      }
    },
    //getList of menu from Enlightyx API
    getMenu() {
      axios
        .get("https://staging.enlightyx.io/hiring/api/menu")
        .then((response) => {
          // handle success
          this.menu = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    //add quantity for every menu
    add(id) {
      this.count[id]++;
      this.quantity.splice(id, 1, this.count[id]);
    },
    //remove quantity for every menu
    remove(id) {
      //check if the last quantity is 0 then stop remove
      if (this.count[id] >= 1) {
        this.count[id]--;
        this.quantity.splice(id, 1, this.count[id]);
      }
    },

    //Send selected menu to cart
    addToCart() {
      var data;
      this.order = [];
      for (var x = 0; x < this.quantity.length; x++) {
        if (this.quantity[x] > 0) {
          data = {
            id: this.menu[x].id,
            qty: this.quantity[x],
            name: this.menu[x].name,
            price: this.menu[x].price,
          };
          this.totalPrice =
            this.totalPrice + this.menu[x].price * this.quantity[x];
          this.order.push(data);
        }
      }
      this.orderStatus = "";
      this.updateCheckout();
    },

    //checkout item/ send data to Enlightyx API
    checkoutMenu() {
      var data = [];
      //remove unnecessary data such name,price
      for (var x = 0; x < this.order.length; x++) {
        data.push({
          id: this.order[x].id,
          qty: this.order[x].qty,
        });
      }
      console.log(data);
      axios
        .post("https://staging.enlightyx.io/hiring/api/order", data)
        .then((response) => {
          // handle success
          this.orderStatus = "We have received your order.Thank you!";
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
