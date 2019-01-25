<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-4">
        <reciept></reciept>
      </div>
      <div class="col-md-8">
        <list></list>
      </div>
    </div>
  </div>
</template>

<script>
import Reciept from './components/Reciept/Reciept.vue'
import List from './components/List/List.vue';

export default {
  name: 'app',
  components: {
    Reciept,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
