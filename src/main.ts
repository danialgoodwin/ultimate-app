import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/assets/global.sass'

// eslint-disable-next-line @typescript-eslint/no-var-requires
Vue.use(require('vue-shortkey'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
