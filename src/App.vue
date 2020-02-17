<template>
  <v-app>
    <app-menu-bar/>
    <app-list-bar/>
    <v-content>
      <home-page/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HomePage from '@/components/HomePage.vue'
import AppListBar from '@/components/AppListBar.vue'
import AppMenuBar from '@/components/AppMenuBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    AppMenuBar,
    AppListBar,
    HomePage
  },

  data: () => ({
    //
  })
})
</script>
