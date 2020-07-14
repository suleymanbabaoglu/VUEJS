/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {router} from "./router";

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        token: "",
        apiKey: "AIzaSyAuLpuIahFnoeSqe5sjcC9qdqI3caAVNs0",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        initAuth({dispatch, commit}) {
            let token = localStorage.getItem("token");
            if (token) {
                let expirationDate = localStorage.getItem("expirationDate");
                let time = new Date().getTime();

                if (time >= +expirationDate) {
                    dispatch("logout");
                } else {
                    commit("setToken", token)
                    let timerSecond = +expirationDate - time;
                    dispatch("setTimeoutTimer", timerSecond);
                    router.push("/")
                }

            } else {
                router.push("/auth")
                return false;
            }
        },
        login({commit, dispatch, state}, authData) {
            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
            if (authData.isUser) {
                authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
            return axios.post(
                authLink + state.apiKey, {'email': authData.email, 'password': authData.password, 'returnSecureToken': true}
            ).then(response => {
                commit("setToken", response.data.idToken)
                localStorage.setItem("token", response.data.idToken)
                //localStorage.setItem("expirationDate", new Date().getTime() + response.data.expiresIn * 1000) // 1saat sonra
                localStorage.setItem("expirationDate", new Date().getTime() + 5000)
                //dispatch("setTimeoutTimer", +response.data.expiresIn * 1000)  //başına + konulduğunda integer cast işlemi yapılır.
                dispatch("setTimeoutTimer", 5000)  //başına + konulduğunda integer cast işlemi yapılır.

            }).catch(e => console.log(e))
        },
        logout({commit}) {
            commit("clearToken")
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth")
        },
        setTimeoutTimer({dispatch}, expiresIn) {
            setTimeout(() => {
                dispatch("logout");
            }, expiresIn)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    }

})

export default store;