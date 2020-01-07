<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    /* eslint-disable no-console */

    export default {
        data() {
            return {

            }
        },
        methods: {
            navigateToHome() {
                // this.$router.push("/"); //1. yöntem
                // this.$router.push({path: '/'}); //2. yöntem
               // this.$router.push({name: 'anasayfa'}); //3. yöntem
            }
        },
        /*computed: {
            getId() {
                return this.$route.params.id
            }
        }*/
        watch: {
            // eslint-disable-next-line no-unused-vars
            /*"$route"(to) {
                this.id = to.params.id;
            }*/
        }
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
        color: red;
    }
</style>
