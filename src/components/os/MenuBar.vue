<template>
  <v-system-bar app window lights-out>
    <v-menu offset-y open-on-hover transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">
          OS
        </v-btn>
      </template>
      <v-list>
        <template v-for="(item, index) in osMenuItems">
          <v-divider v-if='item.isDivider' :key="index" />
          <v-list-item v-else :key="index" @click="doSomething">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <v-menu offset-y open-on-hover transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">
          App
        </v-btn>
      </template>
      <v-list>
        <template v-for="(item, index) in appMenuItems">
          <v-divider v-if='item.isDivider' :key="index" />
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
    <v-icon>fas fa-wifi</v-icon>
    <v-icon>fas fa-battery-full</v-icon>

    <v-menu :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on }">
        <div v-on="on">2020-02-16 3:14pm</div>
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
export default {
  name: 'AppMenuBar',
  data: () => ({
    osMenuItems: [
      { title: 'Apps >', action: '' },
      { title: 'Text Editor', action: 'goToTextEditor' },
      { title: 'Notes', action: 'goToNotes' },
      { title: 'Browser', action: 'goToBrowser' },
      { title: 'Email', action: 'goToEmail' },
      { isDivider: true },
      { title: 'Settings', action: 'goToSettings' },
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
    ]
  }),
  methods: {
    doSomething: () => {
      console.log('doSomething()')
    }
  }
}
</script>

<style scoped>

</style>
