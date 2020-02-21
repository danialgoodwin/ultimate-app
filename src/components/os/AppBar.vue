<template>
  <v-menu v-model="isAppBarMenuVisibleModel">
    <template v-slot:activator="{ on }">
      <v-navigation-drawer app expand-on-hover @click.right.exact="showAppBarMenu" @on="on">
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
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index" @click="TODO">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
let isAppBarMenuVisible = false

export default {
  name: 'AppListBar',
  data: () => ({
    appItems: [
      // Reference: https://fontawesome.com/icons?d=gallery
      { title: 'Text Editor', icon: 'fas fa-file-alt', route: 'text' },
      { title: 'Browser', icon: 'fab fa-chrome', route: 'browser' },
      { title: 'Notes', icon: 'fas fa-sticky-note', route: 'notes' },
      { title: 'Home', icon: 'fas fa-home', route: 'home' },
      { title: 'Calendar', icon: 'fas fa-calendar-alt', route: 'calendar' },
      { title: 'Social', icon: 'fas fa-comments', route: 'social' },
      { title: 'All Apps', icon: 'fas fa-th', route: 'all' },
      { isDivider: true },
      { title: 'Settings', icon: 'fas fa-cog', route: 'settings' }
    ],
    isAppBarMenuVisibleModel: isAppBarMenuVisible,
    menuItems: [
      { title: 'Auto-expand', view: '' },
      { title: 'Dense', view: '' },
      { title: '', view: '' }
    ]
  }),
  calculated: {
  },
  methods: {
    showAppBarMenu: () => {
      isAppBarMenuVisible = !isAppBarMenuVisible
    }
  }
}
</script>

<style scoped>

</style>
