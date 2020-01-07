<template>
    <ul class="nav nav-pills">
        <li><router-link active-class="active" to="/" exact tag="a" class="nav-link">Home</router-link></li>
        <li><router-link to="/user" tag="a" exact active-class="active" class="nav-link">User</router-link></li>

    </ul>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>