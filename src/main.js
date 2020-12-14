import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store/store.js'
import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.use(Vuex)
new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')