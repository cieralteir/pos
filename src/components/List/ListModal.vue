<template>
  <div class="modal" style="display: block; background: rgba(0,0,0,0.5)">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" v-model="form.name" name="name" v-validate="'required|alpha_spaces'" class="form-control">
            <span v-if="errors.first('name')">{{ errors.first('name') }}</span>
          </div>
          <div class="form-group">
            <label>Price:</label>
            <input type="text" v-model="form.price" name="price" v-validate="'required|numeric|min_value:0'" class="form-control">
            <span v-if="errors.first('price')">{{ errors.first('price') }}</span>
          </div>
          <div class="form-group">
            <label>Quantity:</label>
            <input type="text" v-model="form.quantity" name="quantity" v-validate="'required|numeric|min_value:1'" class="form-control">
            <span v-if="errors.first('quantity')">{{ errors.first('quantity') }}</span>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" @click="close">Close</button>
          <button class="btn btn-success" @click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        price: 0,
        quantity: 1
      }
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit("addItem", this.form);
          this.close();
        }
      });
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>