<template>
  <div>
    <v-navigation-drawer app mini-variant>
      <div @click.right.exact="showAppBarMenu">
        <v-list>
          <v-tooltip right v-for="(item, index) in appItems" :key="index">
            <template v-slot:activator="{ on }">
              <v-list-item v-on="on">
                <router-link :to='"/" + item.route'>
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                </router-link>
              </v-list-item>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-menu v-model="isAppBarMenuVisibleModel" :position-x="x" :position-y="y" absolute offset-x
            :close-on-content-click="false">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" @click="doSomething">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

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
      { title: 'All Apps', icon: 'fas fa-th', route: 'all' }
    ],
    isAppBarMenuVisibleModel: false,
    menuItems: [
      { title: 'Auto-expand', view: '' },
      { title: 'Dense', view: '' }
    ],
    x: 0,
    y: 0
  }),
  methods: {
    doSomething: () => {
      console.log('doSomething()')
    },
    showAppBarMenu (e) {
      e.preventDefault()
      this.isAppBarMenuVisibleModel = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.isAppBarMenuVisibleModel = true
      })
    }
  }
}
</script>

<style scoped>

</style>
