<template>
<v-card outlined v-if="headaches.length > 0">
  <v-app-bar flat>
    <v-toolbar-title>Headache List</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      class="search-bar"
      label="Search..."
      append-icon="mdi-magnify"
      @keypress="search"
    ></v-text-field>
  </v-app-bar>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr color="secondary">
          <th class="text-left">Start Date</th>
          <th class="text-left">End Date</th>
          <th class="text-left">Type</th>
          <th class="text-left">Comments</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
    
      <tbody v-for="(headache, index) in headaches" v-bind:key="index*100+1">
        <Headache :headache="headache" :index="index" @toggle-headache="toggleHeadache"/>
      </tbody>
    </template>
  </v-simple-table>
  {{filteredHeadaches}}
</v-card>
</template>

<script>
import Headache from './Headache'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Headache-List',
  components: {
      Headache
  },
  data(){
    return {
      filteredHeadaches: []
    }
  },
  computed: {
    ...mapState(['headaches']),
    ...mapGetters([
      'getHeadacheByType',
      'getHeadacheByStartDate',
      'getHeadacheByEndDate'
    ])
  },
  methods: {
    search(e){
      var value = e.target.value;

      if(e.keyCode === 13){
        this.filteredHeadaches = this.getHeadacheByType(value)
        if(this.filteredHeadaches.length == 0)
          this.filteredHeadaches = this.getHeadacheByStartDate(value)
        if(this.filteredHeadaches.length == 0)
          this.filteredHeadaches = this.getHeadacheByEndDate(value)
        if(this.filteredHeadaches.length == 0)
          alert('no result found')
        e.target.value = '';
      }      
    }
  }
}
</script>

<style scoped>
  .search-bar{
    margin-top: 2vmin;
  }
   
</style>