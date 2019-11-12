<template>
<div id="headache-container">
    <div>Type: {{headache.type}}</div>
    <div>Started: {{headache.startDate}}</div>
    <div>Ended: {{headache.endDate}}</div>
    <div v-if="headache.comments !== ''">Comments: {{headache.comments}}</div>
    <div id="button-container">
        <button id="remove">Remove</button>
    </div>
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
        border-bottom: 1px solid #05668D;
        background-color: #427AA1;
        color: #FCFAFA;
    }

    #headache-container div{
        padding: 10px;
        white-space: nowrap;
    }

    #button-container{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: -10px;
    }

    button:hover{
        background-color: #1B7397;
        color: #FCFAFA;
    }

</style>