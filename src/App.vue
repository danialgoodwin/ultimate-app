<template>
  <v-app>
    <app-menu-bar />
    <!--<app-menu-bar v-if='{this.$router.currentRoute.showBreadcrumbs}'/>-->
    <app-bar/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppBar from '@/components/os/AppBar.vue'
import AppMenuBar from '@/components/os/MenuBar.vue'

export default Vue.extend({
  name: 'App',

  components: {
    AppMenuBar,
    AppBar
  },

  data: () => ({
  })
})
</script>
