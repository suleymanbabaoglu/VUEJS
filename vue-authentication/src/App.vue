<template>
  <div>
    <Header />
      <router-view></router-view>
  </div>
</template>
<script>
  /* eslint-disable */

  import Header from "./components/Header";
  import Auth from "./pages/auth/Auth"
  import Homepage from "./pages/Homepage"
  import About from "./pages/About"
  export default {
    components: {
        Header
    },
    created() {
      this.$store.dispatch("initAuth")
    }
  }
</script>
