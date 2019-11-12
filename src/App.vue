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
  #app{
    height: 100vh;
    margin: 0;
    background-color: #EBF2FA;
    overflow-x: hidden;
  }

   button, input[type="submit"]{
    background-color: #05668D;
    color: #FCFAFA;
    border: none;
    outline: none;
  }

  button:hover, input[type="submit"]:hover{
    cursor: pointer;
    background-color: #427AA1;
    color: #FCFAFA;
  }

  *{
    font-family: 'Montserrat', sans-serif;
  }
</style>
