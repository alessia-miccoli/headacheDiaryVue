<template>
  <v-content>
    <v-form class="form-container" ref="form">
      <h2>CREATE NEW HEADACHE</h2>
      <v-text-field
        :rules="dateRule"
        v-model="startDate"
        label="Start Date, format: dd/mm/yyyy"
        required
      ></v-text-field>
      <v-text-field
        :rules="dateRule"
        v-model="endDate"
        label="Start Date, format: dd/mm/yyyy"
        required
      ></v-text-field>
      <h3>Select Headache Intensity:</h3>
      <div class="d-flex align-center justify-space-between chips-container">
        <v-chip @click="intensity = 'Light'" :disabled="intensity == 'Light' ? true : false" color="primary">Light</v-chip>
        <v-chip @click="intensity = 'Medium'" :disabled="intensity == 'Medium' ? true : false" color="primary">Medium</v-chip>
        <v-chip @click="intensity = 'Strong'" :disabled="intensity == 'Strong' ? true : false" color="primary">Strong</v-chip>
      </div>
      <h3>Medicine(s) taken:</h3>
      <MedicineList :medicines="medicines"/>
      <div class="medicine-container">
        <div>
          <v-text-field
            v-model="medicineName"
            label="Medicine name"
            required
          ></v-text-field>
          <h4>Was it effective?</h4>
          <div class="d-flex align-center justify-space-around chips-container">
            <v-chip @click="isEffective = true" :disabled="isEffective ? true : false" color="primary">Yes</v-chip>
            <v-chip @click="isEffective = false" :disabled="(isEffective == false && isEffective !== null) ? true : false"  v-model="isEffective" color="primary">No</v-chip>
          </div>
        </div>
        <div class="d-flex align-center justify-center chips-container">
          <v-btn @click="addMedicineToList" depressed class="w-100" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
        </div>
      </div>
      <div class="d-flex align-center justify-space-around top-margin">
        <v-btn @click="cancel" color="primary" class="half">Cancel</v-btn>
        <v-btn @click="save" color="primary" class="half">Save</v-btn>
      </div>
    </v-form>
  </v-content>
</template>

<script>
import MedicineList from '../components/MedicineList'
import { mapActions } from 'vuex';

export default {
  name: 'new-headache-form-page',
  components: {
    MedicineList,
  },
  data: ()=> ({
    startDate: '',
    endDate: '',
    medicineName: '',
    intensity: '',
    isEffective: null,
    medicines: [],
    dateRule: [
      v => !!v || 'This field is required',
      v => /\d{2}\/\d{2}\/\d{4}/.test(v) || 'The date format is not correct',
      v => parseInt(v.split("/")[0])<=31 || 'The day number should be between 01 and 31',
      v => parseInt(v.split("/")[1])<=12 || 'The month number should be between 01 and 12'
    ],
  }),
  methods: {
    ...mapActions([
      'addToList'
    ]),
    addMedicineToList(){
      if(this.medicineName !== ''){
        this.medicines.push({
          name: this.medicineName,
          isEffective: this.isEffective
        });
        this.isEffective = null;
        this.medicineName = '';
        this.$forceUpdate();
      }
    },
    cancel(){
      this.$refs.form.reset();
      this.medicines = [];
      this.isEffective = null;
    },
    save(){
      const headache = {
        startDate: this.startDate,
        endDate: this.endDate,
        medicineName: this.medicineName,
        intensity: this.intensity,
        medicines: this.medicines,
      }
      this.addToList(headache);
      this.cancel();
    }
  },
}
</script>

<style scoped>
  .form-container{
    padding: 20px;
  }

  h3, h4{
    margin-bottom: 20px;
  }

  .w-100{
    width: 100%;
    margin-top: 20px;
  }

  .medicine-container{
    border: 1px solid #5c6bc06e;
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
  }

  .chips-container{
    margin-bottom: 20px;
  }

  .half{
    width: calc(50% - 10px);
  }

  .top-margin{
    margin-top: 20px;
  }

  .v-chip{
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .v-btn + .v-btn{
    margin-left: 20px;
  }

</style>