
<template>
  <button
    class="eg-button"
    :class="[
      type ? 'eg-button--' + type : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'EgButton',
    props: {
      type: {
        type: String
      },
      disabled: Boolean
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>

<style src="./button.scss" lang="scss"></style>
