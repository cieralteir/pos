<template>
  <div class="col-md-3" @click="addToReciept">
    <div style="padding: 20px; margin: 2px; background: #DDD">
      <p>{{ item.name }} ${{ item.price }}</p>
      <p>Qty: {{ quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    quantity() {
      return this.$store.getters.itemComputedQty(this.item.id);
    }
  },
  methods: {
    addToReciept() {
      if (this.quantity > 0) {
        this.$store.dispatch("addItemToOrders", this.item);
      }
    }
  }
};
</script>