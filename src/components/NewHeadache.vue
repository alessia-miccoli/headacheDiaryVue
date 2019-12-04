<template>
  <div id="form-container">
    <div v-if="!clicked" class="btn-container">
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn fab color="primary" v-on="on" @click="buttonClick">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add New Headache</span>
      </v-tooltip>
    </div>
    <HeadacheForm :clicked="clicked" @close-form="buttonClick"/>
  </div>
</template>

<script>
import HeadacheForm from './HeadacheForm.vue'

export default {
  name: 'new-headache',
  components: {
    HeadacheForm
  },
  data(){        
      return {
        clicked: false
      }
    },
  methods: {
    buttonClick(){
      this.clicked = !this.clicked
    }
  }
}
</script>
 
<style scoped>
  
</style>
