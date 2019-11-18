<template>
  <v-card id="update-headache-container">
    <div id="update-headache">
      <div>
        <p class="label">Start Date:</p>
        <input type="date" v-model="headache.startDate" name="startDate">
      </div>
      <div>
          <p class="label">End Date:</p>
          <input type="date" v-model="headache.endDate" name="endDate">
      </div>
      <div>
          <p class="label">Type:</p>
        <select v-model="headache.type" name="type">
            <option value="Strong">Strong</option>
            <option value="Medium" selected>Medium</option>
            <option value="Light">Light</option>
        </select>
      </div>
      <div>
          <p class="label">Additional comments: </p>
          <input type="text" v-model="headache.comments" name="comments"><br/><br/>
      </div>
    </div>
      
      <button @click="save">Save</button>
  </v-card>
</template>

<script>
export default {
  name: 'Update-Headache',
  props: ['headache', 'toggledHeadache'],
  methods: {
      save(){
        this.$emit('toggle-headache', this.toggledHeadache);
    }
  }
}

</script>

<style scoped>
    #update-headache{
      display: flex;
      width: 100vw;
      justify-content: space-around;
      text-align: center;
    }

    #update-headache-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>