
import input from './components/input/index'
import box from './components/box/index'
import button from './components/button/index'
import checkboxButton from './components/checkbox-button/index'
import checkboxGroup from './components/checkbox-group/index'
import tabGroup from './components/tab-group/index'
import tabButton from './components/tab-button/index'

const components = [
  input,
  box,
  button,
  checkboxButton,
  checkboxGroup,
  tabGroup,
  tabButton
]

export const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export const EgInput = input
export const EgBox = box
export const EgButton = button
export const EgCheckboxButton = checkboxButton
export const EgCheckboxGroup = checkboxGroup
export const EgTabGroup = tabGroup
export const EgTabButton = tabButton

export default {
  install,
  input,
  box,
  button,
  checkboxButton,
  checkboxGroup,
  tabGroup,
  tabButton
}
