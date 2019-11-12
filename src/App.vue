<template>
  <div id="app">
    <HeadacheList :headaches="headaches"/>
    <NewHeadache @push-headache="addNewHeadache"/>
  </div>
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
    }
  }
}
</script>

<style>

</style>
