import Vue from 'vue'
import App from './App.vue'
import EgUi from '../lib/index.js'
import '../lib/style.css'

Vue.use(EgUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
