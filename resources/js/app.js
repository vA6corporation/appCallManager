
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vuex from 'vuex';
var VueResource = require('vue-resource');
import store from './store';
import Snotify from 'vue-snotify'; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. See the next example or setConfig in [API] section


Vue.use(Snotify, {
  toast: {
    timeout: 5000
  }
});
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

// var baseUrl = '/appAgunsa/public';
var baseUrl = '/';

Vue.http.options.root = baseUrl;
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
// Vue.component('message', require('./components/Message.vue'));
// Vue.component('message', require('./components/message.vue'));
// Vue.component('typeahead', require('./components/typeahead.vue'));

Vue.mixin({
  methods: {
    showMessage(message) {
      this.$root.$emit('message', message);
    }
  }
})


const router = new VueRouter({
  base: baseUrl,
  routes,
  mode: 'history',
});

const app = new Vue({
    router,
    el: '#app',
    updated: function() {
      this.$nextTick(function () {
        feather.replace();
      });
    },
});

feather.replace()
