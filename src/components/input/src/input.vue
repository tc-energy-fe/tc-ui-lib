<template>
  <div class="eg-input">
    <input
      class="eg-input__inner"
      :value="value"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
    >
    <span
      v-if="$slots.suffix"
      class="eg-input__suffix"
    >
      <slot name="suffix"></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'EgInput',
    inheritAttrs: false,
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      disabled: Boolean,
      readonly: Boolean,
    },
    data () {
      return {
      }
    },
    methods: {
      handleInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style src="./input.scss"></style>
