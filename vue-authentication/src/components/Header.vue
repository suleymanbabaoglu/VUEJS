<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <a class="navbar-brand" href="#">Auth İşlemleri</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item"><a class="nav-link">Anasayfa</a></router-link>
          <router-link to="/about" tag="li" class="nav-item"><a class="nav-link">Hakkımda</a></router-link>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch("logout")
        this.$router.replace("/auth")
      }
    },
    computed: {
      logoutClass() {
        return {
          'd-none': !this.$store.getters.isAuthenticated
        }
      }
    }
  }
</script>
