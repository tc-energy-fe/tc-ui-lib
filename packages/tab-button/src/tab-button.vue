
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
      'eg-tab-button',
      { 'is-checked': isChecked },
      { 'is-disabled': isDisabled },
      tabSize && !width ? 'eg-tab-button--' + tabSize : ''
    ]"
    :style="width ? `width: ${width}rem` : ''"
    @click="handleClick"
    :type="type"
  >
    <template v-if="text">{{text}}</template>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default {
    name: 'EgTabButton',

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
      width: Number,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    inject: ['type'],

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
        //   this._tabGroup = parent
        //   return true
        // } else {
        //   return false
        // }

        return parent && parent.$options.name === 'EgTabGroup'
      },

      isChecked () {
        if (this.isGroup) {
          return this.store === this.label
        } else {
          return this.value
        }
      },

      isDisabled () {
        return this.isGroup ?
          this.$parent.disabled || this.disabled :
          this.disabled
      },

      tabSize () {
        return this.isGroup ?
          this.$parent.size || this.size :
          this.size
      }
    },

    methods: {
      handleClick () {
        if (this.isDisabled) return

        if (this.isGroup) {
          this.$parent.$emit('handleChange', this.label)
        } else {
          this.$emit('change', !this.value)
        }
      }
    }
  }
</script>
