
const components = []

const install = function (Vue, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
