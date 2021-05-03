<template>
    
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
        <li ><router-link to="/">Home</router-link></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to='register'><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
        <li><router-link to="login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link></li>
      </ul>
    </div>
  </div>
</nav>

</template>



<style scoped>

</style>

<script>
export default {
    
}
</script>



