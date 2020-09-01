/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');

import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import MainApp from './components/MainApp.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
Vue.use(Vuetify); 
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode : 'history'
})

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 

const app = new Vue({ 
    el: '#app',
    router,
    vuetify: new Vuetify(),
    icons: {
        iconfont: 'md',
      },
      components: {
        MainApp
      },
});
