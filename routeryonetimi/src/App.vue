<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br>
                <router-view name="header-top"></router-view>
                <router-view></router-view>  <!--Routerdaki sayfaların buraya import edilmesini sağlar-->

            </div>
        </div>

    </div>
</template>

<script>


    export default {
        components: {

        }
    }
</script>
<style>
</style>
