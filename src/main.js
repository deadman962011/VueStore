import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver }  from 'vee-validate';

Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)
Vue.use(VueCookie)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  VueCookie,
  
  render: h => h(App)
}).$mount('#app')


