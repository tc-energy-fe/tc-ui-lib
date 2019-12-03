<template>
  <div
    class="eg-input"
    :class="{'eg-input-group': $slots.suffix || suffixText}"
  >
    <input
      class="eg-input__inner"
      :value="value"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
    >
    <div
      v-if="$slots.suffix || suffixText"
      class="eg-input__suffix"
    >
      <slot name="suffix"></slot>
      {{suffixText}}
    </div>
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
      suffixText: String
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
