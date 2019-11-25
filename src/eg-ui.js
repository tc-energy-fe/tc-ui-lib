
import input from './components/input/index.js'
const components = [
  input
]

export const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export const EgInput = input
