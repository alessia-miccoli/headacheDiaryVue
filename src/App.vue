<template>
  <v-app id="app">
    <CustomHeader/>
    <router-view></router-view>
    <CustomFooter/>
  </v-app>
</template>

<script>
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  name: 'app',
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>

<style scoped>
  
</style>
