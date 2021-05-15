import axios from 'axios'



const state = {

    Products:[]
}

const getters = {
    Products:state=>state.Products,
}

const actions = {

    async ProductAll({ commit }){

        //Set Url
        var url = process.env.VUE_APP_BASEURLBLAXK + process.env.VUE_APP_SITEID +'/'+ 'ProductAll' ;
        
        //Get Products 
        axios.get(url).then(function(response){

            console.log(response.data)

            if(response.status == 200){
                commit('ProductAll',response.data.item)
            }

           
        })



        

    }


}

const mutations = {
    
    ProductAll:(state, Products) =>(state.Products = Products),
}



export default{

    state,
    getters,
    actions,
    mutations

}