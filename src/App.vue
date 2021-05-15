<template>
  <div id="app">

    <link rel="stylesheet" href="http://127.0.0.1/cdn/bootstrap/css/bootstrap.min.css">

    <Navbar />
    <router-view/>
  </div>
</template>

<style>


.navbar {

  border-radius:0px !important;
};



</style>

<script>

import Navbar from '@/components/layouts/Navbar.vue';

import {mapActions} from 'vuex';

export default {

  components: {
    Navbar
  },
  methods:{

  ...mapActions(['ProductAll','CategoryAll'])

  },


  mounted(){

   //get Categories
   this.CategoryAll()

   //get Products 
   this.ProductAll()


   //disable Loader 

   


  }

}

</script>


