<template>
  <div class="home">
 
    <CatGrid></CatGrid>

    <FeaturedList></FeaturedList>

  </div>
</template>

<script>
// @ is an alias to /src

import CatGrid from '../components/lists/CategoryGrid'
import FeaturedList from '../components/lists/FeaturedList'

export default {
  name: 'Home',

  components:{
    CatGrid,
    FeaturedList
  }

}
</script>
