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
    <HeadacheForm :clicked="clicked" @close-form="buttonClick"/> <!--@add-headache="formCompiled"-->
  </div>
</template>

<script>
import HeadacheForm from './HeadacheForm.vue'

export default {
  name: 'New-Headache',
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
    },
    // formCompiled(headache){
    //   this.$emit('push-headache', headache)
    // }
  }
}
</script>
 
<style scoped>
  
</style>
