

const state = {
    Cart:[],
    FullPrice:0
}

const getters = {

    Cart:state=>state.Cart,
    FullPrice:state=>state.FullPrice

}

const actions  = {


    async AddToCart({state,getters,commit},ProdId){

        //Check Product 
        var  Prods=await getters.Products

        //filter Array 
        var res =await  Prods.find(obj => {
            return obj.id == ProdId
        })

        var Prod = {
            item:res,
            qty:1
        }

        //Check if Cart is Empty 
        if(state.Cart.length == 0 ){

            console.log("Cart Is Empty")
            
            var newCart0 = state.Cart
            newCart0.push(Prod)
        
            //Add New Item 
            commit('Cart',newCart0)

        }
        else{

            var CartArr = state.Cart 
            var FilterCart = CartArr.find(obj => {
                return obj.item.id == ProdId
            })

            if(FilterCart){

                //if Cart Is Not Empty And The Item Is !New 
                console.log('item Already Exists')
                console.log('increase Qty')

                 state.Cart.forEach(item =>{

                    if(item.item.id === ProdId){

                        var oldQty = item.qty
                        var newQty =item.qty = oldQty + 1;
                        return {item :item.item ,qty : newQty}

                    }
                })

                commit('Cart',state.Cart)
 
            }
            else{

                //if Cart Is Not Empty And The Item Is New
                console.log('item Is New ')

                var newCart = state.Cart
                newCart.push(Prod)
                commit('Cart',newCart)

            }

        }

        //SetFull Price
        var FullPrice = res.ProductPrice + getters.FullPrice

        commit('FullPrice',FullPrice)
        
    
    },

    async RemoveFromCart({state,commit,getters},ProdId){

        //filter Cart Arr 
        var FilterCartArr = state.Cart.findIndex(item =>{

             return item.item.id === ProdId
        })

        //Remove item From Array

        var removedItem =state.Cart.splice(FilterCartArr,1)
        var newCart = state.Cart

        commit('Cart',newCart)

        //Reduce Full Price

        //filter Array 
        var Prods = getters.Products
        var res =await  Prods.find(obj => {
            return obj.id == ProdId
        })

        var itemQty=removedItem[0].qty

        var FullPrice =getters.FullPrice - res.ProductPrice * itemQty

        commit('FullPrice',FullPrice)

    }



}

const mutations = {
    Cart:(state,Product) => (state.Cart = Product),
    FullPrice:(state,FullPrice) =>(state.FullPrice = FullPrice)
}


export default {
    state,
    getters,
    actions,
    mutations

}