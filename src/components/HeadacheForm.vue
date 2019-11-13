<template>
  <div id="form-delimiter" v-if="clicked" >
    <form @submit.prevent="addHeadache" >
        <div>
            <div class="form-elements">
                <p class="label">Start Date:</p><br>
                <input type="date" v-model="startDate" name="startDate">
                <small class="error-message" v-bind:class="{visible: isStartDateNotInserted}" >This field is required</small>
                <br><p class="label">End Date:</p><br>
                <input type="date" v-model="endDate" name="endDate">
                <small class="error-message" v-bind:class="{visible: isEndDateNotInserted}"> This field is required</small>
            </div>

            <div class="form-elements">
                <p class="label">Type:</p><br>
                <select v-model="type" name="type">
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
                
                <input type="text" v-model="comments" name="comments"><br/><br/>
            </div>
        </div>
        
        
        <input class="button" type="submit" value="Aggiungi">
    </form>
    <button v-if="compiled" class="button" @click="resetAllFields">Empty all fields</button>
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
          type: 'Medium',
          isStartDateNotInserted: false,
          isEndDateNotInserted: false
    }
  },
  computed: {
      compiled: function(){
          return ((this.comments!=='') || (this.startDate!=='') || (this.endDate!==''))
      }
  },
  methods: {
    addHeadache(){
        if((this.startDate!=='') && (this.endDate!=='')){
            const headache = {
            comments: this.comments,
            startDate: this.startDate,
            endDate: this.endDate,
            type: this.type,
         }
        
            this.$emit('add-headache', headache);

            this.resetAllFields();
        }else if(this.startDate == ''){
            this.isStartDateNotInserted = true;
        }else{
            this.isEndDateNotInserted = true;
        }
    },
    resetAllFields(){
        this.comments = '',
        this.startDate = '',
        this.endDate = '',
        this.type = 'Medium',
        this.compiled = false,
        this.isStartDateNotInserted = false,
        this.isEndDateNotInserted = false
    }
  }
}
</script>

<style scoped>
    #form-delimiter{
        border-radius: 5px;
        padding: 10px;
        background-color: #EBF2FA;
        box-shadow: 2px 2px 3px #D3E0E9;
    }

    .label{
        color: #05668D;
        font-weight: 600;
    }

    .error-message{
        visibility: hidden;
        color: red;
        text-shadow: 1px 1px 1px white;
    }

    .visible{
        visibility: visible;
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

    input[type="date"], input[type="text"], select{
        border: 1px solid #D3E0E9;
        outline: none;
    }
</style>