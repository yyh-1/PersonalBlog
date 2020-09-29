import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from './http';
import Vuex from 'vuex';
import store from './store';
import "./assets/reset.css";
// import  VueResource  from 'vue-resource'


// Vue.use(VueResource)


Vue.config.productionTip = false
Vue.prototype.$http=axios




new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')