<template>
  <div
    class="eg-input"
    :class="{'eg-input-group': $slots.suffix || suffixText, 'eg-input--disabled': disabled}"
  >
    <input
      class="eg-input__inner"
      :value="value"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
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
      placeholder: String,
      suffixText: String,
      isInteger: {
        type: Boolean,
        default: false
      },
      isNumber: {
        type: Boolean,
        default: false
      },
      isNegative: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
      }
    },
    methods: {
      handleInput (event) {
        if (this.isNumber || this.isInteger) {
          this.inputValidate(event)
        }
        this.$emit('input', event.target.value)
      },
      handleBlur (event) {
        if (this.isNumber || this.isInteger) {
          this.blurValidate(event)
          this.$emit('input', event.target.value)
        }
        this.$emit('blur', event)
      },
      inputValidate (event) {
        let value = event.target.value
        if (value !== undefined && value !== null) {
          value = value.toString().trim()
        } else {
          return
        }
        if (value !== '') {
          if (this.isNumber && !this.isInteger) {
            const numberRegExp = this.isNegative ? /^-?(\d+(\.\d*)?)?/ : /^\d+(\.\d*)?/
            value = value.match(numberRegExp)
          } else if (this.isInteger) {
            const integerRegExp = this.isNegative ? /^-?\d+/ : /^\d+/
            value = value.match(integerRegExp)
          }
          value = value ? value[0] : ''
        }
        event.target.value = value
      },
      blurValidate (event) {
        let value = event.target.value
        if (value !== undefined && value !== null) {
          value = value.toString().trim()
        } else {
          return
        }
        if (value !== '') {
          if (this.isNumber && !this.isInteger) {
            const numberRegExp = this.isNegative ? /^-?\d+(\.\d+)?/ : /^\d+(\.\d+)?/
            value = value.match(numberRegExp)
            value = value ? parseFloat(value[0]) : ''
          } else if (this.isInteger) {
            const integerRegExp = this.isNegative ? /^-?\d+/ : /^\d+/
            value = value.match(integerRegExp)
            value = value ? parseInt(value[0]) : ''
          }
        }
        event.target.value = value
      }
    }
  }
</script>

<style src="./input.scss" lang="scss"></style>
