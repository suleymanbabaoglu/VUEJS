import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueRouter from "vue-router";
import Users from "./components/Users";
import Home from "./components/Home";
import vuetify from "./plugins/vuetify";
const routes = [
  { path: "/", component: Home },
  { path: "/users", component: Users },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(Axios);
Vue.use(VueRouter);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
