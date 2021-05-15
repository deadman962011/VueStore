<template>
    <div class="FeaturedList">
        <h3 class="text-center">Featured Products</h3>
        <div class="container-fluid">
         <div class="ProdListFGrid">
             <div class="col-sm-3" v-for="Product in Products " :key="Product.id" >
                <div class="ProdItemF col-sm-12 ">
                    <img src="http://127.0.0.1/images/1.jpg" alt="">
                    <h4 class='text-center' >{{Product.ProductName}}</h4>
                    <p class="text-center price"> {{Product.ProductPrice}} </p>
                    <button @click="AddToCartT(Product.id)"  >Add to Cart</button>
                </div>
             </div>

         </div>
        </div>



    </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex'

export default {
    name:'FeaturedList',

    computed:{
        ...mapGetters(['Products'])
    },
    methods:{

        ...mapActions(['AddToCart'])
        ,
        AddToCartT:function(id){

              this.AddToCart(id)
        //    console.log(id)
          
           
         
        }
    },
}

</script>


<style scoped>

.ProdItemF{
    display: inline-block;
    border:1px red solid;
    min-height: 240px;
    
}
.ProdItemF img {
    padding:6px 0;
    width:100%;
    height:100%;
}

</style>