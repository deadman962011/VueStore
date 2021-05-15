<template>
     <div class="login">
      
       <div class="container">
           <div class="col-sm-offset-2 col-sm-8 loginForm ">
             <form class='form-horizontal'  @submit.prevent="onSubmit"  method="post">
              <h3>login</h3>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="text" v-model="CustUserNameI" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" v-model="CustPassI" class="form-control" id="pwd">
                </div>
                <div class="checkbox">
                    <label><input type="checkbox"> Remember me</label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
             </form>
           </div>
       </div>
       
     </div>
</template>

<script>


import { mapActions } from 'vuex'
import VueCookie from 'vue-cookie'
export default {
    name:'login',

    data(){

     return {

         CustUserNameI:"",
         CustPassI:""
     }

    },

    methods:{
        ...mapActions(['CustLogin']),

        onSubmit:function(){

           //get Form Values
           var LoginForm = {
               
               CustUserNameI:this.CustUserNameI,
               CustPassI:this.CustPassI
           } 

           //Disable Submit Button 

           //Check if ! state Value Do Login
           console.log(this.$cookie)

           if(!VueCookie.get('Cust')){
                this.CustLogin(LoginForm).then(function(){

                    //Redirect To Main Page
                    this.$router.push('Home')

                })
           }

        
           
         

        }
    },
    mounted(){

           //Protect Route
           if(this.$cookie.get('Cust')){
                this.$router.push('Home')
            }
    }

}
</script>


<style  scoped>

 .loginForm{
     background-color:rgb(236, 232, 232);
     border:1px rgb(190, 190, 190) solid;
     border-radius: 6px;
     padding:32px;
     margin-top: 72px;
     
 }

 .loginForm form h3 {
     text-align: center;
     font-weight: bold;
 }

</style>