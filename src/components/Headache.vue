<template>
  <v-card>
     <div v-if="!toggledHeadache" id="headache-container"> <!--@click="toggleHeadache" -->
        <div>Type: {{headache.type}}</div>
        <div>Started: {{headache.startDate}}</div>
        <div>Ended: {{headache.endDate}}</div>
        <div v-if="headache.comments !== ''">Comments: {{headache.comments}}</div>
        <div id="button-container">
            <button id="remove" @click="removeHeadache">Remove</button>
        </div>
    </div>
    <div v-else>
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