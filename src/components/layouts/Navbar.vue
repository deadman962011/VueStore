<template>
    <div class="">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">WebSiteName</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">

            <ul class="nav navbar-nav">
              <li><router-link to='register'><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
              <li><router-link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              
                <li><input type="text" name="" id="" class="form-control"></li>
                <li><a href="#" class="CartBtn">cart</a></li>

            </ul>
          </div>
        </div>
      </nav>

      <div class="CartList col-sm-4 col-xs-12">
        <div class="CartBody">


          <div class="CartItem" v-for="CartItem in Cart" :key="CartItem.item.id">
              <button class="pull-right" @click="RemoveFromCartT(CartItem.item.id)" >X</button>
              <img class="pull-left" src="http://127.0.0.1/images/avatar.png" alt="">
              <h3>{{ CartItem.item.ProductName }}</h3>
              <span class='QtyItem'> Quantity : {{ CartItem.qty }}</span>
              <span class="PriceItem" > Price : {{ CartItem.item.ProductPrice }} </span>
              <span class="FullPrice"> Full : {{ CartItem.qty * CartItem.item.ProductPrice }} </span>
          </div>
        </div>
        <div class="CartFooter">footer</div>
      </div>
    </div>


</template>

<script>

import { mapGetters,mapActions } from 'vuex'

export default {
    name:'Navbar',
    computed:{
      ...mapGetters(['Cart','FullPrice'])
    },
    methods:{
      ...mapActions(['RemoveFromCart']),
      RemoveFromCartT:function(id){

     
        this.RemoveFromCart(id)
        
      }
    }
}
</script>


<style scoped>

.navbar-default{

 background-color:white;
 min-height:  80px !important;

}

.navbar-default .container-fluid {
 margin-top:12px
}

.CartList{
display: none;
 position: absolute;
 right:46px;
 background: red;
 min-height:120px;
 height:fit-content;
 z-index: 1;
}

.CartBody .CartItem {
  
  padding-bottom: 24px;
  margin:6px 0;
  border-bottom: 2px blue solid;
}
.CartBody .CartItem  img {
   margin-right: 16px;
}


</style>




