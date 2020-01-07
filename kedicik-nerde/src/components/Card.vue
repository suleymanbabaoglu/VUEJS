<template>
    <div class="card">
        <img :src="card.image" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ["card"],

    }
</script>

<style scoped>
    .card {
        width: 200px;
        height: 232px;
        border-radius: 10px;
        border: 1px solid #666;
        transition: box-shadow .5s;
        margin-left: 5px;
    }

    .card:hover {
        box-shadow: 0 5px 48px #666;
        transition: box-shadow .5s;
    }

    .card img {
        width: 100%;
        height: 100%;
    }
</style>