<template>
    <div id="app">
        <p>{{ mesaj | buyukYap | kucukYap }}</p>
        <!--        zincirleme filter eklenmesi yapılır. aynı veya benzer işlemler için son zincir geçerlidir.-->

        <!--        Basit filtrelemede filters lar kullanılabilir fakat arama tarzı işlemlerde computed yapı kullanılmalıdır-->

      <button @click="products.push('KAMERA')">ÜRÜN EKLE</button>
      <br><br>
        <input type="text" v-model="searchText" placeholder="Search...">
        <br/><br>
        <li v-for="(item,index) in filtered" :key="index">{{item}}</li>


        <hr>

        <FilterList></FilterList>
        <br>
        <br>
        <br>

    </div>
</template>

<script>
    import {productMixin} from "./productMixin";
    import FilterList from "./FilterList";

    export default {
        mixins: [productMixin],
        components: {
            FilterList
        }

    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
