<template>
<v-card outlined v-if="headaches.length > 0">
  <v-card-title>Headache List</v-card-title>
  <v-simple-table dense>
    <template v-slot:default>
    <thead>
      <tr color="secondary">
        <th class="text-left">Start Date</th>
        <th class="text-left">End Date</th>
        <th class="text-left">Type</th>
        <th class="text-left">Comments</th>
      </tr>
    </thead>
    
      <tbody v-for="(headache, index) in headaches" v-bind:key="index*100+1">
        <Headache :headache="headache" :index="index"/>
      </tbody>
    </template>
  </v-simple-table>
</v-card>
</template>

<script>
import Headache from './Headache'
import { mapState } from 'vuex'

export default {
  name: 'Headache-List',
  components: {
      Headache
  },
  computed: mapState(['headaches'])
}
</script>

<style scoped>
   
</style>