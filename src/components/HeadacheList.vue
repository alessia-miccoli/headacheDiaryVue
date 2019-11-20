<template>
<v-card outlined v-if="headaches.length > 0">
  <v-app-bar flat>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      class="search-bar"
      v-model="searchTerm"
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
      <tbody v-show="previousSearchTerm==''" v-for="(headache) in headaches" v-bind:key="headache.id">
        <Headache :headache="headache"/>
      </tbody>
      <tbody v-show="previousSearchTerm!==''" v-for="(filteredHeadache) in filteredHeadaches" v-bind:key="filteredHeadache.id*10">
        <FilteredHeadache :filteredHeadache="filteredHeadache" @delete-filtered="deleteFiltered"/>
      </tbody>
    </template>
  </v-simple-table>
</v-card>
</template>

<script>
import Headache from './Headache'
import FilteredHeadache from './FilteredHeadache'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Headache-List',
  components: {
      Headache,
      FilteredHeadache
  },
  data(){
    return {
      filteredHeadaches: [],
      previousSearchTerm: '',
      searchTerm: '',
      title: 'Headache List'
    }
  },
  computed: {
    ...mapState([
      'headaches'
    ]),
    ...mapGetters([
      'getHeadacheByType',
      'getHeadacheByStartDate',
      'getHeadacheByEndDate'
    ])
  },
  methods: {
    search(e){
      if(e.keyCode === 13){
        this.filteredHeadaches = this.getHeadacheByType(this.searchTerm)
        if(this.filteredHeadaches.length == 0)
          this.filteredHeadaches = this.getHeadacheByStartDate(this.searchTerm)
        if(this.filteredHeadaches.length == 0)
          this.filteredHeadaches = this.getHeadacheByEndDate(this.searchTerm)

        this.previousSearchTerm = this.searchTerm;
        this.searchTerm = '';
        this.title="Results for: \"" + this.previousSearchTerm + "\""
      }      
    },
    deleteFiltered(id){
      alert('id: ' + id)
      this.filteredHeadaches.splice(this.filteredHeadaches.findIndex(h => h.id == id), 1);
      this.$store.commit('deleteHeadache', id);
    }
  }
}
</script>

<style scoped>
  .search-bar{
    margin-top: 2vmin;
  }
   
</style>