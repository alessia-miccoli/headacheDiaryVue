<template>
  <div>
    <p v-if="medicines.length === 0">No medicines inserted</p>
    <p class="d-flex align-center justify-space-between"
    :key="medicine.name" 
    v-for="medicine in medicines">
      {{medicine.name}} - {{medicine.isEffective? 'effective' : 'not effective'}} 
      <span>
        <v-btn depressed x-small fab color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn depressed x-small fab color="primary"><v-icon>mdi-delete</v-icon></v-btn>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'medicine-list',
  props: [
    'medicines'
  ]
}
</script>

<style scoped>
  p{
    line-height: 10px;
  }

  .v-btn + .v-btn{
    margin-left: 20px;
  }

</style>