<template>
    <div class="card"></div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .card{
        width: 200px;
        height: 232px;
        border-radius: 10px;
        border: 1px solid #666;
        transition: box-shadow .5s ;
        margin-left: 15px;
        background-image: url("../assets/vue-js-egitim-background.jpg") ;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        box-shadow: 0 9px 55px #666;
    }
    .card:first-child{
        margin-left: 0;
    }


</style>