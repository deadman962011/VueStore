<template>
    <div class="CatGrid">
            <div class="CatGridInner col-sm-10 col-sm-offset-2">
             <div class="CatItemGrid col-sm-3 " v-for=" Category in Categories " :key="Category.id">
                 <router-link to="" >
                     <div class="CatItemImg" style="background-image: url('http://127.0.0.1/images/4.jpg');" ></div>
                    <h3 class="text-center" >{{Category.CategoryName}}</h3>
                 </router-link>

             </div>

            </div>



    </div>
</template>


<script>

import { mapGetters } from 'vuex'

export default {
    
    name:'CatGrid',

    computed:{

        ...mapGetters(['Categories'])
    }

}


</script>


<style scoped>


.CatItemGrid{
    
    display: inline-block;
    border:1px red solid;
    min-height: 120px;
    margin:6px
}

.CatItemImg{
    position:absolute;
    left:0;
    width:100%;
    height: 100%;
    z-index: -1;
}




</style>