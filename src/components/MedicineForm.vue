<template>
  <div v-if="medicineTaken" class="d-flex flex-column">
    <div class=" d-flex align-center justify-center medicine-row">
        <v-text-field
          v-model="medicineName"
          label="Medicine Name">
        </v-text-field>
        <v-text-field
          v-model="quantity"
          label="Quantity">
        </v-text-field>
        <v-radio-group v-model="effective" :mandatory="false">
            <v-radio label="Effective" value="true"></v-radio>
            <v-radio label="Not Effective" value="false"></v-radio>
      </v-radio-group>
        <v-btn fab color="primary" x-small @click="addToList">
        <v-icon>mdi-plus</v-icon>
        </v-btn>
    </div>
    <Medicine :medicineList="medicineList"/>
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
      effective: false
    }
  },
  methods: {
    addToList(){
        if(this.medicineName !== '' && this.quantity != ''){
            this.medicineList.push({ medicineName: this.medicineName, quantity: this.quantity})
            this.medicineName = '';
            this.quantity = '';
            this.effective = false
        }else{
            alert('error');
        }
    }
  }
//   components: { 
//     Medicine 
//   }
}
</script>

<style scoped>
  .medicine-row *{
    margin-right: 2%;
  }
</style>