
<!--
  props:
    title 头部标题
    extraText 头部右侧文字
  slots:
    header: 自定义头部
    headerLeft、headerRight: 头部左、右自定义内容(与header互斥)
-->

<template>
  <div class="eg-box">
    <slot name="header"></slot>
    <div
      class="eg-box__header"
      v-if="!$slots.header"
    >
      <div class="eg-box__header--left">
        <slot name="headerLeft"></slot>
        <span v-if="!$slots.headerLeft">{{title}}</span>
      </div>
      <div class="eg-box__header--right">
        <slot name="headerRight"></slot>
        <span v-if="!$slots.headerRight">{{extraText}}</span>
      </div>
    </div>
    <div class="eg-box__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EgBox',
    props: {
      title: {
        type: String,
        default: ''
      },
      extraText: {
        type: String,
        default: ''
      }
    }
  }
</script>
