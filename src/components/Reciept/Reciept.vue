<template>
  <div class="row">
    <div class="col-md-12">
      <h2>Reciept</h2>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Quantity</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <reciept-order v-for="(order, index) in orders" :order="order" :key="index"></reciept-order>
        </tbody>
      </table>
      <h4>Total: <b>${{ total }}</b></h4>
    </div>
  </div>
</template>

<script>
import RecieptOrder from "./RecieptOrder";

export default {
  components: {
    RecieptOrder
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
    total() {
      return this.$store.getters.totalOrderPrice;
    }
  }
};
</script>