<template>
  <div>
    <v-navigation-drawer app mini-variant>
      <div @click.right.exact="showAppBarRightClickMenu">
        <v-list active-class="highlighted">
          <v-tooltip right v-for="(item, index) in appItems" :key="index">
            <template v-slot:activator="{ on }">
              <v-list-item
                v-shortkey="['alt', index + 1]"
                @shortkey='item.action()'
                v-on="on"
                :class="$router.currentRoute.path === item.route ? 'selected-app' : ''"
              >
                <router-link :to='item.route'>
                  <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-action>
                </router-link>
              </v-list-item>
            </template>
            <span>
              <span>{{ item.title }}</span>
              <span v-if="$router.currentRoute.path === item.route"> (selected)</span>
            </span>
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
import { routerMixins } from '@/mixins/router-mixins'

export default {
  name: 'AppBar',
  data: () => ({
    appItems: [
      { title: 'Text Editor', icon: 'fas fa-file-alt', route: '/text', action: () => { routerMixins.methods.goToTextEditor() } },
      { title: 'Browser', icon: 'fab fa-chrome', route: '/browser', action: () => { routerMixins.methods.goToBrowser() } },
      { title: 'Notes', icon: 'fas fa-sticky-note', route: '/notes', action: () => { routerMixins.methods.goToNotes() } },
      { title: 'Home', icon: 'fas fa-home', route: '/', action: () => { routerMixins.methods.goToHome() } },
      { title: 'Calendar', icon: 'fas fa-calendar-alt', route: '/calendar', action: () => { routerMixins.methods.goToCalendar() } },
      { title: 'Social', icon: 'fas fa-comments', route: '/social', action: () => { routerMixins.methods.goToSocial() } },
      { title: 'All Apps', icon: 'fas fa-th', route: '/all', action: () => { routerMixins.methods.goToAllApps() } }
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
      routerMixins.methods.goToAllApps()
    },
    showAppBarRightClickMenu (e) {
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
.selected-app {
  border-right: 6px solid orange;
  background-color: lightgray;
}
</style>
