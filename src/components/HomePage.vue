<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <v-card-title>TODO</v-card-title>
          <v-card-actions>
            <v-btn icon><v-icon>fas fa-bars</v-icon></v-btn>
          </v-card-actions>
          <todo-page class="pa-2" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card outlined>
          <v-card-title>Notes</v-card-title>
          <v-card-actions>
            <v-btn icon><v-icon>fas fa-bars</v-icon></v-btn>
          </v-card-actions>
          <notes-page class="pa-2" />
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="primary" rounded>Add Page</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoPage from '@/components/TodoPage.vue'
import NotesPage from '@/components/NotesPage.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { NotesPage, TodoPage },
  data: () => ({
  })
})
</script>
