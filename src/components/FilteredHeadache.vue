<template>
  <tr @click="toggleHeadache">
    <td v-if="!toggledHeadache">{{filteredHeadache.startDate}}</td>
    <td @click.stop v-else>
      <input type="date" v-model="filteredHeadache.startDate">
    </td>
    <td v-if="!toggledHeadache">{{filteredHeadache.endDate}}</td>
    <td @click.stop v-else>
      <input type="date" v-model="filteredHeadache.endDate">
    </td>
    <td v-if="!toggledHeadache">{{filteredHeadache.type}}</td>
    <td @click.stop v-else>
      <v-radio-group class="d-flex flex-start" v-model="filteredHeadache.type" :mandatory="true">
          <v-radio label="light" value="Light"></v-radio>
          <v-radio label="medium" value="Medium"></v-radio>
          <v-radio label="strong" value="Strong"></v-radio>
        </v-radio-group>
    </td>
    <td v-if="!toggledHeadache">{{filteredHeadache.comments}}</td>
    <td v-else>
      <v-text-field @click.stop v-model="filteredHeadache.comments"></v-text-field>
    </td>
    <td v-if="!toggledHeadache">
      <p v-for="medicine in filteredHeadache.medicineList" :key="medicine.medicineName">{{medicine.medicineName}}</p>
    </td>
    <td v-else>
      <div v-for="medicine in filteredHeadache.medicineList" :key="medicine.MedicineName">
        <v-text-field @click.stop v-model="medicine.medicineName"></v-text-field>
      </div>
    </td>
    <td v-if="!toggledHeadache">        
      <v-btn outlined color="primary" id="remove" @click.stop="removeFilteredHeadache">Remove</v-btn></td>
    <td v-else>
      <v-btn outlined color="primary" id="remove" @click.stop="toggleHeadache">Save</v-btn>
    </td>
   </tr>  
</template>

<script>

export default {
  
  name: 'Headache-Form',
  data(){
    return {
        toggledHeadache: false
    }
  },
  props: ['filteredHeadache'],
  methods: {
    removeFilteredHeadache(){
        this.$emit('delete-filtered', this.filteredHeadache.id)
    },
    toggleHeadache(){
        this.toggledHeadache = !this.toggledHeadache;
    }
  }
}
</script>

<style scoped>
    #button-container{
      padding: 2vmin;
    }
</style>