<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h3>Animation ve Transition</h3>
                <select class="form-control" v-model="activeEffect">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>


                <br><br>

                <button class="btn btn-primary" @click="showChg()">Kutuyu {{showBtn ? "Göster" : "Gizle"}}</button>
                <br><br>
               <!-- <transition :name="activeEffect">
                    <div class="alert alert-success" v-if="show">Bu bir Kutudur</div>
                </transition>-->

            </div>

            <div class="col-md-6 col-md-offset-3">
               <!-- <h3>Animation ve Transition</h3>
                <br><br>
                <transition :name="activeEffect" type="animation">
                    <div class="alert alert-warning" v-show="show">Bu bir Kutudur</div>
                </transition>

                <hr>

                <transition
                enter-class=""
                enter-active-class="animated swing infinite"
                leave-class=""
                leave-active-class="animated shake" appear>
                    <div class="alert alert-danger" v-show="show">Bu bir Kutudur</div>
                </transition>


                <hr>
                <br>
-->

                <transition :name="activeEffect" mode="out-in">
                    <!--mode işlemi iki element arasındaki geçişin atlamalı olarak gerçekleşmesini engeller. birinci işlem out ise işlem bitmeden in işlemi gerçekleşmez-->
                    <div class="alert alert-warning" v-if="show" key="warning">Bu warning Kutudur</div>
                    <div class="alert alert-success" v-else key="success">Bu success Kutudur</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                show: false,
                showBtn: true,
                activeEffect: "fade"
            }
        },
        methods: {
            showChg() {
                this.show = !this.show;
                this.showBtn = !this.show;
            }
        },
        components: {},
        computed: {}
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }

    .slide-leave {
        opacity: 1;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
