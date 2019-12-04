<template>
  <div id="app">
    <h2>基础组件</h2>
    <h4>Input</h4>
    <eg-input
      v-model="inputText"
      suffix-text="kWh/日"
      placeholder="输入XXX"
    >
    </eg-input>
    <h4>Box</h4>
    <eg-box :title="'aaa'" :extra-text="'aaa'">
      <template v-slot:headerLeft><div>bbb</div></template>
      <template v-slot:content><div>content</div></template>
    </eg-box>
    <i class="iconfont icon-tab_icon_fold"></i>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        inputText: ''
      }
    }
  }
</script>

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
  }

  @import "//at.alicdn.com/t/font_444910_0qfvwcv4jyj.css";
  /*@font-face {*/
  /*  font-family: 'iconfont';  !* project id 444910 *!*/
  /*  src: url('//at.alicdn.com/t/font_444910_ucrq3qghqi.eot');*/
  /*  src: url('//at.alicdn.com/t/font_444910_ucrq3qghqi.eot?#iefix') format('embedded-opentype'),*/
  /*  url('//at.alicdn.com/t/font_444910_ucrq3qghqi.woff2') format('woff2'),*/
  /*  url('//at.alicdn.com/t/font_444910_ucrq3qghqi.woff') format('woff'),*/
  /*  url('//at.alicdn.com/t/font_444910_ucrq3qghqi.ttf') format('truetype'),*/
  /*  url('//at.alicdn.com/t/font_444910_ucrq3qghqi.svg#iconfont') format('svg');*/
  /*}*/

  #app{
    background-color: #e5e5e5;
    padding: 1rem;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  /*.iconfont {*/
  /*  font-family: iconfont !important;*/
  /*  font-style: normal;*/
  /*  font-size: 2rem;*/
  /*  display: inline-block;*/
  /*}*/
</style>
