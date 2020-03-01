<template>
  <v-row>
    <v-col cols="12" sm="4" md="3" lg="2">
      <v-text-field name="search" label="Search" :prepend-inner-icon="iconSearch" solo flat hide-details></v-text-field>
      <v-list>
        <v-row><v-subheader>Pages<dan-fab class='ml-8' text='Add Page' /></v-subheader></v-row>
        <template v-for="(item, index) in pages">
          <v-divider v-if='item.isDivider' :key="index"/>
          <v-list-item v-else :key="index" @click="doSomething">
            <v-list-item-action v-if='item.icon'>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
    <v-col cols="12" sm="8" md="9" lg="10">
      <v-row>
        <notes-card store-id='notes-card-1'/>
        <notes-card store-id='notes-card-2'/>
        <notes-card store-id='notes-card-3'/>
        <notes-card store-id='notes-card-4'/>
        <notes-card store-id='notes-card-5'/>
        <notes-card store-id='notes-card-6'/>
      </v-row>
      <v-row>
        <dan-fab class="ma-2" text='Add Note' />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import NotesCard from '@/components/NotesCard'
import * as icons from '@/utils/icons'
import DanFab from '@/components/dan-fab'

const iconKeyboard = icons.keyboard
const iconSettings = icons.settings
const iconTrash = icons.trash

export default {
  name: 'NotesPage',
  components: { DanFab, NotesCard },
  data: () => ({
    pages: [
      {
        title: 'Best Ideas',
        action: ''
      },
      {
        title: 'Secrets',
        action: 'goToTextEditor'
      },
      {
        title: 'Family',
        action: 'goToNotes'
      },
      {
        title: 'Other',
        action: 'osChangeProfile'
      },
      {
        title: 'TODOs',
        action: 'osSignOut'
      },
      { isDivider: true },
      {
        title: 'Settings',
        icon: iconSettings,
        action: 'showSettings'
      },
      {
        title: 'Trash',
        icon: iconTrash,
        action: 'showTrash'
      },
      {
        title: 'Shortcuts',
        icon: iconKeyboard,
        action: 'showKeyboardShortcuts'
      }
    ],
    actions: [],
    iconSearch: icons.search
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
