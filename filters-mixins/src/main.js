import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;


Vue.filter("kucukYap", (deger) => { //global filter tanımlaması
    return deger.toLowerCase();
});

new Vue({
    render: h => h(App),
}).$mount('#app');


