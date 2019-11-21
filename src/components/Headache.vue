<template>
  <tr @click="toggleHeadache">
    <td v-if="!toggledHeadache">{{headache.startDate}}</td>
    <td @click.stop v-else>
      <input type="date" v-model="headache.startDate">
    </td>
    <td v-if="!toggledHeadache">{{headache.endDate}}</td>
    <td @click.stop v-else>
      <input type="date" v-model="headache.endDate">
    </td>
    <td v-if="!toggledHeadache">{{headache.type}}</td>
    <td @click.stop v-else>
      <v-radio-group class="d-flex flex-start" v-model="headache.type" :mandatory="true">
          <v-radio label="light" value="Light"></v-radio>
          <v-radio label="medium" value="Medium"></v-radio>
          <v-radio label="strong" value="Strong"></v-radio>
        </v-radio-group>
    </td>
    <td v-if="!toggledHeadache">{{headache.comments}}</td>
    <td @click.stop v-else>
      <v-text-field v-model="headache.comments"></v-text-field>
    </td>
    <td v-if="!toggledHeadache">
      <p v-for="medicine in headache.medicineList" :key="medicine.medicineName">{{medicine.medicineName}}</p>
    </td>
    <td v-else>
      <div v-for="medicine in headache.medicineList" :key="medicine.MedicineName">
        <v-text-field @click.stop v-model="medicine.medicineName"></v-text-field>
      </div>
    </td>
    <td v-if="!toggledHeadache">        
      <v-btn outlined color="primary" id="remove" @click.stop="removeHeadache">Remove</v-btn></td>
    <td v-else>
      <v-btn outlined color="primary" id="remove" @click.stop="toggleHeadache">Save</v-btn>
    </td>
   </tr>  
</template>

<script>

export default {
  name: 'Headache',
  data(){
    return {
        toggledHeadache: false
    }
  },
  props: ['headache'],
  methods: {
    removeHeadache(){
        this.$store.commit('deleteHeadache', this.headache.id);
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

    p{
      margin: 0!important;
    }
</style>