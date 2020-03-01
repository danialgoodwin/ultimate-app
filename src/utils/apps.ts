import icons from '@/utils/icons'

export class App {
  readonly name: string
  readonly icon: string
  readonly path: string
  constructor (name: string, icon: string, path: string) {
    this.name = name
    this.icon = icon
    this.path = path
  }
}

export default {
  bookmarks: new App('Bookmarks', icons.bookmarks, '/bookmarks'),
  browser: new App('Browser', icons.browser, '/browser'),
  calendar: new App('Calendar', icons.calendar, '/calendar'),
  email: new App('Email', icons.email, '/email'),
  games: new App('Games', icons.games, '/games'),
  home: new App('Home', icons.home, '/'),
  learn: new App('Learn', icons.learn, '/learn'),
  notes: new App('Notes', icons.notes, '/notes'),
  settings: new App('Settings', icons.settings, '/settings'),
  shortcuts: new App('Shortcuts', icons.shortcuts, '/shortcuts'),
  social: new App('Social', icons.social, '/social'),
  terminal: new App('Terminal', icons.terminal, '/terminal'),
  textEditor: new App('Text Editor', icons.textEditor, '/text')
}
