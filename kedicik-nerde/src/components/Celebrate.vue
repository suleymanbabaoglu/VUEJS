<template>
    <div class="container">
        <h1>Tebrikler Bildiniz !!!</h1>
        <button @click="newGame">Yeni Oyun</button>
    </div>
</template>

<script>
    export default {
        methods:{
            newGame(){
                this.$emit("componentEvent","app-game-cards");
            }
        }
    }
</script>

<style scoped>
    .container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
    .container h1{
        text-align: center;
        font-size: 333%;
        color: green;
        opacity: .5;
    }

    .container button{
        width: 200px;
        background-color: #fff;
        color: darkred;
        border: 1px solid brown;
        height: 50px;
        border-radius: 5px;
        outline: none;
        transition: all .5s;
        cursor: pointer;
    }
    .container button:hover{
        background-color: darkgreen;
        color: #fff;
        transition: all .5s;
    }
</style>