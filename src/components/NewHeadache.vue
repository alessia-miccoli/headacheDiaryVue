<template>
  <div id="form-container">
    <v-btn class="float-right" v-if="clicked" fab x-small color="primary" @click="buttonClick" v-on="on">
      <v-icon small>mdi-close</v-icon>
    </v-btn>
    <div v-else class="btn-container">
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn fab color="primary" v-on="on" @click="buttonClick">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add New Headache</span>
      </v-tooltip>
    </div>
    <HeadacheForm :clicked="clicked"/> <!--@add-headache="formCompiled"-->
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
