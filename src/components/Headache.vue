<template>
  <tr v-if="!toggledHeadache">
    <td>{{ headache.startDate }}</td>
    <td>{{ headache.endDate }}</td>
    <td>{{ headache.type }}</td>
    <td>{{ headache.comments }}</td>
       <!-- <div id="button-container" class="d-flex align-center justify-center">
          <v-btn depressed color="primary" id="remove" @click="removeHeadache">Remove</v-btn>
       </div> -->
    </tr>
    <!-- <div v-else>
      <UpdateHeadache :headache="headache"/>
    </div> -->
</template>

<script>
// import UpdateHeadache from './UpdateHeadache';

export default {
  
  name: 'Headache-Form',
  // components: {
  //     UpdateHeadache
  // },
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
    #button-container{
      padding: 2vmin;
    }
</style>