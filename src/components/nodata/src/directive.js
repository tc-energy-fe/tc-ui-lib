import Vue from 'vue'
import Nodata from './nodata.vue'

const NodataMask = Vue.extend(Nodata)

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
        let text = el.getAttribute('eg-nodata-text')
        let mask = new NodataMask({
          el: document.createElement('div'),
          data: {}
        })

        text && mask.setText(text)

        el.instance = mask
        el.mask = mask.$el
        addClass(el, 'eg-nodata__parent')
        el.appendChild(mask.$el)
        mask.visible = binding.value
      },

      inserted (el, binding) {
      },

      update (el, binding, vnode, oldVnode) {
        let text = el.getAttribute('eg-nodata-text')
        text && el.instance.setText(text)

        if (binding.oldValue !== binding.value) {
          el.instance.visible = binding.value

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

        el.instance && el.instance.$destroy()
      }
    })
  }
}

export default NodataDirective
