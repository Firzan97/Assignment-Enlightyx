import Vue from "vue";
import VueRouter from "vue-router";
import Order from "../views/Order.vue";
Vue.use(VueRouter);


const routes = [{
    path: '/',
    name: "Restaurant",
    component: Order,
    meta: {
        title: 'Menu',

    }
}]
const router = new VueRouter({
    // short for `routes: routes`,
    mode: 'history',
    base: "/",
    routes,
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
router.replace("/")

export default router;