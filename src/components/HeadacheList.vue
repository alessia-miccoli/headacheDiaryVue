<template>
  <v-card outlined v-if="headaches.length > 0" >
    <v-tabs>
      <v-tab v-for="(headache, index) in headaches" v-bind:key="index*100+1" flat tile>{{headache.startDate}} ~ {{headache.endDate}}</v-tab>
      <v-tab-item v-for="(headache, index) in headaches" v-bind:key="index*200+1" flat tile>
        <Headache :headache="headache" :index="index"/>
      </v-tab-item>
    </v-tabs>
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