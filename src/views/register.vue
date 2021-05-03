<template>
     <div class="register">

       <div class="container">
           <div class="col-sm-offset-2 col-sm-8 RegisterForm ">
             <form class='form-horizontal' @submit.prevent="onSubmit" method="post">
                <h3>Register</h3>
                <div class="form-group">
                    <label for="FullNameI">Full Name:</label>
                    <input type="text" class="form-control" name="FullNameI" id="FullNameI" required>
                </div>
                <div class="form-group">
                    <label for="UserNameI">User Name:</label>
                    <input type="text" class="form-control" name="UserNameI" id="UserNameI" required>
                </div>
                <div class="form-group">
                    <label for="MailI">Email address:</label>
                    <input type="email" class="form-control" name="MailI" id="email" required>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" name="PasswordI" id="pwd" required>
                </div>
                <div class="form-group">
                    <label for="pwd2">Repeat Password:</label>
                    <input type="password" class="form-control" name="Password2I" id="pwd2" required>
                </div>
                <div class="form-group">
                    <label for="AddressI">Address:</label>
                    <input type="text" name="AddressI" class="form-control" id="Address" required>
                </div>
                <div class="form-group">
                    <label for="CountryI">Country:</label>
                    <select class="form-control"  id="CountryI" required>
                      <option value="Syr">Syria</option>
                    </select>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" required> I Accept </label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
             </form>
           </div>
       </div>

     </div>
</template>

<script>
export default {
    name:'register',
    
    methods:{

     onSubmit:function(){

    //    e.preventDefault()

       //Spinner And Disabled On Submit Button

       //get Inputs Values
       
       //Do Save User

        //Check Response
       
         //Redirect To Mail Activation


       console.log('Done')
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