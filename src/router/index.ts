/* eslint-disable no-multi-spaces */
import Vue from 'vue'
import VueRouter from 'vue-router'
import apps from '@/utils/apps'
import HomePage from '@/views/HomePage.vue'
import BookmarksPage from '@/views/BookmarksPage.vue'
import BrowserPage from '@/views/BrowserPage.vue'
import CalendarPage from '@/views/CalendarPage.vue'
import EmailPage from '@/views/EmailPage.vue'
import GamesPage from '@/views/GamesPage.vue'
import LearnPage from '@/views/LearnPage.vue'
import NotesPage from '@/views/NotesPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import ShortcutsPage from '@/views/ShortcutsPage.vue'
import SocialPage from '@/views/SocialPage.vue'
import TerminalPage from '@/views/TerminalPage.vue'
import TextEditorPage from '@/views/TextEditorPage.vue'

Vue.use(VueRouter)

// TODOv2: Maybe, eventually lazy load routes: https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
const routes = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
  // { name: 'About',              path: '/about',             component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { name: apps.bookmarks.name,  path: apps.bookmarks.path,  component: BookmarksPage },
  { name: apps.browser.name,    path: apps.browser.path,    component: BrowserPage },
  { name: apps.calendar.name,   path: apps.calendar.path,   component: CalendarPage },
  { name: apps.email.name,      path: apps.email.path,      component: EmailPage },
  { name: apps.games.name,      path: apps.games.path,      component: GamesPage },
  { name: apps.home.name,       path: apps.home.path,       component: HomePage },
  { name: apps.learn.name,      path: apps.learn.path,      component: LearnPage },
  { name: apps.notes.name,      path: apps.notes.path,      component: NotesPage },
  { name: apps.settings.name,   path: apps.settings.path,   component: SettingsPage },
  { name: apps.shortcuts.name,  path: apps.shortcuts.path,  component: ShortcutsPage },
  { name: apps.social.name,     path: apps.social.path,     component: SocialPage },
  { name: apps.terminal.name,   path: apps.terminal.path,   component: TerminalPage },
  { name: apps.textEditor.name, path: apps.textEditor.path, component: TextEditorPage }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default {
  router,
  showApp (path: string) {
    router.replace({ path: path })
  }
}
