<template>
  <div>
    <div id="on" @click="switched(true)" :class="{ active: value }">AÇIK</div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">
      KAPALI
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["value"],
  methods: {
    switched(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 50px;
  height: 20px;
  background-color: #eee;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: red;
}
</style>
