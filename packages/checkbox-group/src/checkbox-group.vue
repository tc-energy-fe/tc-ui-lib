
<!--
  props:
    value checked数组
    disabled 禁用
    size button大小 long/short
  slots:
    checkbox-button
  event:
    change
-->

<template>
  <div
    class="eg-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'EgCheckboxGroup',

    props: {
      value: {
        type: Array,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: String
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
