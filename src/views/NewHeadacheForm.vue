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
      <div class="d-flex align-center justify-space-around">
        <v-btn color="primary">Light</v-btn>
        <v-btn color="primary">Medium</v-btn>
        <v-btn color="primary">Strong</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  name: 'new-headache-form-page',
  data: ()=> ({
    startDate: '',
    endDate: '',
  })
}
</script>

<style scoped>
  .form-container{
    padding: 20px;
  }

  h3{
    margin-bottom: 20px;
  }

</style>