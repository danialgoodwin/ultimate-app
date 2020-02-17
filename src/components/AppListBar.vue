<template>
  <v-navigation-drawer app expand-on-hover>
    <v-list>
      <v-list-item @click="goToTextEditor()">
        <v-list-item-action>
          <v-icon>fas fa-file-alt</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="goToBrowser()">
        <v-list-item-action>
          <v-icon>fab fa-chrome</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="goToNotes()">
        <v-list-item-action>
          <v-icon>fas fa-sticky-note</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="goToHome()">
        <v-list-item-action>
          <v-icon>fas fa-home</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="goToCalendar()">
        <v-list-item-action>
          <v-icon>fas fa-calendar-alt</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-list-item @click="goToSocial()">
        <v-list-item-action>
          <v-icon>fas fa-comments</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-spacer/>
      <v-divider/>
      <v-list-item @click="goToSocial()">
        <v-list-item-action>
          <v-icon>fas fa-cog</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppListBar'
}
</script>

<style scoped>

</style>
