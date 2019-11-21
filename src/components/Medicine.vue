<template>
  <v-list>
    <v-list-item v-for="medicine in medicineList" v-bind:key="medicine.medicineName">
      <div class="d-flex flex-column align-center justify-center medicine">
          <p><b>Medicine: </b>{{medicine.medicineName}}</p>
          <p><b>Quantity: </b>{{medicine.quantity}}</p>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'Medicine',
  props: ['medicineList']
}
</script>

<style scoped>
  .medicine{
    padding: 2%;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12)
  }

  p{
    margin: 0;
    padding: 0;
  }
</style>