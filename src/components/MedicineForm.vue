<template>
  <div v-if="medicineTaken" class="d-flex flex-column medicine-container">
    <div class=" d-flex align-center justify-center medicine-row">
        <v-text-field
          v-model="medicineName"
          label="Medicine Name">
        </v-text-field>
        <v-text-field
          :rules="[rules.isNumber]"
          v-model="quantity"
          label="Quantity">
        </v-text-field>
        <v-radio-group v-model="radio">
            <v-radio label="Effective"></v-radio>
            <v-radio label="Not Effective"></v-radio>
        </v-radio-group>
        <v-btn fab color="primary" x-small @click="addToList">
        <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
    <Medicine :medicineList="medicineList"/>
    <v-dialog v-model="openDialog"
      max-width="290">
      <v-card>
        <v-card-title>Error</v-card-title>
        <v-card-text>
          You must provide medicine name, quantity and if it was effective or not.
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="openDialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Medicine from './Medicine' 

export default {
  name: 'Medicine-Form',
  props: ['medicineTaken', 'medicineList'],
  components: {
    Medicine
  },
  data(){
    return {
      medicineName: '',
      quantity: '',
      radio: 0,
      rules: {
          isNumber: v => !isNaN(v) || 'please, insert numberic value'
      },
      openDialog: false
    }
  },
  computed: {
      effective: {
        get: function(){
          return (this.radio == 0 ? true : false)
        },
        //useless setter, just to avoid error in the console
        set: function(effective){
          this.effective = effective;
        }
      },
  },
  methods: {
    addToList(){
        if(this.medicineName !== '' && this.quantity != ''){
            this.medicineList.push({ 
                medicineName: this.medicineName,
                quantity: this.quantity,
                effective: this.effective
            })

            this.medicineName = '';
            this.quantity = '';
            this.effective = true
        }else{
            this.openDialog = true
        }
    }
  }
}
</script>

<style scoped>
  .medicine-row *{
    margin-right: 2%;
  }

  .medicine-container{
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.12);
    padding: 2%;
    margin-bottom: 2%;
  }
</style>