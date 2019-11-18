<template>
  <v-card>
     <div v-if="!toggledHeadache"> <!--@click="toggleHeadache" -->
       <v-simple-table
        :dense="dense"
        :fixed-header="fixedHeader"
        :height="height"
       >
         <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Start Date</th>
              <th class="text-left">End Date</th>
              <th class="text-left">Type</th>
              <th class="text-left">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ headache.startDate }}</td>
              <td>{{ headache.endDate }}</td>
              <td>{{ headache.type }}</td>
              <td>{{ headache.comments }}</td>
            </tr>
          </tbody>
        </template>
       </v-simple-table>
       <div id="button-container">
          <v-btn color="primary" id="remove" @click="removeHeadache">Remove</v-btn>
       </div>
        
        <!-- <div>Type: {{headache.type}}</div>
        <div>Started: {{headache.startDate}}</div>
        <div>Ended: {{headache.endDate}}</div>
        <div v-if="headache.comments !== ''">Comments: {{headache.comments}}</div>
         -->
    </div>
    <div v-else> <!-- v-else-->
      <UpdateHeadache :headache="headache"/> <!--@toggle-headache="toggleHeadache"-->
    </div>
  </v-card>
</template>

<script>
import UpdateHeadache from './UpdateHeadache';

export default {
  
  name: 'Headache-Form',
  components: {
      UpdateHeadache
  },
  data(){
    return {
        toggledHeadache: false
    }
  },
  props: ['headache', 'index'],
  methods: {
    removeHeadache(){
        this.$store.commit('deleteHeadache', this.index);
    },
    // toggleHeadache(){
    //     this.toggledHeadache = !this.toggledHeadache;
    // }
  }
}
</script>

<style scoped>
    
</style>