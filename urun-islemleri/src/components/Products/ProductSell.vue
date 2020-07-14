<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Ürün Çıkışı</h3>
                    <hr>
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <select class="form-control" v-model="selectedProduct" @change="selectProduct(selectedProduct)">
                            <option selected disabled>Select a Product</option>
                            <option :disabled="prod.count==0" v-for="(prod,index) in getProducts" :value="prod.key" :key="index">{{prod.title}}</option>
                        </select>
                    </div>
                    <transition name="fade" mode="out-in">
                        <div class="card mb-2 border border-danger" v-if="product!==null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="mb-3">
                                            <span class="badge badge-info">Stok : {{product.count}}</span>
                                            <span class="badge badge-primary">Fiyat : {{product.price}}</span>
                                        </div>
                                        <p class="border border-warning p-2 text-secondary">{{product.description}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="form-group">
                        <label>Adet</label>
                        <input type="number" class="form-control" placeholder="Ürün adetini giriniz.." v-model="productCount">
                    </div>
                    <hr>
                    <button class="btn btn-primary" @click="save" :disabled="isDisabled" >Kaydet</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                selectedProduct: "",
                product: null,
                productCount: null,
                buttonClicked: false
            }
        },
        methods: {
            selectProduct(prod) {
                this.product = this.$store.getters.getProduct(prod)[0];
            },
            save() {
                this.buttonClicked = true;
                let product = {
                    key: this.selectedProduct,
                    count: this.productCount >= this.product.count ? this.product.count : this.productCount
                }
                this.$store.dispatch("sellProduct", product);
            }
        },
        computed: {
            ...mapGetters(["getProducts"]),
            isDisabled() {
                if (this.productCount <= 0 || this.selectedProduct === "") {
                    return true;
                } else {
                    return false;
                }
            },
        },
        beforeRouteLeave(to, from, next) {
            if (this.selectedProduct == "" && this.productCount == null || this.buttonClicked) {
                next();
            } else {
                if (confirm("Kaydedilmemiş değişiklikler var. Yine de ayrılmak istiyor musunuz?")) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>

<style scoped>
    .border-danger {
        border-style: dashed !important;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .7s ease-out;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity .7s ease-out;
        opacity: 0;
    }
</style>