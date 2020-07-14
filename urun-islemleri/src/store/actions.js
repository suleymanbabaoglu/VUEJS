/* eslint-disable */
import Vue from 'vue';

export const setTradeResult = ({state, commit}, tradeResult) => {
    commit("updateTradeResult", tradeResult);
    let tradeData = {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance
    }
    Vue.http.put("https://urun-islemleri-cdb4c.firebaseio.com/trade-result.json", tradeData)
}

export const getTradeResult = ({commit}) => {

    Vue.http.get("https://urun-islemleri-cdb4c.firebaseio.com/trade-result.json")
        .then((response) => {
            commit("updateTradeResult",response.data);
        })
}