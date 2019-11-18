<template>
  <div v-if="headaches.length > 0" >
        <v-tabs>
          <v-tab v-for="headache in headaches" v-bind:key="headache.startDate">{{headache.startDate}} - {{headache.endDate}}</v-tab>
          <v-tab-item v-for="(headache, index) in headaches" v-bind:key="index*100+1">
            <Headache :headache="headache" :index="index" @remove-headache='removeHeadache'/>
          </v-tab-item>
        </v-tabs>
  </div>
</template>

<script>
import Headache from './Headache'

export default {
  name: 'Headache-List',
  props: ['headaches'],
  components: {
      Headache
  },
  methods: {
    removeHeadache(index){
      this.$emit('remove-h', index);
    }
  }
}
</script>

<style scoped>
   
</style>