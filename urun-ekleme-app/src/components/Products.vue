<template>
  <div v-if="productList.length > 0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <app-product v-for="(product, index) in productList" :key="index">  <!--Slota aktarılan kısım body kısım slot tagına aktarılır-->
        <img
          class="card-img-top"
          :src="product.selectedImage"
          :alt="product.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <small> <strong>Adet : </strong> {{ product.count }} </small>
          <br />
          <small> <strong>Fiyat : </strong> {{ product.price }} </small>
          <br />
          <small> <strong>Tutar : </strong> {{ product.totalPrice }} </small>
        </div>
      </app-product>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import { eventBus } from "../main";
export default {
  data() {
    return {
      productList: []
    };
  },
  components: {
    appProduct: Product
  },
  created() {
    eventBus.$on("addProduct", product => {
      if (this.productList.length < 10) {
        this.productList.push(product);
        eventBus.$emit("pCount", this.productList.length);
      } else {
        alert("Daha Fazla Ürün Ekleyemezsiniz !!!");
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
