<template>
  <v-row>
    <v-col cols="12" sm="4" md="3" lg="2">
      <v-text-field name="search" label="Search" prepend-inner-icon="fas fa-search" solo flat hide-details></v-text-field>
      <v-list>
        <v-subheader>Pages</v-subheader>
        <v-btn color="primary" rounded>Add Page</v-btn>
        <template v-for="(item, index) in pages">
          <v-divider v-if='item.isDivider' :key="index" />
          <v-list-item v-else :key="index" @click="doSomething">
            <v-list-item-action v-if='item.icon'><v-icon>{{ item.icon }}</v-icon></v-list-item-action>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
    <v-col cols="12" sm="8" md="9" lg="10">
      <v-row>
        <notes-card />
        <notes-card />
        <notes-card />
        <notes-card />
        <notes-card />
        <notes-card />
      </v-row>
      <v-row>
        <v-btn class="ma-2" color="primary" rounded>Add Note</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import NotesCard from '@/components/NotesCard'
export default {
  name: 'NotesPage',
  components: { NotesCard },
  data: () => ({
    pages: [
      { title: 'Best Ideas', action: '' },
      { title: 'Secrets', action: 'goToTextEditor' },
      { title: 'Family', action: 'goToNotes' },
      { title: 'Other', action: 'osChangeProfile' },
      { title: 'TODOs', action: 'osSignOut' },
      { isDivider: true },
      { title: 'Settings', icon: 'fas fa-cog', action: 'showSettings' },
      { title: 'Trash', icon: 'fas fa-trash-alt', action: 'showTrash' },
      { title: 'Shortcuts', icon: 'fas fa-keyboard', action: 'showKeyboardShortcuts' }
    ],
    actions: [

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
