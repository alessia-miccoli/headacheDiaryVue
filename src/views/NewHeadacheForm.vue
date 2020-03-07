<template>
  <v-content>
    <div class="form-container">
      <h2>CREATE NEW HEADACHE</h2>
      <v-text-field
        v-model="startDate"
        label="Start Date, format: dd/mm/yyyy"
        required
      ></v-text-field>
      <v-text-field
        v-model="endDate"
        label="Start Date, format: dd/mm/yyyy"
        required
      ></v-text-field>
      <h3>Select Headache Intensity:</h3>
      <div class="d-flex align-center justify-space-between chips-container">
        <v-chip color="primary">Light</v-chip>
        <v-chip color="primary">Medium</v-chip>
        <v-chip color="primary">Strong</v-chip>
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
            <v-chip @click="isEffective = true" :disabled="isEffective? true : false" color="primary">Yes</v-chip>
            <v-chip @click="isEffective = false" :disabled="(isEffective == false && isEffective !== null) ? true : false" v-model="isEffective" color="primary">No</v-chip>
          </div>
        </div>
        <div class="d-flex align-center justify-center chips-container">
          <v-btn @click="addMedicineToList" depressed class="w-100" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
        </div>
      </div>
      <div class="d-flex align-center justify-space-around top-margin">
        <v-btn depressed color="primary" class="half">Cancel</v-btn>
        <v-btn depressed color="primary" class="half">Save</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
import MedicineList from '../components/MedicineList'

export default {
  name: 'new-headache-form-page',
  components: {
    MedicineList,
  },
  data: ()=> ({
    startDate: '',
    endDate: '',
    medicineName: '',
    isEffective: null,
    medicines: [],
  }),
  methods: {
    addMedicineToList(){
      this.medicines.push({
        name: this.medicineName,
        isEffective: this.isEffective
      });
      this.medicineName = '',
      this.isEffective = null
    }
  }
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