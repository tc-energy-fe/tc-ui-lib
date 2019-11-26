<template>
  <div class="eg-box">
    <slot name="header"></slot>
    <div
      class="eg-box__header"
      v-if="!$slots.header && ($slots.headerLeft || $slots.headerRight)"
    >
      <slot name="headerLeft"></slot>
      <slot name="headerRight"></slot>
    </div>
  </div>
</template>

<script>
  // import './box.scss'
  export default {
    name: 'EgBox'
  }
</script>

<style src="./box.scss"></style>
