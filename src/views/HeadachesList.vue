<template>
  <v-content>
    <div class="headache-list-container">
      <table class="table">
        <tr class="table-header">
          <th>Start Date</th>
          <th>End Date</th>
          <th>Medicines</th>
        </tr>
        <tr v-bind:key="headache.startDate" v-for="headache in headaches">
          <td>{{headache.startDate}}</td>
          <td>{{headache.endDate}}</td>
          <td class="d-flex flex-column">
            <div class="d-flex medicine-row" v-bind:key="medicine.name" v-for="medicine in headache.medicines">
              <div>{{medicine.name}}</div>
              <div>{{medicine.effective ? 'Effective' : 'Not Effective'}}</div>
            </div>
          </td>
        </tr>
      </table>
      <div class="d-flex align-center justify-center button-container">
        <v-btn color="primary">Download Data</v-btn>
      </div>
    </div>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'headache-list',
  computed: {
    ...mapState({
      headaches: state => state.headaches.headaches
    })
  }
}
</script>

<style scoped>

.table{
  width: 100%;
}

.medicine-row div{
  padding: 5px 20px;
  width: 100%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.199);
  text-align: center;
}


tr, td{
  text-align: center;
  border: 1px solid rgba(128, 128, 128, 0.199);
}

.table-header{
  background-color: #5c6bc0;
  color: white;
}

th{
  padding: 20px 0;
  width: 33%;
}

.headache-list-container{
  padding: 20px;
}

.button-container{
  width: 100%;
  padding: 20px;
}
</style>