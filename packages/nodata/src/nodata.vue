<!--
 attribute eg-nodata-text 内容文字
 -->


<template>
  <div v-if="visible" class="eg-nodata">
    <span class="eg-nodata__text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'EgNodata',

    data () {
      return {
        visible: true,
        text: '暂无数据'
      }
    },

    methods: {
      setText (text) {
        this.text = text
      }
    }
  }
</script>
