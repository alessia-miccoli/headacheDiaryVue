<template>
  <v-content>
    <v-data-table
      :headers="headers"
      :items="headaches"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'headache-list',
  data: ()=>({
    headers: [
    {
      text: 'Start Date',
      value: 'startDate',
    },
    { text: 'End Date', value: 'endDate' },
    { text: 'Intensity', value: 'intensity' },
    { text: 'Medicines', value: 'medicines' },
  ],
  }),
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