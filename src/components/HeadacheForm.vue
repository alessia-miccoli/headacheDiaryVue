<template>
  <v-card outlined id="form-delimiter" v-if="clicked">
    <div class="close-btn-container">
      <h1 class="primary--text">New Headache</h1>
      <v-spacer></v-spacer>
      <v-btn depressed class="float-right" v-if="clicked" fab x-small color="primary" @click="closeForm">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-form ref="form" class="v-flex flex-column">
      <div>
        <div class="date-picker-container">
            <h4>Start Date:</h4>
            <v-date-picker flat type="date" v-model="startDate" name="startDate"
            show-current
            />
            <v-alert dense dismissible class="error-message" type="warning" v-bind:class="{visible: isStartDateNotInserted}">
              This field is required
            </v-alert>
        </div>
        <div class="date-picker-container">
            <h4>End Date:</h4>
            <v-date-picker type="date" v-model="endDate" name="startDate"
            show-current
            />
            <v-alert dense dismissible class="error-message" type="warning" v-bind:class="{visible: isEndDateNotInserted}">
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
          outlined
        >
        </v-textarea>
    </div>

    <v-btn id="add-to-list" depressed @click='validate' color="primary">Add to list</v-btn>

    <v-alert dense dismissible v-if="isStartBiggerThanEnd" class="error-message visible" type="error">
        End Date must be bigger than Start Date
    </v-alert>
  </v-form>
    
    <v-btn depressed v-if="compiled" @click="reset" color="primary">Empty all fields</v-btn>
  </v-card>
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
    closeForm(){
      this.$emit('close-form')
    },
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

              this.reset();
            }else{
              this.isStartBiggerThanEnd = true;
            }
        }else if(this.startDate == ''){
            this.isStartDateNotInserted = true;
        }else{
            this.isEndDateNotInserted = true;
        }
    },
    reset(){
        this.isStartDateNotInserted = false;
        this.isEndDateNotInserted = false;
        this.isStartBiggerThanEnd = false;
        this.startDate = '',
        this.endDate = '',
        this.$refs.form.reset()
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.addHeadache()
      }
    }
 }
}
</script>

<style scoped>
    .date-picker-container{
        display: inline-block;
    }
    
    .close-btn-container{
      width: 100%;
      display: flex;
      padding: 1%;
    }
    
    #add-to-list{
      margin-bottom: 2vmin;
    }

    .fields-container{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }

    .date-picker-container,
    .fields-container{
        padding: 2vmin;
    }

    .date-picker-container *,
    .fields-container *{
        margin-bottom: 2vmin;
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
        padding: 2vmin;
    }

    form{
      padding-bottom: 0;
    }
    
    p{
      text-align: center;
    }

    form div{
        display: flex;
        padding: 2vmin;
    }

    .v-picker{
      border: 1px solid rgba(0,0,0,0.12);
      box-shadow: none;
    }

    
</style>