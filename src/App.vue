<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text exact :to="{ name: 'Home' }">Home</v-btn>
      <v-btn text exact :to="{ name: 'History' }">History</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import splitPane from 'vue-splitpane'
// Vue.component('split-pane', splitPane);

export default {
  name: 'App',

  data: () => ({
    item: [],
  }),

};
</script>
