# ultimate-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Features
- System-wide identity and profiles.


## Integrations
- Firebase: https://console.firebase.google.com/project/ultimate-os-app/overview


# Thoughts
- Apps don't need to say their name. Reason: It should be obvious based on context.
- Menus should appear 'on-hover'. Reason: The next most likely action will be opening the menu, and we can save that click.
- I don't always need to see all the tabs I have open. Maybe only one for the current song title and artist, or that could be put in the status bar, or it could be a temporary (5 sec?) small popup
- I don't always need to see the URL and action buttons, but it will likely be good to see the ____

# Decisions
## Naming
- Bars:
    - ActionBar: Contains actions for a single app
    - AppBar: Contains apps for the OS
    - StatusBar: Contains status for a single app
    - MenuApp: Contains menu for a single app

## Removed features (at least for now)
- IdePage. Reason: Most actions can go into TextEditorPage, and there is plenty else to do.
- MediaPage. Reason: Not interested now, and don't really have a great idea for it yet.

# TODO
- Check Notepad++ for ideas on menu placement and splitting windows/tabs
    - Also, maybe check VS Code
- The selected tab should have the same color as the top border color of the focused window

