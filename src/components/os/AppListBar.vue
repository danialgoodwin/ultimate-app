<template>
  <v-navigation-drawer app expand-on-hover>
    <v-list>
      <v-list-item v-for="(item, index) in appItems" :key="index" @click="asdf" link>
        <router-link :to='"/" + item.route'>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppListBar',
  data: () => ({
    appItems: [
      { title: 'Text Editor', icon: 'fas fa-file-alt', route: 'text' },
      { title: 'Browser', icon: 'fab fa-chrome', route: 'browser' },
      { title: 'Notes', icon: 'fas fa-sticky-note', route: 'notes' },
      { title: 'Home', icon: 'fas fa-home', route: 'home' },
      { title: 'Calendar', icon: 'fas fa-calendar-alt', route: 'calendar' },
      { title: 'Social', icon: 'fas fa-comments', route: 'social' },
      { isDivider: true },
      { title: 'Settings', icon: 'fas fa-cog', route: 'settings' }
    ]
  })
}
</script>

<style scoped>

</style>
