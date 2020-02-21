<template>
  <v-app>
    <app-menu-bar/>
    <app-list-bar/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppListBar from '@/components/os/AppBar.vue'
import AppMenuBar from '@/components/os/MenuBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    AppMenuBar,
    AppListBar
  },

  data: () => ({
  })
})
</script>
