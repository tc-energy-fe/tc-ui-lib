
<!--
  props:
    value checked
    label 为group时的值
    text 文字内容
    size button大小 long/short
    width 自定义长度，单位rem
  slots:
    button内容
  event:
    change
-->

<template>
  <div
    :class="[
      'eg-checkbox-button',
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled },
      checkboxSize && !width ? 'eg-checkbox-button--' + checkboxSize : ''
    ]"
    :style="width ? `width: ${width}rem` : ''"
    @click="handleClick"
  >
    <template v-if="text">{{text}}</template>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default {
    name: 'EgCheckboxButton',

    props: {
      value: Boolean,
      label: [String, Number],
      text: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      width: Number
    },

    model: {
      prop: 'value',
      event: 'change'
    },

    computed: {
      store () {
        return this.isGroup ? this.$parent.value : this.value
      },

      isGroup () {
        let parent = this.$parent

        // 不知道为啥报错
        // if (parent && parent.$options.name === 'EgCheckboxGroup') {
        //   this._checkboxGroup = parent
        //   return true
        // } else {
        //   return false
        // }

        return parent && parent.$options.name === 'EgCheckboxGroup'
      },

      isChecked () {
        if (this.isGroup) {
          return this.store.indexOf(this.label) > -1
        } else {
          return this.value
        }
      },

      isDisabled () {
        return this.isGroup ?
          this.$parent.disabled :
          this.disabled
      },

      checkboxSize () {
        return this.isGroup ?
          this.$parent.size || this.size :
          this.size
      }
    },

    methods: {
      handleClick () {
        if (this.isDisabled) return

        if (this.isGroup) {
          let label = this.label
          let val = [].concat(this.store)
          let index = val.indexOf(label)

          if (index > -1) {
            val.splice(index, 1)
          } else {
            val.push(label)
          }
          this.$parent.$emit('handleChange', val)
        } else {
          this.$emit('change', !this.value)
        }
      }
    }
  }
</script>

<style lang="scss" src="./checkbox-button.scss" scoped></style>
