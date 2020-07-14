import Vue from 'vue'
import EgNodata from './src/directive'
// import service from './src/index'

export default {
  install: function (Vue) {
    Vue.use(EgNodata)
    // Vue.prototype.$Nodata = service
  }
}
