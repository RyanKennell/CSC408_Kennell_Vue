
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Our Vue.js App"></HelloWorld>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'home',
    components: {
      HelloWorld
    }
  }
</script>
