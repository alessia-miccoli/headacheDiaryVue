<template>
  <div id="form-container">
    <v-btn class="float-right" small v-if="clicked" fab color="primary" @click="buttonClick" v-on="on">
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <div v-else class="btn-container">
      <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn fab color="primary" @click="buttonClick" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add New Headache</span>
      </v-tooltip>
    </div>
    <HeadacheForm @add-headache="formCompiled" :clicked="clicked"/>
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
    formCompiled(headache){
      this.$emit('push-headache', headache)
    }
  }
}
</script>
 
<style scoped>
  
</style>
