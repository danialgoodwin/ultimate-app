<template>
  <v-system-bar app window lights-out>
    <dan-menu name='OS' :menu-items='osMenuItems' @dan-menu-click='onMenuItemClick' />
    <dan-menu name='App' :menu-items='appMenuItems' @dan-menu-click='onMenuItemClick' />
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
import appRouter from '@/router/app-router'
import apps from '@/utils/apps'
import dateUtils from '@/utils/date-utils'
import icons from '@/utils/icons'
import DanMenu from '@/components/dan-menu'

export default {
  name: 'AppMenuBar',
  components: { DanMenu },
  data: () => ({
    osMenuItems: [
      {
        name: 'Apps',
        menu: [
          { name: apps.bookmarks.name, app: apps.bookmarks },
          { name: apps.browser.name, app: apps.browser },
          { name: apps.email.name, app: apps.email },
          { name: apps.learn.name, app: apps.learn },
          { name: apps.notes.name, app: apps.notes },
          { name: apps.textEditor.name, app: apps.textEditor },
          {
            name: 'System 1',
            menu: [
              { name: apps.bookmarks.name, app: apps.bookmarks },
              { name: apps.bookmarks.name, app: apps.bookmarks },
              { name: apps.bookmarks.name, app: apps.bookmarks },
              {
                name: 'System 2',
                menu: [
                  { name: apps.bookmarks.name, app: apps.bookmarks },
                  { name: apps.bookmarks.name, app: apps.bookmarks },
                  { name: apps.bookmarks.name, app: apps.bookmarks },
                  {
                    name: 'System 3',
                    menu: [
                      { name: apps.bookmarks.name, app: apps.bookmarks },
                      { name: apps.bookmarks.name, app: apps.bookmarks },
                      { name: apps.bookmarks.name, app: apps.bookmarks },
                      {
                        name: 'System 4',
                        menu: [
                          { name: apps.bookmarks.name, app: apps.bookmarks },
                          { name: apps.bookmarks.name, app: apps.bookmarks },
                          { name: apps.bookmarks.name, app: apps.bookmarks }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { isDivider: true },
      { name: apps.shortcuts.name, app: apps.shortcuts },
      { name: apps.settings.name, app: apps.settings },
      { isDivider: true },
      { name: 'Change Profile...', action: () => { console.log('osChangeProfile') } },
      { name: 'Sign Out', action: () => { console.log('osSignOut') } }
    ],
    appMenuItems: [
      { name: 'New', action: () => { console.log('new') } },
      { name: 'Open...', action: () => { console.log('open') } },
      { name: 'Save', action: () => { console.log('save') } },
      { name: 'Save As...', action: () => { console.log('save-as') } },
      { isDivider: true },
      { name: 'Edit >', action: () => { console.log('edit') } },
      { name: 'Search', action: () => { console.log('search') } },
      { isDivider: true },
      { name: 'Minimize', action: () => { console.log('minimize') } },
      { name: 'Maximize', action: () => { console.log('maximize') } },
      { isDivider: true },
      { name: 'Close', action: () => { console.log('close') } }
    ],
    iconBatteryFull: icons.batteryFull,
    iconWifi: icons.wifi,
    currentDateTime: ''
  }),
  methods: {
    onMenuItemClick (item) {
      console.log(`onMenuItemClick(), item=${item}`)
      if (item.app) {
        appRouter.showApp(item.app.path)
      } else if (item.action) {
        console.log(`    item.action()=${item}`)
        item.action()
      }
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
