<!--TODO: Include dates, events, weather, saving-->
<!--TODO: Better Calendar with events: https://vuetifyjs.com/en/components/calendars -->
<template>
  <v-col>
    <v-calendar></v-calendar>
    <br>
    <v-row>
      <h2>Events</h2>
      <dan-fab class='ml-8' text='Add Event' />
    </v-row>
    <v-list>
      <template v-for='(item, index) in eventItems'>
        <v-divider v-if='item.isDivider' :key="index" />
        <v-menu v-else :key="index" :close-on-content-click=false>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
          <v-card>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.details }}</v-card-text>
          </v-card>
        </v-menu>
      </template>
    </v-list>
  </v-col>
</template>

<script>
import icons from '@/utils/icons'
import DanFab from '@/components/dan-fab'

export default {
  name: 'CalendarPage',
  components: { DanFab },
  data: () => ({
    eventItems: [
      { title: '2020', action: '', details: '' },
      { isDivider: true },
      { title: '02-29: Ikea shopping', action: '', details: 'More details here' },
      { title: '03-01: Bank', action: '', details: 'More details here' },
      { title: '03-15: Read novel', action: '', details: 'More details here' },
      { title: '09-29: Birthday', action: '', details: 'More details here' },
      { title: '2021', action: '', details: '' },
      { isDivider: true },
      { title: '01-01: Wake up early', action: '', details: 'More details here' },
      { title: '02-30: Quit, and start new business', action: '', details: 'More details here' }
    ],
    iconMenu: icons.menu
  }),
  methods: {
    showEventDetails: (event) => {
      // router.replace({ path: '/text' })
    }
  }
}
</script>

<style scoped>

</style>
