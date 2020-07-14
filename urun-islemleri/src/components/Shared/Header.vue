<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link tag="a" to="/" class="navbar-brand"><a>Ürün Listesi</a></router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link tag="a" to="/product-purchase" class="nav-link" active-class="active"><a>Ürün İşlemleri</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link tag="a" to="/product-sell" class="nav-link" active-class="active"><a>Ürün Çıkışı</a></router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>