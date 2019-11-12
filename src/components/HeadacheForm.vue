<template>
<form v-if="clicked" @submit.prevent="addHeadache">
        <p>Start Date:</p>
        <input type="date" v-model="startDate">
        <p>End Date:</p>
        <input type="date" v-model="endDate">
        <p>Type:</p>
        <select v-model="type">
            <option value="Strong">Strong</option>
            <option value="Medium" selected>Medium</option>
            <option value="Light">Light</option>
        </select>
        <p>Additional comments: <br/>
        <small>For example: Was it a period of stress? Why?<br/>
        Did you have any other syntoms?<br/>
        If you are a female, were you in your period?<br/> etc.</small>
        </p>
        <input type="text" v-model="comments"><br/><br/>
        <input type="submit" value="Aggiungi">
        <button @click="resetAllFields">Empty all fields</button>
    </form>
</template>

<script>
export default {
  name: 'Headache-Form',
  props: ['clicked'],
  data(){        
    return {
          comments: '',
          startDate: '',
          endDate: '',
          type: 'Medium'
    }
  },
  methods: {
    addHeadache(){
          const headache = {
              comments: this.comments,
              startDate: this.startDate,
              endDate: this.endDate,
              type: this.type
          }
        
        this.$emit('add-headache', headache);

        this.resetAllFields();
    },
    resetAllFields(){
        this.comments = '',
        this.startDate = '',
        this.endDate = '',
        this.type = 'Medium'
    }
  }
}
</script>

<style scoped>

</style>