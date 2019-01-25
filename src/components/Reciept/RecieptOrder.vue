<template>
  <tr>
    <td>
      <input class="form-control" type="number" :value="order.quantity" @change="onQtyChange">
    </td>
    <td>{{ order.name }}</td>
    <td>${{ total }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  computed: {
    total() {
      return this.order.quantity * this.order.price;
    }
  },
  methods: {
    async onQtyChange(e) {
      const value = parseInt(e.target.value);
      const doesUpdate = await this.$store.dispatch("updateOrderQty", {
        id: this.order.id,
        value
      });
      if (!doesUpdate) {
        e.target.value = this.order.quantity;
      }
    }
  }
};
</script>
