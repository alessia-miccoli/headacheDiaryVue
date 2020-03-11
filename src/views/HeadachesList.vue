<template>
  <v-content>
    <v-data-table
      :headers="headers"
      :items="headaches"
      :items-per-page="5"
      class="elevation-1"
    >
    <template v-slot:item.medicines="{ item }">
      <div class="medicine-container" v-for="medicine in item.medicines" :key="medicine.name" >
        <div><b>{{medicine.name}}</b></div>
        <div>{{medicine.effective ? 'effective' : 'not effective'}}</div>
      </div>
    </template>
    </v-data-table>
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
      align: 'center',
      value: 'startDate',
    },
    { text: 'End Date', align: 'center', value: 'endDate' },
    { text: 'Intensity', align: 'center', value: 'intensity' },
    { text: 'Medicines', align: 'center', value: 'medicines' },
  ],
  }),
  computed: {
    ...mapState({
      headaches: state => state.headaches.headaches
    })
  }
}
</script>

<style lang="scss" scoped>
  .medicine-container{
    display: flex;
    justify-content: space-around;
  }

  .medicine-container {
    div + div {
      margin-left: 10px;
    }
  }
</style>