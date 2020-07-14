import Vue from 'vue'
import App from './App.vue';
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    //mode: 'hash', //Default routing hash route da # işareti koyar
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return {selector: to.hash}
        }
    }
});
Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
