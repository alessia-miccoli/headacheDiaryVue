<template>
  <v-list>
    <v-list-item v-for="(medicine, index) in medicineList" :key="index"
        class="d-flex flex-column align-center justify-center medicine">
        <p><b>Medicine: </b>{{medicine.medicineName.toLowerCase()}}</p>
        <hr>
        <p><b>Quantity: </b>{{medicine.quantity}}</p>
        <hr>
        <p><b>Effective: </b>{{medicine.effective === true ? "yes" : "no"}}</p>
        <hr>
        <div class="btn-container">
          <v-btn color="primary" outlined @click="removeMedicine">Remove</v-btn>
        </div>
    </v-list-item>
    
  </v-list>
</template>

<script>
export default {
  name: 'Medicine',
  props: ['medicineList'],
  methods: {
    removeMedicine(){
     alert(this.index)
    }
  }
}
</script>

<style scoped>
  .medicine{
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 2%;
    margin-bottom: 2%;
  }

  hr{
    width: 100%;
    border-top:rgba(0, 0, 0, 0.12)
  }

  p{
    margin: 0!important;
  }

  .btn-container{
    padding-top: 2%;
  }
</style>