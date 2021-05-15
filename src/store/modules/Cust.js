 import axios from 'axios'
 import VueCookie from 'vue-cookie'

const state = {

    Customer:{}

}


const getters = {
    Customer:state=>state.Customer,
}


const actions = {
 
    async CustLogin({commit},LoginForm){


        console.log(LoginForm)

        //Do Login
        await axios.post(process.env.VUE_APP_BASEURLBLAXK + process.env.VUE_APP_SITEID +'/CustLogin',LoginForm).then(function(response){

            if(response.status == 200){
                //Set Token 
                axios.defaults.headers.common['Authorization'] = 'bearer '+ response.data.token;
        
                //Set Cookie 
                VueCookie.set('Cust','doen',3600)
    
                console.log('Login Done')
            
             }
             else{
                 console.log('error login ')
             }
    
            
            // //Check Status
    
             commit('Customer',response.data)

        })



    }

}



const mutations = {

    Customer:(state, Customer) =>(state.Customer = Customer),
}


export default{

    state,
    getters,
    actions,
    mutations

}