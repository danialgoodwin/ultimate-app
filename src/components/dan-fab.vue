<template>
  <v-btn color='secondary' rounded>{{ text }}</v-btn>
</template>

<script>
export default {
  name: 'dan-fab',
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>
