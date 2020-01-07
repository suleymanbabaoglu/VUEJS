import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import {routes} from './routes';

Vue.config.productionTip = false

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

router.beforeEach((to, from, next) => {
    //GLOBAL OLARAK KONTROL
    next();//içerisine route, true/false değerleri alabilir. True izin verir, false engelleme yapar.Konulmazsa erişim sağlanamaz.
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
