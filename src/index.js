
import EgInput from './components/input/index'
const components = [
  EgInput
]

const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  EgInput
}
