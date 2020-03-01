import router from '@/router'

export const routerMixins = {
  methods: {
    goToAllApps () {
      router.replace({ path: '/all' })
    },
    goToBrowser () {
      router.replace({ path: '/browser' })
    },
    goToCalendar () {
      router.replace({ path: '/calendar' })
    },
    goToHome () {
      router.replace({ path: '/' })
    },
    goToLearn () {
      router.replace({ path: '/learn' })
    },
    goToNotes () {
      router.replace({ path: '/notes' })
    },
    goToShortcuts () {
      router.replace({ path: '/shortcuts' })
    },
    goToSocial () {
      router.replace({ path: '/social' })
    },
    goToTextEditor: () => {
      router.replace({ path: '/text' })
    }
  }
}
