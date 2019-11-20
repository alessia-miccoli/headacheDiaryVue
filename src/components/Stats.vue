<template>
  <div>
      <div id="appbar-container">
        <v-app-bar color="primary">
            <v-toolbar-title class="white--text">Stats</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon class="action-btn">mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Headache-Form',
  data(){        
    //
  },
  methods: {
    
  }
}
</script>

<style scoped>
    #appbar-container{
        width: 100vw;
    }

    .action-btn{
        color: white;
    }
</style>