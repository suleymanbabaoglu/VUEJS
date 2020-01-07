<template>
    <div>
        <h1>USER {{$route.params.id}} DETAILS</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorem est eveniet explicabo fugiat, ipsam
            iure libero nulla possimus quas sapiente tempora vitae voluptatem. Atque in libero nesciunt quos soluta!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut consectetur, deserunt error fugit ipsam
            iusto minus odio recusandae rem, reprehenderit, ut voluptates. Asperiores, impedit iusto minima nulla
            suscipit voluptatum.
        </p>
        <hr>

        <router-link tag="button" :to="navigationLink" class="btn btn-primary">User
            Edit
        </router-link>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                navigationLink:
                    {
                        name: 'userEdit',
                        params:
                            {
                                id: this.$route.params.id
                            },
                        query:
                            {
                                name: 'Suleyman',
                                lastName: 'Babaoglu',
                                age: '26',
                                location: 'Bursa'
                            },
                        hash: '#data'
                    }
            }
        },
        beforeRouteEnter(to, from, next) {
           // COMPONENT BAZINDA KONTROL
            next(true);
        }
    }
</script>

<style scoped>

</style>