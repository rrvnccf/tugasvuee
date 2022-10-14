<template>
  <div class= "bg-secondary">
    <nav> 
      <router-link to="/" class= "text-white"> Home </router-link>
      <router-link to="/about" class= "text-white"> About </router-link>
      <router-link to="/privacy" class= "text-white"> Privacy </router-link>
      <router-link to="/login" class= "text-white"> Login </router-link>
      <router-link to="/register" class= "text-white"> Register </router-link>
      <router-link to="/users" class= "text-white"> Users </router-link>
    </nav>
    <hr />
  </div>
  <router-view />
</template>




