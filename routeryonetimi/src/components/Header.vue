<template>
    <ul class="nav nav-pills">
        <li><router-link active-class="active" to="/" exact tag="a" class="nav-link">Home</router-link></li>  <!--exact tag'i, to içindeki route un tamamı yazılıysa active-class ı devreye sokar.-->
        <li><router-link to="/user" tag="a" active-class="active" class="nav-link">User</router-link></li>

    </ul>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>