<template>
  <v-system-bar app window lights-out>
    <v-menu offset-y open-on-hover transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" v-on="on" text tile>OS</v-btn>
      </template>
      <v-list>
        <template v-for="(item, index) in osMenuItems">
          <v-divider v-if='item.isDivider' :key="index" />
          <v-list-item v-else-if='item.app' :key="index" @click="$router.showApp(item.app.path)">
            <v-list-item-title>{{ item.app.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-else :key="index" @click="doSomething">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y open-on-hover transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" v-on="on" text tile>App</v-btn>
      </template>
      <v-list>
        <template v-for="(item, index) in appMenuItems">
          <v-divider v-if='item.isDivider' :key="index" />
          <v-list-item v-else-if='item.app' :key="index" @click="$router.showApp(item.app.path)">
            <v-list-item-title>{{ item.app.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item v-else :key="index" @click="doSomething">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <v-spacer />
    <span>File: /users/dan/workspace-npm/ultimate-app</span>
    <v-spacer />
    <span>Playing: Moonlight Sonata by Beethoven</span>
    <!--    <span>Playing: Bad Romance by Lady Gaga (<a>lyrics</a>)</span>-->
    <v-spacer />
    <v-icon>{{ iconWifi }}</v-icon>
    <v-icon>{{ iconBatteryFull }}</v-icon>

    <v-menu :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on }">
        <div v-on="on">{{ currentDateTime }}</div>
      </template>
      <v-card>
        <v-row>
          <v-date-picker/>
          <v-time-picker></v-time-picker>
        </v-row>
        <v-row>
        <v-spacer/>
          <v-btn>Save</v-btn>
        </v-row>
      </v-card>
    </v-menu>
  </v-system-bar>
</template>

<script>
import apps from '@/utils/apps'
import dateUtils from '@/utils/date-utils'
import icons from '@/utils/icons'

export default {
  name: 'AppMenuBar',
  data: () => ({
    osMenuItems: [
      { title: 'Apps >', action: '' },
      { app: apps.bookmarks },
      { app: apps.browser },
      { app: apps.email },
      { app: apps.learn },
      { app: apps.notes },
      { app: apps.textEditor },
      { isDivider: true },
      { app: apps.shortcuts },
      { app: apps.settings },
      { isDivider: true },
      { title: 'Change Profile...', action: 'osChangeProfile' },
      { title: 'Sign Out', action: 'osSignOut' }
    ],
    appMenuItems: [
      { title: 'New', action: '' },
      { title: 'Open...', action: '' },
      { title: 'Save', action: '' },
      { title: 'Save As...', action: '' },
      { isDivider: true },
      { title: 'Edit >', action: '' },
      { title: 'Search', action: '' },
      { isDivider: true },
      { title: 'Minimize', action: '' },
      { title: 'Maximize', action: '' },
      { isDivider: true },
      { title: 'Quit', action: '' }
    ],
    iconBatteryFull: icons.batteryFull,
    iconWifi: icons.wifi,
    currentDateTime: ''
  }),
  methods: {
    doSomething () {
      console.log('doSomething()')
    },
    updateCurrentDateTime () {
      this.currentDateTime = dateUtils.formatAsUserDateHourMinute(new Date())
    }
  },
  mounted () {
    this.updateCurrentDateTime()
    setInterval(() => {
      this.updateCurrentDateTime()
    }, 60 * 1000)
  }
}
</script>

<style scoped>

</style>
