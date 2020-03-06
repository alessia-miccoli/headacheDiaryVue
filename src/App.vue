<template>
  <v-app id="app">
    <CustomHeader/>
    <v-content class="d-flex">
      <HeadacheList/>
    </v-content>
    <v-content class="d-flex flex-column justify-center align-center content">
      <NewHeadache />
    </v-content>
    <CustomFooter/>
  </v-app>
</template>

<script>
import NewHeadache from './components/NewHeadache.vue'
import HeadacheList from './components/HeadacheList.vue'
import CustomHeader from './components/CustomHeader.vue'
import CustomFooter from './components/CustomFooter.vue'

export default {
  name: 'app',
  components: {
    NewHeadache,
    HeadacheList,
    CustomHeader,
    CustomFooter
  }
}
</script>

<style scoped>
  .content{
    margin: 2vmin;
  }
</style>
