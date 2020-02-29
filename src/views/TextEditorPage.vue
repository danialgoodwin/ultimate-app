<template>
  <v-container>
    <v-toolbar short flat>
      <v-toolbar-title><v-text-field v-model="titleModel" hide-details placeholder='Untitled'></v-text-field></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon><v-icon>fas fa-bars</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div>
      <v-textarea v-model="contentModel" outlined auto-grow autofocus></v-textarea>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TextEditorPage',
  props: {
    // storeId: String
    storeId: {
      type: String,
      default: '1'
    }
  },
  mounted () {
    if (localStorage[this.storeId + 'titleModel']) {
      this.titleModel = localStorage[this.storeId + 'titleModel']
    }
    if (localStorage[this.storeId + 'contentModel']) {
      this.contentModel = localStorage[this.storeId + 'contentModel']
    }
  },
  data: () => {
    return {
      titleModel: '',
      contentModel: ''
    }
  },
  watch: {
    titleModel (newValue) {
      localStorage[this.storeId + 'titleModel'] = newValue
    },
    contentModel (newValue) {
      localStorage[this.storeId + 'contentModel'] = newValue
    }
  }
}
</script>

<style scoped>

</style>
