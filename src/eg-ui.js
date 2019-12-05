
import input from './components/input/index'
import box from './components/box/index'
import button from './components/button/index'
const components = [
  input,
  box,
  button
]

export const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export const EgInput = input
export const EgBox = box
export const EgButton = button

export default {
  install,
  input,
  box,
  button
}
