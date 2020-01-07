<template>
    <div>
        <h1>{{title}}</h1>

        <button @click="changeTitle">Parent Başlık Değiştir</button>
    </div>
</template>

<script>
import { eventBus } from "../../main";
    export default {
        // props: ["title"]
        props:{
            title:{
                type: String,
                required : true    
            }
        },
        data() {
            return {
               baslik: "C1 Tarafından Değiştirilen Başlık" 
            }
        },
        methods: {
            changeTitle(){
                eventBus.changeTitle(this.baslik)
            }
        },
        created(){
            eventBus.$on("titleDeger",(value)=>{
                this.title=value
            })
        }
    }
</script>

<style lang="scss" scoped>
button{
    border: 2px solid red;
    background-color: aqua
}
div{
    border: 2px dashed black;
    margin: 5%;
    padding: 3%;
    background-color: yellowgreen;    
}
</style>