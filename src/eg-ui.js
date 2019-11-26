
import input from './components/input/index'
import box from './components/box/index'
const components = [
  input,
  box
]

export const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export const EgInput = input
export const EgBox = box

export default {
  install,
  input,
  box
}
