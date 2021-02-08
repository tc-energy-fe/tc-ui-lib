// UI组件
import input from '../packages/input/index'
import box from '../packages/box/index'
import button from '../packages/button/index'
import checkboxButton from '../packages/checkbox-button/index'
import checkboxGroup from '../packages/checkbox-group/index'
import tabGroup from '../packages/tab-group/index'
import tabButton from '../packages/tab-button/index'
import nodata from '../packages/nodata/index'

import filters from './plugins/filters'

import utils from './plugins/utils'

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
  // UI组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(nodata)

  // filters
  filters.forEach(filter => {
    Vue.filter(filter.name, filter)
  })

  // utils
  Vue.prototype.$utils = utils
  window.egUtils = utils
}

export const EgInput = input
export const EgBox = box
export const EgButton = button
export const EgCheckboxButton = checkboxButton
export const EgCheckboxGroup = checkboxGroup
export const EgTabGroup = tabGroup
export const EgTabButton = tabButton
export const EgNodata = nodata

// export * as filters from '../src/plugins/filters'
// export utils from '../src/plugins/utils'

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
