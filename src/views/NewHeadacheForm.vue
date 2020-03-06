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
      <div class="d-flex align-center justify-space-between btns-container">
        <v-btn color="primary">Light</v-btn>
        <v-btn color="primary">Medium</v-btn>
        <v-btn color="primary">Strong</v-btn>
      </div>
      <h3>Medicine(s) taken:</h3>
      <MedicineList/>
      <div class="medicine-container">
        <div>
          <v-text-field
            v-model="medicineName"
            label="Medicine name"
            required
          ></v-text-field>
          <h4>Was it effective?</h4>
          <div class="d-flex align-center justify-space-around btns-container">
            <v-btn color="primary">Yes</v-btn>
            <v-btn color="primary">No</v-btn>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center btns-container">
          <v-btn class="w-100" color="primary"><v-icon>mdi-plus</v-icon></v-btn>
        </div>
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
    medicineName: ''
  })
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

  .btns-container{
    margin-bottom: 20px;
  }

</style>