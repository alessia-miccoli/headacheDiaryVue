<template>
  <v-app id="app">
    <div>
      <v-app-bar color="primary">
        <v-toolbar-title class="white--text">Headache Diary</v-toolbar-title>
      </v-app-bar>
    </div>
    <v-content class="d-flex flex-column justify-center align-center content">
      <HeadacheList @remove-h='deleteHeadache' :headaches="headaches"/>
      <NewHeadache @push-headache="addNewHeadache"/>
    </v-content>
    <v-footer class="d-flex justify-center">
      <small class="primary--text font-weight-black">Created By Alessia Miccoli</small>
    </v-footer>
  </v-app>
</template>

<script>
import NewHeadache from './components/NewHeadache.vue'
import HeadacheList from './components/HeadacheList.vue'
export default {
  name: 'app',
  data(){
    return {
      headaches: [ ]
    }
  },
  components: {
    NewHeadache,
    HeadacheList
  },
  methods: {
    addNewHeadache(headache){
      this.headaches.push(headache);
    },
    deleteHeadache(index){
      this.headaches.splice(index, 1);
    }
  }
}
</script>

<style>
  .content{
    margin: 2%;
  }
</style>
