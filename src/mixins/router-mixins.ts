import router from '@/router'

export const routerMixins = {
  methods: {
    goToTextEditor: () => {
      router.replace({ path: '/text' })
    },
    goToBrowser () {
      router.replace({ path: '/browser' })
    },
    goToNotes () {
      router.replace({ path: '/notes' })
    },
    goToCalendar () {
      router.replace({ path: '/calendar' })
    },
    goToSocial () {
      router.replace({ path: '/social' })
    },
    goToAllApps () {
      router.replace({ path: '/all' })
    },
    goToHome () {
      router.replace({ path: '/' })
    }
  }
}
