import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.darken4, // #E53935
        secondary: colors.teal.darken3, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
