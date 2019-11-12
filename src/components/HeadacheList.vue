<template>
  <div v-if="headaches.length > 0" >
      <div v-for="(headache, index) in headaches"  v-bind:key="index">
        <Headache :headache="headache" :index="index" />
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
  }
}
</script>

<style scoped>

</style>