<template>
  <div id="form-delimiter" v-if="clicked">
      <v-form class="v-flex flex-column">
        <div>
            <div class="date-picker-container">
                <h4>Start Date:</h4>
                <v-date-picker type="date" v-model="startDate" name="startDate"
                show-current
                />
                <v-alert dismissible class="error-message" type="warning" v-bind:class="{visible: isStartDateNotInserted}">
                  This field is required
                </v-alert>
            </div>
            <div class="date-picker-container">
                <h4>End Date:</h4>
                <v-date-picker type="date" v-model="endDate" name="startDate"
                show-current
                />
                <v-alert dismissible class="error-message" type="warning" v-bind:class="{visible: isStartDateNotInserted}">
                  This field is required
                </v-alert>
            </div>
        </div>

        <div class="fields-container">
        <v-radio-group class="d-flex flex-start" v-model="type" :mandatory="true">
          <h4>Headache Type:</h4>
          <v-radio label="light" value="Light"></v-radio>
          <v-radio label="medium" value="Medium"></v-radio>
          <v-radio label="strong" value="Strong"></v-radio>
        </v-radio-group>

        <v-textarea v-model="comments"
          label="Additional comments"
          solo
        >
        </v-textarea>
      </div>

      <v-btn @click='addHeadache' color="primary">Add to list</v-btn>
      <v-alert dismissible v-if="isStartBiggerThanEnd" class="error-message visible" type="error">
          End Date must be bigger than Start Date
      </v-alert>
    </v-form>
    
    <v-btn v-if="compiled" @click="resetAllField" color="secondary">Empty all fields</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
          isEndDateNotInserted: false,
          isStartBiggerThanEnd: false
    }
  },
  computed: {
      ...mapState(['headaches']),
      compiled: {
        get: function () {
            return ((this.comments!=='') || (this.startDate!=='') || (this.endDate!==''))
        },
        //useless setter, just to avoid error in the console
        set: function(compiled){
            this.compiled = compiled;
        }
      }
  },
  methods: {
    addHeadache(){
        if((this.startDate!=='') && (this.endDate!=='')){
            if(this.startDate < this.endDate){
                const headache = {
                comments: this.comments,
                startDate: this.startDate,
                endDate: this.endDate,
                type: this.type,
              }
        
              this.$store.commit('addNewHeadache', headache)

              this.resetAllFields();
            }else{
              this.isStartBiggerThanEnd = true;
            }
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
        this.isEndDateNotInserted = false,
        this.isStartBiggerThanEnd = false
    }
 }
}
</script>

<style scoped>
    .date-picker-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .fields-container{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    .date-picker-container *,
    .fields-container *{
        margin: 1%;
    }

    .error-message{
        display: none;
    }

    .visible{
        display: block;
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
    }

    form div{
        display: flex;
        padding: 2%;
    }

    
</style>