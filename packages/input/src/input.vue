
<template>
  <div
    class="eg-input"
    :class="[
      {
        'eg-input-group': isGroup,
        'eg-input--disabled': disabled,
        'eg-input--error': isShowError
      },
      widthType ? 'eg-input--' + widthType : '',
      size ? 'eg-input--' + size : ''
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input
      ref="input"
      class="eg-input__inner"
      :value="value"
      v-bind="$attrs"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    >
    <div
      v-if="isGroup"
      class="eg-input__suffix"
    >
      <img
        class="eg-input__clear"
        v-if="isShowClear"
        :src="Icons.clear"
        @click="handleClear"
      >
      <template v-else>
        <slot name="suffix"></slot>
        {{suffixText}}
      </template>
    </div>
  </div>
</template>

<script>
  import Icon from '@/assets/icon'
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
      autocomplete: {
        type: String,
        default: 'off'
      },
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
      },
      // 建议改成size - ssh 7/13
      widthType: {
        // Input宽度选项:medium,long
        type: String,
        default: ''
      },
      size: {
        // Input宽度选项:medium,long
        type: String,
        default: ''
      },
      isError: {
        type: Boolean,
        default: null
      },
      clearable: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isShowError: false,
        mouseIn: false,
        Icons: {
          clear: Icon.input_clear
        }
      }
    },
    computed: {
      isShowClear () {
        return this.mouseIn && this.clearable && !this.disabled
      },
      isGroup () {
        return this.$slots.suffix || this.suffixText || this.isShowClear
      }
    },
    methods: {
      handleInput (event) {
        if (this.isNumber || this.isInteger) {
          this.inputValidate(event)
          this.$emit('input', event.target.value !== '' ? Number(event.target.value) : '')
        } else {
          this.$emit('input', event.target.value)
        }
      },
      handleBlur (event) {
        let value = event.target.value

        // this.isShowError = (value === undefined || value === null || value === '') && this.isError !== false

        if (this.isNumber || this.isInteger) {
          this.$emit('input', this.blurValidate(event))
        }
        this.$emit('blur', event)
      },
      handleFocus (event) {
        this.$emit('focus', event)
      },
      handleClear (event) {
        this.$refs.input.focus()
        this.$emit('input', '')
        this.$emit('clear', event)
      },
      handleMouseEnter (event) {
        this.mouseIn = true
      },
      handleMouseLeave (event) {
        this.mouseIn = false
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
          } else if (this.isInteger) {
            const integerRegExp = this.isNegative ? /^-?\d+/ : /^\d+/
            value = value.match(integerRegExp)
          }
          value = value ? Number(value[0]) : ''
        }
        event.target.value = value
        return value
      }
    },
    created () {
    }
  }
</script>
