
import input from '../packages/input/index'
import box from '../packages/box/index'
import button from '../packages/button/index'
import checkboxButton from '../packages/checkbox-button/index'
import checkboxGroup from '../packages/checkbox-group/index'
import tabGroup from '../packages/tab-group/index'
import tabButton from '../packages/tab-button/index'
import nodata from '../packages/nodata/index'

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

  Vue.use(nodata)
}

export const EgInput = input
export const EgBox = box
export const EgButton = button
export const EgCheckboxButton = checkboxButton
export const EgCheckboxGroup = checkboxGroup
export const EgTabGroup = tabGroup
export const EgTabButton = tabButton
export const EgNodata = nodata

export default {
  install,
  input,
  box,
  button,
  checkboxButton,
  checkboxGroup,
  tabGroup,
  tabButton,
  nodata
}
