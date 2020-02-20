<template>
  <v-navigation-drawer app expand-on-hover>
    <v-list>
      <v-list-item v-for="(item, index) in appItems" :key="index" @click="asdf" link>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppListBar',
  data: () => ({
    appItems: [
      { title: 'Text Editor', icon: 'fas fa-file-alt', action: 'goToTextEditor' },
      { title: 'Browser', icon: 'fab fa-chrome', action: 'goToBrowser' },
      { title: 'Notes', icon: 'fas fa-sticky-note', action: 'goToNotes' },
      { title: 'Home', icon: 'fas fa-home', action: 'goToHome' },
      { title: 'Calendar', icon: 'fas fa-calendar-alt', action: 'goToCalendar' },
      { title: 'Social', icon: 'fas fa-comments', action: 'goToSocial' },
      { isDivider: true },
      { title: 'Settings', icon: 'fas fa-cog', action: 'goToSettings' }
    ]
  })
}
</script>

<style scoped>

</style>
