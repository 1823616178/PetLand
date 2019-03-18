<template>
  <div id="app">
    <Heard />
  </div>
</template>

<script>
import Heard from "./components/Nav.vue"
export default {
  name: 'app',
  components: {
    Heard
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
