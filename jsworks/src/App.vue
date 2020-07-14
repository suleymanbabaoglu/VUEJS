<template>
  <div id="app">    
    <input v-model="value" />
    <button @click="check(value)">Yaz</button>
  </div>
</template>

<script>
/* eslint-disable */
import Product from "./Product";

export default { 
  data() {
    return {
      value: 0
    };
  },
  methods: {  
  
  }, 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
