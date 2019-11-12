<template>
<div id="headache-container">
    <div>Type: {{headache.type}}</div>
    <div>Started: {{headache.startDate}}</div>
    <div>Ended: {{headache.endDate}}</div>
    <div v-if="headache.comments !== ''">Comments: {{headache.comments}}</div>
</div>
</template>

<script>
export default {
  name: 'Headache-Form',
  props: ['headache', 'index']
}
</script>

<style scoped>
    #headache-container{
        display: flex;
        border: 1px solid black;
    }

    #headache-container div{
        padding: 10px;
    }
</style>