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
          <td><div class="col">{{headache.startDate}}</div></td>
          <td><div class="col">{{headache.endDate}}</div></td>
          <td class="d-flex flex-column">
            <div class="d-flex medicine-row" v-bind:key="medicine.name" v-for="medicine in headache.medicines">
              <div class="col">{{medicine.name}}</div>
              <div class="col">{{medicine.effective ? 'Effective' : 'Not Effective'}}</div>
            </div>
          </td>
        </tr>
      </table>
      <div class="d-flex align-center justify-center button-container">
        <v-btn depressed color="primary">Download Data</v-btn>
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
  border-bottom: 1px solid rgba(128, 128, 128, 0.199);
  text-align: center;
}

.col{
  background-color: rgba(128, 128, 128, 0.185);
  height: 100%;
}


tr, td{
  text-align: center;
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