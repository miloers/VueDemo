// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import index from './components/index.vue'
import search from './components/search.vue'
import details from './components/details.vue'
import './style/qysz/style/reset.css'

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
        path: '/',
        component: index
    }, {
        path: '/index',
        component: index,
        name: 'index'
    }, {
        path: '/search',
        component: search,
        name: 'search'
    }, {
        path: '/details',
        component: details,
        name: 'details'
    }]
    /* eslint-disable no-new */
const router = new VueRouter({
    routes
})


var app = new Vue({
    el: '#app',
    router,
    ...App
})