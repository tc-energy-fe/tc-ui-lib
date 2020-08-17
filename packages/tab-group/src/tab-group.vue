
<!--
  props:
    value checked数组
    disabled 禁用
    size button大小 long/short
  slots:
    tab-button
  event:
    change
-->

<template>
  <div
    class="eg-tab-group"
    :type="type"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'EgTabGroup',

    props: {
      value: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: String,
      type: String
    },

    provide () {
      return {
        type: this.type || ''
      }
    },

    model: {
      prop: 'value',
      event: 'change',
    },

    methods: {
    },

    created () {
      this.$on('handleChange', (value) => {
        this.$emit('change', value)
      })
    }
  }
</script>
