<template>
  <div class="row">
    <list-modal v-if="isAdding" @close="isAdding = false"></list-modal>
    <div class="col-md-12">
      <h2>
        Items
        <button class="btn btn-dark float-right" @click="isAdding = true">Add</button>
      </h2>
    </div>
    <div class="col-md-12">
      <div class="row">
        <list-item v-for="(item, index) in items" :index="index" :item="item" :key="index"></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import ListModal from "./ListModal";

export default {
  components: {
    ListItem,
    ListModal
  },
  data() {
    return {
      isAdding: false
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>