<template>
  <div id="form-container">
    <button id="open-form" @click="buttonClick">
      <p id="button-text">{{ buttonText }}</p>
    </button>
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
  #open-form{
    border-radius: 50%;
    border: none;
    width: 5vmin;
    height: 5vmin;
    outline: none;
  }

  #form-container, #open-form{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #open-form{
    background-color: #05668D;
    color: #FCFAFA;
    padding: 0;
  }

  #open-form:hover{
    cursor: pointer;
    background-color: #427AA1;
    color: #FCFAFA;
  }

  #form-container{
    flex-direction: column-reverse;
    height: 80vh;
  }

  #button-text{
    margin: 0;
    font-size: 25px;
  }
</style>
