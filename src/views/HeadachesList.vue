<template>
  <v-content>
    <v-card>
      <v-card-title>
        Headaches List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
      :headers="headers"
      :search="search"
      :items="headaches"
      :items-per-page="5"
      >
      <template v-slot:item.medicines="{ item }">
        <div class="medicine-container" v-for="medicine in item.medicines" :key="medicine.name" >
          <div><b>{{medicine.name}}</b></div>
          <div>{{medicine.isEffective ? 'effective' : 'not effective'}}</div>
        </div>
      </template>
      </v-data-table>
    </v-card>
  </v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'headache-list',
  data: ()=>({
    search: '',
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