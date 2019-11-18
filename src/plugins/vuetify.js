import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: colors.indigo.lighten1, 
          secondary: colors.indigo.lighten2, 
          accent: colors.indigo.lighten3,
        },
      },
    },
  })
