<template>
  <div>
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
    <div class="row">
      <div class="card offset-2 col-md-3">
        <div class="card-body tex-center d-flex align-items-center flex-column">
          <img
            height="128"
            class="img-responsive text-center mb-3"
            :src="
              product.selectedImage == null
                ? './assets/default.png'
                : product.selectedImage
            "
          />
          <input
            ref="file"
            type="file"
            style="display: none;"
            @change="onChange($event)"
            class="form-control"
          />
          <button
            class="btn btn-outline-secondary "
            type="button"
            @click="$refs.file.click()"
          >
            <!-- inputfile bölümünün butonu gizlendi onun yerine normal button eklendi.  -->
            Resim Seç
          </button>
        </div>
      </div>
      <div class="col-md-5">
        <div class="col-md-11 card">
          <div class="card-body">
            <div class="form-group">
              <label>Ürün Adı</label>
              <input
                type="text"
                class="form-control"
                placeholder="adını giriniz"
                v-model="product.title"
              />
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>Ürün Adeti</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="adetini giriniz"
                  v-model="product.count"
                />
              </div>
              <div class="form-group col-md-6">
                <label>Ürün Fiyatı</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="fiyatını giriniz"
                  v-model="product.price"
                />
              </div>
            </div>
            <button
              @click="addProduct()"
              class="btn btn-outline-info btn-block"
            >
              Ekle!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      product: {
        title: null,
        count: null,
        price: null,
        totalPrice: null,
        selectedImage: null
      }
    };
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0];
      this.product.selectedImage = URL.createObjectURL(file);
    },
    addProduct() {
      this.product.totalPrice = this.product.price * this.product.count;
      eventBus.$emit("addProduct", this.product);
      this.product = {
        title: null,
        count: null,
        price: null,
        totalPrice: null,
        selectedImage: null
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
