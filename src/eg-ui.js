// UI组件
import input from '../packages/input/index'
import box from '../packages/box/index'
import button from '../packages/button/index'
import checkboxButton from '../packages/checkbox-button/index'
import checkboxGroup from '../packages/checkbox-group/index'
import tabGroup from '../packages/tab-group/index'
import tabButton from '../packages/tab-button/index'
import nodata from '../packages/nodata/index'

import * as filters from './plugins/filters'

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
  for (let filter in filters) {
    Vue.filter(filter, filters[filter])
  }

  // utils
  for (let util in utils) {
    Vue.prototype[`$${util}`] = utils[util]
    window[util] = utils[util]
  }
}

export const EgInput = input
export const EgBox = box
export const EgButton = button
export const EgCheckboxButton = checkboxButton
export const EgCheckboxGroup = checkboxGroup
export const EgTabGroup = tabGroup
export const EgTabButton = tabButton
export const EgNodata = nodata

export const EgUtils = utils
export const EgFilters = filters

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
