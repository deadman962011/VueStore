<template>
     <div class="register">

       <div class="container">
           <div class="col-sm-offset-2 col-sm-8 RegisterForm ">
             <ValidationObserver v-slot="{ handleSubmit }">
                <form class='form-horizontal' @submit.prevent="handleSubmit(onSubmit)" method="post">
                    <h3>Register</h3>
                    <ValidationProvider name='FullNameI' rules='required|min:6|max:24' v-slot="{errors}" >
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  FullNameI.length !== 0 && errors.length == 0  }'>
                            <label for="FullNameI">Full Name: {{ FullNameI }} </label>
                            <input type="text" class="form-control" name="FullNameI" v-model="FullNameI" id="FullNameI" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='UserNameI' rules='required|min:6' v-slot='{errors}'>
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  UserNameI.length !== 0 && errors.length == 0  }'>
                            <label for="UserNameI">User Name:</label>
                            <input type="text" class="form-control" name="UserNameI" v-model="UserNameI" id="UserNameI" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='MailI'  rules='required|email' v-slot="{errors}">
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  MailI.length !== 0 && errors.length == 0  }' >
                            <label for="MailI">Email address:</label>
                            <input type="email" class="form-control" name="MailI" v-model='MailI' id="email" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='PasswordI' rules='required|min:6' v-slot='{errors}' >
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  PasswordI.length !== 0 && errors.length == 0  }'>
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" name="PasswordI" v-model="PasswordI" id="pwd" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='Password2I' rules='required|min:6' v-slot='{errors}' >
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  Password2I.length !== 0 && errors.length == 0  }'>
                            <label for="pwd2">Repeat Password:</label>
                            <input type="password" class="form-control" name="Password2I" v-model="Password2I" id="pwd2" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='AddressI' rules='required|min:3' v-slot='{errors}' >
                        <div class="form-group has-feedback" :class='{"has-error":errors.length,"has-success":  AddressI.length !== 0 && errors.length == 0  }'>
                            <label for="AddressI">Address:</label>
                            <input type="text"  class="form-control" name="AddressI" v-model="AddressI" id="Address" required>
                            <span class='text-danger'>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider name='CountryI' rules='required' v-slot='{errors}'  >
                        <div class="form-group">
                            <label for="CountryI">Country:</label>
                            <select class="form-control" name="CountryI"  v-model="CountryI" id="CountryI" required>
                             <option value="Syr">Syria</option>
                            </select>
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>

                    <ValidationProvider>
                        <div class="checkbox">
                            <label><input type="checkbox" name="AccesptTermsI" required> I Accept </label>
                        </div>
                    </ValidationProvider>

                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
             </ValidationObserver>

           </div>
       </div>

     </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'register',

    data: () => {

     return  {

        FullNameI:"",
        UserNameI:"",
        MailI:"",
        PasswordI:"",
        Password2I:"",
        AddressI:"",
        CountryI:"",
        AccesptTermsI:null
       }

    },
    
    methods:{

     onSubmit:function(){

       //Spinner And Disabled On Submit Button

       //get Inputs Values
       var form = {
        FullNameI:this.FullNameI,
        UserNameI:this.UserNameI,
        MailI:this.MailI,
        PasswordI:this.PasswordI,
        Password2I:this.Password2I,
        AddressI:this.AddressI,
        CountryI:this.CountryI,
        AccesptTermsI:this.AccesptTermsI
       }
       console.log(form)
       
       //Do Save User
       var response = axios.post('http://127.0.0.1:8000/api/BlaxkStore/6/SaveCust',form)
       
       //Check Response
       if(response.statues === 201){

           console.log(response)

           //Redirect To Mail Activation
       }
       if(response.statues === 402){

           console.log(response)

           //Display Error 
       }
        
       console.log('Done')
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
 .RegisterForm{
     background-color:rgb(236, 232, 232);
     border:1px rgb(190, 190, 190) solid;
     border-radius: 6px;
     padding:32px;
     margin-top: 72px;
     
 }

 .RegisterForm form h3 {
     text-align: center;
     font-weight: bold;
 }
</style>