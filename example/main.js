import Vue from 'vue'
import App from './App.vue'
import EgUi from 'tc-ui-lib'
import 'tc-ui-lib/lib/style.css'

Vue.use(EgUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
