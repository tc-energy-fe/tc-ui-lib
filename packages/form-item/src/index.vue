<template>
  <div class="eg-form-item"></div>
</template>

<script>
export default {
  name: 'EgFormItem',

  props: {
    label: {
      type: String,
      default: null
    },
    labelWidth: {
      type: String,
      default: '5rem'
    },
    value: {
      default: null
    }
  }
}
</script>

<style scoped>

</style>
