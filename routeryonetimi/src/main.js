import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //mode: 'hash', //Default routing hash route da # işareti koyar
    mode: 'history'
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
