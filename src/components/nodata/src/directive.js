import Vue from 'vue'
import Nodata from './nodata'

const Mask = Vue.extend(Nodata)

const addClass = function (el, className) {
  if (typeof className === 'string') {
    el.classList.add(className)
  }
}

const removeClass = function (el, className) {
  if (typeof className === 'string') {
    el.classList.remove(className)
  }
}

const NodataDirective = {
  install: function (Vue) {
    Vue.directive('nodata', {
      name: 'nodata',

      bind (el, binding, vNode) {
        let mask = new Mask({
          el: document.createElement('div'),
          data: {}
        })

        el.instance = mask
        el.mask = mask.$el
        addClass(el, 'eg-nodata__parent')
        binding.value && el.appendChild(mask.$el)
      },

      inserted (el, binding) {},

      update (el, binding, vnode, oldVnode) {
        if (binding.oldValue !== binding.value) {
          el.mask.style.display = binding.value ? 'flex' : 'none'

          if (binding.value) {
            addClass(el, 'eg-nodata__parent')
          } else {
            removeClass(el, 'eg-nodata__parent')
          }
        }
      },

      unbind (el, binding) {
        el.mask &&
        el.mask.parentNode &&
        el.mask.parentNode.removeChild(el.mask)

        el.instance && el.instance.destroy()
      }
    })
  }
}

export default NodataDirective
