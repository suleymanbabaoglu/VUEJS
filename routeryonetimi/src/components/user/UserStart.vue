<template>
    <div>
        <h1>USER STARTS</h1>

        <ul class="list-group">
            <li class="list-group-item"><router-link to="/user/10" tag="a" exact active-class="active" class="nav-link">User1</router-link></li>
            <li class="list-group-item"><router-link to="/user/15" tag="a" exact active-class="active" class="nav-link">User2</router-link></li>
            <li class="list-group-item"><router-link to="/user/23" tag="a" exact active-class="active" class="nav-link">User3</router-link></li>
            <li class="list-group-item"><router-link to="/user/15" tag="a" exact active-class="active" class="nav-link">User4</router-link></li>
        </ul>
        <hr>


    </div>
</template>

<script>
    export default {
        name: "UserStart"
    }
</script>

<style scoped>

</style>