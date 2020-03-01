/* eslint-disable no-multi-spaces */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BookmarksPage from '@/views/BookmarksPage.vue'
import BrowserPage from '@/views/BrowserPage.vue'
import CalendarPage from '@/views/CalendarPage.vue'
import GamesPage from '@/views/GamesPage.vue'
import LearnPage from '@/views/LearnPage.vue'
import NotesPage from '@/views/NotesPage.vue'
// import SocialPage from '@/views/SocialPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import ShortcutsPage from '@/views/ShortcutsPage.vue'
import TerminalPage from '@/views/TerminalPage.vue'
import TextEditorPage from '@/views/TextEditorPage.vue'

Vue.use(VueRouter)

// TODOv2: Eventually lazy load routes: https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited.
  { path: '/about',     name: 'About',     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/bookmarks', name: 'Bookmarks', component: BookmarksPage },
  { path: '/browser',   name: 'Browser',   component: BrowserPage },
  { path: '/calendar',  name: 'Calendar',  component: CalendarPage },
  { path: '/games',     name: 'Games',     component: GamesPage },
  { path: '/learn',     name: 'Learn',     component: LearnPage },
  { path: '/notes',     name: 'Notes',     component: NotesPage },
  { path: '/settings',  name: 'Settings',  component: SettingsPage },
  { path: '/shortcuts', name: 'Shortcuts', component: ShortcutsPage },
  // { path: '/social',    name: 'Social',    component: SocialPage },
  { path: '/terminal',  name: 'Terminal',  component: TerminalPage },
  { path: '/text',      name: 'Text',      component: TextEditorPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
