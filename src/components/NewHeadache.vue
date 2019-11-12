<template>
  <div>
    <h1>Add new Headache</h1>
    <button @click="buttonClick">{{ buttonText }}</button>
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
          clicked: false,
          buttonText: '+'
      }
    },
  methods: {
    buttonClick(){
      this.clicked = !this.clicked;

      if(this.clicked == true){
        this.buttonText = '-';
      }else{
        this.buttonText = "+";
      }
    },
    formCompiled(headache){
      this.$emit('push-headache', headache)
    }
  }
}
</script>

<style scoped>

</style>
