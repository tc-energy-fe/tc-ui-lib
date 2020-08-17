import EgBox from './src/box.vue'

EgBox.install = function (Vue) {
  Vue.component(EgBox.name, EgBox)
}

export default EgBox
