<template>
    <div class="container">
        <div class="loading" :style="{isLoading}">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Ürün İşlemleri</h3>
                    <hr>
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <input v-model="product.title" type="text" class="form-control" placeholder="Ürün adını giriniz..">
                    </div>
                    <div class="form-group">
                        <label>Adet</label>
                        <input v-model="product.count" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
                    </div>
                    <div class="form-group">
                        <label>Fiyat</label>
                        <input v-model="product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
                    </div>
                    <div class="form-group">
                        <label>Açıklama</label>
                        <textarea v-model="product.description" cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                                  class="form-control"></textarea>
                    </div>
                    <hr>
                    <button @click="saveProduct" class="btn btn-primary" :disabled="isDisabled">Kaydet</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {
                    title: "",
                    count: null,
                    price: null,
                    description: ""
                },
                buttonClicked: false
            }
        },
        methods: {
            saveProduct() {
                this.buttonClicked = true;
                this.$store.dispatch("saveProduct", this.product);
            }
        },
        computed: {
            isDisabled() {
                if (this.product.title == "" || this.product.description == "" || this.product.count == null || this.product.price == null) {
                    return true;
                } else {
                    return false;
                }
            },
            isLoading(){
                if(this.buttonClicked){
                    return{
                        display: "block"
                    }
                }else{
                    return {
                        display: "none"
                    }
                }
            }
        },
        beforeRouteLeave(to,from,next){
            if (this.product.title == "" && this.product.description == "" && this.product.count == null && this.product.price == null || this.buttonClicked){
                next();
            }else{
                if(confirm("Kaydedilmemiş değişiklikler var. Yine de ayrılmak istiyor musunuz?")){
                    next();
                }else{
                    next(false);
                }
            }
        }
    }
</script>

<style scoped>

</style>