<template>
  <tr @click="toggleHeadache">
    <td v-if="!toggledHeadache">{{ headache.startDate }}</td>
    <td @click.stop v-else>
      <input type="date" v-model="headache.startDate">
    </td>
    <td v-if="!toggledHeadache">{{ headache.endDate }}</td>
    <td @click.stop v-else>
      <input type="date" v-model="headache.endDate">
    </td>
    <td v-if="!toggledHeadache">{{ headache.type }}</td>
    <td @click.stop v-else>
      <v-radio-group class="d-flex flex-start" v-model="headache.type" :mandatory="true">
          <v-radio label="light" value="Light"></v-radio>
          <v-radio label="medium" value="Medium"></v-radio>
          <v-radio label="strong" value="Strong"></v-radio>
        </v-radio-group>
    </td>
    <td v-if="!toggledHeadache">{{ headache.comments }}</td>
    <td @click.stop v-else>
      <v-textarea v-model="headache.comments"></v-textarea>
    </td>
    <td v-if="!toggledHeadache">        
      <v-btn outlined color="primary" id="remove" @click.stop="removeHeadache">Remove</v-btn></td>
    <td v-else>
      <v-btn outlined color="primary" id="remove" @click.stop="toggleHeadache">Save</v-btn>
    </td>
  <!-- <div v-else>
    <UpdateHeadache :headache="headache" @click="toggleHeadache=!toggleHeadache"/>
  </div> -->
      <!-- <div id="button-container" class="d-flex align-center justify-center">
      </div> -->
   </tr>  
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
    toggleHeadache(){
        this.toggledHeadache = !this.toggledHeadache;
        this.$emit('toggle-headache', this.toggledHeadache)
    }
  }
}
</script>

<style scoped>
    #button-container{
      padding: 2vmin;
    }
</style>