<template>
  <div headache-list v-if="headaches.length > 0" >
      <div v-for="(headache, index) in headaches"  v-bind:key="index">
        <Headache :headache="headache" :index="index" @remove-headache='removeHeadache'/>
      </div>
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