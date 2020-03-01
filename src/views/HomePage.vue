<template>
  <v-col>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class='pa-2' outlined>
          <v-row>
            <v-card-title>TODO</v-card-title>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn icon><v-icon>{{ iconMenu }}</v-icon></v-btn>
            </v-card-actions>
          </v-row>
          <todo-page />
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card class='pa-2' outlined>
          <v-row>
          <v-card-title>Notes</v-card-title>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn icon><v-icon>{{ iconMenu }}</v-icon></v-btn>
          </v-card-actions>
          </v-row>
          <notes-page />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <dan-fab text='Add App' />
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoPage from '@/components/TodoPage.vue'
import NotesPage from '@/views/NotesPage.vue'
import * as icons from '@/utils/icons'
import DanFab from '@/components/dan-fab.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { DanFab, NotesPage, TodoPage },
  data: () => {
    return {
      iconMenu: icons.menu
    }
  }
})
</script>
