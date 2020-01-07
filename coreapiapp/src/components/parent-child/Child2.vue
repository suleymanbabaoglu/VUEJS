<template>
  <div>
    <h1>{{ title }}</h1>

    <button @click="title='Değeri C2 Değiştirdi'">Değiştir</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
    export default {
        // props:["title"]
        props:{
            title:{
                type: [String,Array],
                default: "Default Değer: Merhaba Dünya!!"
            }
        },
        updated(){
            eventBus.changeTitle(this.title);
        }
    }
</script>

<style lang="scss" scoped>
div {
  border: 2px dashed black;
  margin: 5%;
  padding: 3%;
  background-color: blue;
}
button{
    border: 2px solid red;
    background-color: aqua
}
</style>
