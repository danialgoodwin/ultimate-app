<template>
  <div @click.right.exact="showAppBarRightClickMenu">
    <v-navigation-drawer app mini-variant permanent>
      <v-list>
        <v-list-item-group mandatory max=1 active-class="selected-app">
          <template v-for="(item, index) in appItems">
            <v-tooltip right :key="index" transition="slide-x-transition" close-delay='100'>
              <template v-slot:activator="{ on }">
                <v-list-item v-shortkey="['alt', index + 1]" @shortkey='item.action()' @click='item.action()' v-on="on">
                  <v-list-item-icon><v-spacer/><v-icon>{{ item.icon }}</v-icon><v-spacer/></v-list-item-icon>
                </v-list-item>
              </template>
              <span>{{ item.title }} (Alt + {{ index + 1 }})</span>
            </v-tooltip>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-menu v-model="isAppBarMenuVisibleModel" :position-x="x" :position-y="y" absolute offset-x :close-on-content-click="false">
      <v-list>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" @click="doSomething">
          <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { routerMixins } from '@/mixins/router-mixins'
import * as icons from '@/utils/icons'

export default {
  name: 'AppBar',
  data: () => ({
    appItems: [
      {
        title: 'Home',
        icon: icons.home,
        route: '/',
        action: () => {
          routerMixins.methods.goToHome()
        }
      },
      {
        title: 'Notes',
        icon: icons.notes,
        route: '/notes',
        action: () => {
          routerMixins.methods.goToNotes()
        }
      },
      {
        title: 'Text Editor',
        icon: icons.textEditor,
        route: '/text',
        action: () => {
          routerMixins.methods.goToTextEditor()
        }
      },
      {
        title: 'Browser',
        icon: icons.browser,
        route: '/browser',
        action: () => {
          routerMixins.methods.goToBrowser()
        }
      },
      {
        title: 'Calendar',
        icon: icons.calendar,
        route: '/calendar',
        action: () => {
          routerMixins.methods.goToCalendar()
        }
      },
      {
        title: 'Learn',
        icon: icons.learn,
        route: '/learn',
        action: () => {
          routerMixins.methods.goToLearn()
        }
      },
      // {
      //   title: 'Social',
      //   icon: icons.social,
      //   route: '/social',
      //   action: () => {
      //     routerMixins.methods.goToSocial()
      //   }
      // },
      {
        title: 'All Apps',
        icon: icons.allApps,
        route: '/all',
        action: () => {
          routerMixins.methods.goToAllApps()
        }
      }
    ],
    isAppBarMenuVisibleModel: false,
    menuItems: [
      {
        title: 'Auto-expand',
        view: ''
      },
      {
        title: 'Dense',
        view: ''
      }
    ],
    x: 0,
    y: 0,
    mini: true
  }),
  computed: {
  },
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
  border-right: 5px solid skyblue;
}
</style>
