import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import {routes} from './routes'
import App from './App.vue'
import store from './store/store'

// import BootstrapVue from 'bootstrap-vue'
//  import 'bootstrap/dist/css/bootstrap.css'
//  import 'bootstrap-vue/dist/bootstrap-vue.css'

// import bootstrap from 'bootstrap'

//Vue.use(BootstrapVue);
//Vue.use(bootstrap);

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-fe460.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
