<template>
  <div v-if="headaches.length > 0" >
        <v-tabs v-for="(headache, index) in headaches" v-bind:key="index*100+1">
          <v-tab>{{headache.startDate}} - {{headache.endDate}}</v-tab>
          <v-tab-item>
            <Headache :headache="headache" :index="index"/>
          </v-tab-item>
        </v-tabs>
  </div>
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
  // methods: {
  //   removeHeadache(index){
  //     this.$emit('remove-h', index);
  //   }
  // }
}
</script>

<style scoped>
   
</style>