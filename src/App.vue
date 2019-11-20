<template>
  <v-app id="app">
    <div>
      <v-app-bar color="primary">
        <v-toolbar-title class="white--text">Headache Diary</v-toolbar-title>
      </v-app-bar>
    </div>
    <v-content class="d-flex">
      <HeadacheList/>
    </v-content>
    <v-content class="d-flex flex-column justify-center align-center content">
      <NewHeadache />
    </v-content>
    <!-- <v-content class="d-flex flex-column">
      <Stats/>
    </v-content> -->
    <v-footer class="d-flex justify-center">
      <small class="primary--text font-weight-black">Created By Alessia Miccoli</small>
    </v-footer>
  </v-app>
</template>

<script>
import NewHeadache from './components/NewHeadache.vue'
import HeadacheList from './components/HeadacheList.vue'
// import Stats from './components/Stats.vue'

export default {
  name: 'app',
  components: {
    NewHeadache,
    HeadacheList,
    // Stats
  }
}
</script>

<style scoped>
  .content{
    margin: 2vmin;
  }
</style>
