<template>
  <div id="form-delimiter" v-if="clicked">
    <form @submit.prevent="addHeadache">
        <div>
            <div class="form-elements">
                <p class="label">Start Date:</p><br>
                <input type="date" v-model="startDate"><br>
                <p class="label">End Date:</p><br>
                <input type="date" v-model="endDate"><br>
            </div>

            <div class="form-elements">
                <p class="label">Type:</p><br>
                <select v-model="type">
                    <option value="Strong">Strong</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="Light">Light</option>
                </select>
            </div>
            

            <div class="form-elements">
                <p class="label">Additional comments: </p>
                <p><small>Was it a period of stress? Why?<br/>
                Did you have any other syntoms?<br/>
                If you are a female, were you in your period?<br/><br/></small></p>
                
                <input type="text" v-model="comments"><br/><br/>
            </div>
        </div>
        
        
        <input class="button" type="submit" value="Aggiungi">
    </form>
    <button class="button" @click="resetAllFields">Empty all fields</button>
  </div>
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
//   computed: {
//       isEmptyButtonVisible: function(){
//           return ()
//       }
//   },
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
    #form-delimiter{
        border-radius: 5px;
        padding: 10px;
        background-color: #A4C7D5;
    }

    .label{
        color: #05668D;
        font-weight: 600;
    }

    form, #form-delimiter{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    
    p{
      text-align: center;
      margin: 0;
      padding: 0;
    }

    form div{
        display: flex;
        padding: 20px;
    }

    .form-elements{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    small{
        color: #427AA1;
    }
</style>