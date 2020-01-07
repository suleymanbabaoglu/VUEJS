import Vue from "vue";
import App from './App.vue';
//import Parent from "./components/parent-child/Parent.vue";
import vuetify from "./plugins/vuetify";

export const eventBus = new Vue({
  data: {},
  methods: {
    changeTitle(title) {
      this.$emit("titleDeger", title);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
  //render: p => p(Parent)
}).$mount("#app");
