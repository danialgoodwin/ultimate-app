import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const skyblueLight = '#87CEFA'
const skyblue = '#87CEEB'
const skyblueDeep = '#00BFFF'
const cornflowerBlue = '#6495ED'
const dodgerBlue = '#1E90FF'
const steelBlue = '#4682B4'
const blue = dodgerBlue

const opts = {
  theme: {
    themes: {
      light: {
        primary: skyblue,
        secondary: blue,
        accent: blue
      },
      dark: {
      }
    }
  }
}

export default new Vuetify(opts)

// {
//   primary: #03a9f4,
//   secondary: #607d8b,
//   accent: #009688,
//   error: #f44336,
//   warning: #ffc107,
//   info: #3f51b5,
//   success: #8bc34a
// }
