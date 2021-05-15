import Vue from 'vue';
import Vuex from 'vuex';
import Cust from './modules/Cust';
import Prod from './modules/Prod';
import Cat from './modules/Cat';
import Cart from './modules/Cart';
Vue.use(Vuex);


export default new Vuex.Store({

    modules:{
        Cust,
        Prod,
        Cat,
        Cart
      
    }

})