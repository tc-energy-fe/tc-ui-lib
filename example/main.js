import Vue from 'vue'
import App from './App.vue'
import EgUi from '../src/index'

Vue.use(EgUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
