
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
    <i :class="['iconfont',icon]" v-if="icon"></i>
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'EgButton',
    props: {
      icon: {
        type: String,
        default: ''
      },
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
