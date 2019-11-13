<template>
  <div id="app">
    <HeadacheList @remove-h='deleteHeadache' :headaches="headaches"/>
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
    },
    deleteHeadache(index){
      this.headaches.splice(index, 1);
    }
  }
}
</script>

<style>
  #app{
    height: 100vh;
    margin: 0;
    background-color: #FCFAFA;
    overflow-x: hidden;
  }

   button, input[type="submit"]{
    background-color: #05668D;
    color: #FCFAFA;
    border: none;
    outline: none;
    padding: 5px 10px;
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
