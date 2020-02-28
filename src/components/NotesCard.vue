<template>
  <v-hover>
    <v-card class="ma-2" >
      <v-form v-if="isEditMode">
        <v-text-field
          v-model="titleModel"
          placeholder="Title"
          solo
          full-width
          hide-details
          flat
        ></v-text-field>
        <v-textarea
          v-model="contentModel"
          placeholder="New Note"
          solo
          full-width
          hide-details
          flat
          rows="3"
        ></v-textarea>
      </v-form>
      <v-card-title v-if="!isEditMode" v-model="titleModel"></v-card-title>
      <v-card-text v-if="!isEditMode" v-model="contentModel"></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon slot="activator" @click="doSomething" v-on="on"><v-icon>fas fa-bars</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-item @click="doSomething"><v-list-item-title>Remove</v-list-item-title></v-list-item>
          </v-list>
        </v-menu>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'NotesCard',
  data: () => {
    return {
      isEditMode: true,
      titleModel: '',
      contentModel: ''
    }
  },
  methods: {
    doSomething: () => {
      console.log('doSomething()')
    }
  }
}
</script>

<style scoped>

</style>
