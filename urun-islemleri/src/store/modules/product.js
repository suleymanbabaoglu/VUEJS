import Vue from 'vue';
import {router} from '../../router';

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}

const actions = {
    initApp({commit}) {
        Vue.http.get("https://urun-islemleri-cdb4c.firebaseio.com/products.json")
            .then((response) => {
                let data = response.data;
                for (let key in data) {
                    data[key].key = key;
                    commit("updateProductList", data[key])
                }
            });
    },
    saveProduct({commit, dispatch}, payload) {
        Vue.http.post("https://urun-islemleri-cdb4c.firebaseio.com/products.json", payload)
            .then((response) => {
                /*********** Ürün Listesinin Güncellenmesi *****************/
                payload.key = response.body.name;
                commit("updateProductList", payload)

                /************** Alış-Satiş-Bakiye Bilgilerinin Güncellenmesi ************/
                let tradeResult = {
                    purchase: payload.price,
                    sale: 0,
                    count: payload.count
                }
                dispatch("setTradeResult", tradeResult);


                router.replace('/');

            });
    },
    sellProduct({state, dispatch}, payload) {

        let product = state.products.filter(element => {
            return element.key == payload.key;
        });

        if (product) {
            let totalCount = product[0].count - payload.count;
            Vue.http.patch("https://urun-islemleri-cdb4c.firebaseio.com/products/" + payload.key + ".json", {count: totalCount})
                .then(response => {
                    product[0].count = totalCount;
                    // eslint-disable-next-line no-console
                   console.log(response)
                    let tradeResult = {
                        purchase: 0,
                        sale: product[0].price,
                        count: payload.count
                    }
                    dispatch("setTradeResult", tradeResult);
                    router.replace('/');
                })
        }

    }

}


export default {
    state,
    getters,
    mutations,
    actions
}