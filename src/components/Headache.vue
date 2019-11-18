<template>
  <v-card>
    <div @click="toggleHeadache" v-if="!toggledHeadache" id="headache-container">
        <div>Type: {{headache.type}}</div>
        <div>Started: {{headache.startDate}}</div>
        <div>Ended: {{headache.endDate}}</div>
        <div v-if="headache.comments !== ''">Comments: {{headache.comments}}</div>
        <div id="button-container">
            <button @click="removeHeadache" id="remove">Remove</button>
        </div>
    </div>
    <div v-else>
        <UpdateHeadache :headache="headache" :toggledHeadache="toggledHeadache" @toggle-headache="toggleHeadache"/>
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
        this.$emit('remove-headache', this.index);
    },
    toggleHeadache(){
        this.toggledHeadache = !this.toggledHeadache;
    }
  }
}
</script>

<style scoped>
    /* #headache-container{
        display: flex;
    }

    #headache-container:hover{
        cursor: pointer;
    }

    #headache-container div{
        padding: 10px;
        white-space: nowrap;
    }

    #button-container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: -10px;
    }

    button:hover{
        background-color: #1B7397;
        color: #FCFAFA;
    } */

</style>