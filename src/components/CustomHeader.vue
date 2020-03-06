<template>
  <div>
    <v-app-bar color="primary">
      <router-link to="/new-headache">
        <img class="logo" width="40px" src="@/assets/calendar.png"/>
      </router-link>
      <v-toolbar-title class="white--text">Headache Diary</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/headache-list"><v-btn outlined color="white">Go to list</v-btn></router-link>
      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'custom-header'
}
</script>

<style scoped>
  .logo{
    margin-right: 20px;
  }
</style>