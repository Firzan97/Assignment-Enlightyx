import Vuex from "vuex"
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        pageTitle: "Our Restaurant"
    },
    mutations: {
        increment(state) {
            state.count++
        },
        updateTitle(state, newTitle) {
            state.pageTitle = newTitle;
        }
    },
    getters: {
        isLogged: state => {
            return state.isLogged;
        },
        pageTitle: state => {
            return state.pageTitle;
        }
    },
    actions: {

    }

})