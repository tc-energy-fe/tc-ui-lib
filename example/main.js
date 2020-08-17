import Vue from 'vue'
import App from './App.vue'
// import EgUi from '../lib/index'
import EgUi from '../src/index'

import "./index.scss"

Vue.use(EgUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
