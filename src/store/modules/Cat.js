import axios from 'axios'

const state = {

    Categories:[]

}

const getters= {
    Categories:state=>state.Categories,
}

const actions = {
    
    async CategoryAll({ commit }){

        //Set Url
        var url = process.env.VUE_APP_BASEURLBLAXK + process.env.VUE_APP_SITEID + '/CategoryAll' ;

        axios.get(url).then(function(res){

            console.log(res.data)

            commit('CategoryAll',res.data)
    

        })


    }

}

const mutations = {

    CategoryAll:(state,Categories) => (state.Categories = Categories)
 

}


export default{

    state,
    getters,
    actions,
    mutations

}