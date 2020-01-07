<template>
    <div>
        <h1>USER {{$route.params.id}} EDIT</h1>
        <h4>NAME: {{$route.query.name}}</h4>
        <h4>LASTNAME: {{$route.query.lastName}}</h4>
        <h4>AGE: {{$route.query.age}}</h4>
        <h4>LOCATION: {{$route.query.location}}</h4>
        <hr>


    </div>
</template>

<script>
    export default {
        name: "UserEdit"
    }
</script>

<style scoped>

</style>