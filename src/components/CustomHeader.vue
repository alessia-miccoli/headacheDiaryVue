<template>
  <div>
    <v-app-bar color="primary">
      <img class="logo" width="40px" src="@/assets/calendar.png"/>
      <v-toolbar-title class="white--text">Headache Diary</v-toolbar-title>
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