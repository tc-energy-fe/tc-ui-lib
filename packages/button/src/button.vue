
<template>
  <button
    class="eg-button"
    :type="nativeType"
    :class="[
      type ? 'eg-button--' + type : ''
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'EgButton',
    props: {
      type: {
        type: String
      },
      disabled: Boolean,
      nativeType: {
        default: 'button'
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }
  }
</script>
