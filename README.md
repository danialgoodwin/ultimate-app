# Ultimate App


## Features

### Features TODO
- System-wide identity and profiles
- SRL: Spaced Repetition Learning
- 'Quantified Self' page
    - Maybe dedicated sections: Sleep hours, weight, body temperature, ...
    - Maybe (optionally) combine into the calendar page.
- Daily journal (or, daily learnings) page
- Ultimate app keeps track of email and doesn't share with other sites, but instead provides a different address for each site, which can change to ensure real privacy. Aka, unique email for all websites and apps.

### Integrations
- Firebase: https://console.firebase.google.com/project/ultimate-os-app/overview


## Workflow

With npm:

    # Setup
    npm install
    
    # Run locally (with hot-reloads)
    npm run serve
    
    # Lint and fix files
    npm run lint
    
    # Run tests
    npm run test:unit
    
    # Compile and minify for productionA
    npm run build

With Firebase:

    # Run locally
    firebase serve
    
    # Deploy
    firebase deploy


## Decisions

Naming:
- Bars:
    - ActionBar: Contains actions for a single app
    - AppBar: Contains apps for the OS
    - StatusBar: Contains status for a single app
    - MenuApp: Contains menu for a single app

### Guidelines
- If a user explicitly opens something, then they should explicity close it.
  - Example: Drop-down for bookmarks bar: Don't close when right-click editing. Close after selection or clicking away. Reason: I want to do multiple edits without having to navigate to it each time (easier for a few rather than going to a bookmarks manager).
  - Example: OS calendar: Don't close when clicking away. Close when clicking on the same icon/button that opens it. Reason: I want to reference it when using other apps.
  - Counter-example: ???

### Thoughts
- Apps don't need to say their name. Reason: It should be obvious based on context.
- Menus should appear 'on-hover'. Reason: The next most likely action will be opening the menu, and we can save that click.
- I don't always need to see all the tabs I have open. Maybe only one for the current song title and artist, or that could be put in the status bar, or it could be a temporary (5 sec?) small popup
- I don't always need to see the URL and action buttons, but it will likely be good to see the ____
- It should not be possible for an IDE and code to be out-of-sync with whatever libraries they are both using. For example. They can get out-of-sync for the particular programming language being used. The IDE doesn't read the dependencies for the project.
- The ultimate browser may provide the ability to create and host new websites and buy domain names.
    - Users could explicitly configure the page to be extendable or not? Meh
    - Similarly, users should be able to easily create browser extensions in the browser.
- The app/browser's setup could have a slider for security versus convenience. Maybe the users can't slide it. Never mind, users can slide it and there should be check boxes.
- Want: Ability to sort bookmarks by time. For example, I currently want to see the latest bookmarks I added to find a specific one... not sure where I saved it to or what keywords to search for, but I know it was done recently.

### One tool to organize life
- Messages (emails, texts)
- Events/Appointments, and scheduler
- notes (todos, wiki, recipes, shopping list, contacts, insurance info, health, bookmarks, religion)
- browser (files, internet)
- crypto wallet, bank
- motivation/streaks/inspiration

Not organizational?
- Games? Maybe just group this in the 'internet' section?

### Removed features (at least for now)
- SocialPage. Reason: Not MVP
- BrowserPage. Reason: Not MVP
- IdePage. Reason: Most actions can go into TextEditorPage, and there is plenty else to do.
- MediaPage. Reason: Not interested now, and don't really have a great idea for it yet.
- PersonalWikiPage. Reason: Not MVP


## Resources
- Great: [The full guide to using Font Awesome icons in Vue.js apps](https://blog.logrocket.com/full-guide-to-using-font-awesome-icons-in-vue-js-apps-5574c74d9b2d/)



# TODO
- Check Notepad++ for ideas on menu placement and splitting windows/tabs
    - Also, maybe check VS Code
- The selected tab should have the same color as the top border color of the focused window

