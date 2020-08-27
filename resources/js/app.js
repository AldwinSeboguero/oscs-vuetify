/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
window.Vue = require('vue');

import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify); 
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 

const app = new Vue({ 
    el: '#app',
    vuetify: new Vuetify(),
    icons: {
        iconfont: 'md',
      },
});
