<template>
  <div class="container">
    <Search></Search>
    <UserMain></UserMain>
    
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components:{
    Search,
    UserMain:Main
  }
}
</script>

<style>

</style>
