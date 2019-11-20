import Vue from 'vue'
import App from './App.vue'
import TcUiLib from '../src/index.js'

Vue.use(TcUiLib)

new Vue({
  render: h => h(App)
}).$mount('#app')
