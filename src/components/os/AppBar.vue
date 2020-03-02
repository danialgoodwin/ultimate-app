<template>
  <div @click.right.exact="showAppBarRightClickMenu">
    <v-navigation-drawer app mini-variant permanent>
      <v-list>
        <v-list-item-group mandatory max=1 active-class="selected-app">
          <template v-for="(appItem, index) in appItems">
            <v-tooltip right :key="index" transition="slide-x-transition" close-delay='100'>
              <template v-slot:activator="{ on }">
                <v-list-item v-shortkey="['alt', index + 1]" @shortkey='showApp(appItem.app)'
                    v-on="on" :to='appItem.app.path' exact link
                >
                  <v-list-item-icon><v-spacer/><v-icon>{{ appItem.app.icon }}</v-icon><v-spacer/></v-list-item-icon>
                  <!-- This empty 'v-list-item-content' is required to prevent the icon from moving when clicked -->
                  <v-list-item-content></v-list-item-content>
                </v-list-item>
              </template>
              <span>{{ appItem.app.name }} (Alt + {{ index + 1 }})</span>
            </v-tooltip>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-menu v-model="isAppBarMenuVisibleModel" :position-x="x" :position-y="y" absolute offset-x>
      <v-list>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" @click="doSomething">
          <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import appRouter from '@/router/app-router'
import apps from '@/utils/apps'

export default {
  name: 'AppBar',
  data: () => ({
    appItems: [
      { app: apps.home },
      { app: apps.terminal },
      { app: apps.notes },
      { app: apps.textEditor },
      { app: apps.browser },
      { app: apps.learn },
      { app: apps.calendar }
    ],
    isAppBarMenuVisibleModel: false,
    menuItems: [
      { title: 'Auto-expand', view: '' },
      { title: 'Dense', view: '' }
    ],
    x: 0,
    y: 0
  }),
  computed: {
  },
  methods: {
    doSomething: () => {
      console.log('doSomething()')
    },
    showApp (app) {
      appRouter.showApp(app.path)
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

<style lang='sass' scoped>
.selected-app
  border-right: 5px solid #1E90FF // TODOv2: Extract: blue-dodger
</style>
