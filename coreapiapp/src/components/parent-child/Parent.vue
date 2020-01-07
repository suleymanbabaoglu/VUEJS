<template>
  <div id="parent">
    <h1>{{ bas }}</h1>
    <hr />
    <br />
    <first-child @titleDeger="bas= $event" :title="title1"></first-child>
    <hr />
    <second-child :title="title2"></second-child>
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";
import { eventBus } from '../../main';
export default {
  data() {
    return {
      bas: "PARENT",
      title1: "BİRİNCi BAŞLIK",
      title2: "İKİNCi BAŞLIK"
    };
  },
  components: {
    firstChild: Child1,
    secondChild: Child2
  },
  created(){
    eventBus.$on("titleDeger",(val)=>{
      this.bas=val
    })
  }
};
</script>

<style lang="scss" scoped>
    #parent{
    border: 2px dashed black;
    margin: 5%;
    padding: 3%;
    background-color: wheat;    
}
</style>
