<template>
  <div id="app">
    <h2>基础组件</h2>
    <h4>Input</h4>
    <eg-input
      v-model="inputText"
      placeholder="输入XXX"
      width-type="medium"
      is-number
    >
      <template v-slot:suffix>
        <i class="iconfont icon-tab_icon_fold" />
      </template>
    </eg-input>
    <h4>Box</h4>
    <eg-box
      :title="'aaa'"
      :extra-text="'aaa'"
    >
      <template v-slot:headerLeft>
        <div>bbb</div>
      </template>
      <template v-slot:content>
        <div>content</div>
      </template>
    </eg-box>
    <h4>Button</h4>
    <eg-button
      type="text"
      color="danger"
    >
      文字按钮
    </eg-button>
    <eg-button
      type="text"
      color="success"
    >
      文字按钮
    </eg-button>
    <i class="iconfont icon-tab_icon_fold" />
    <i class="iconfont icon-notice_icon_close" />
    <i class="iconfont icon-nav_icon_setting_n" />
    <i class="iconfont icon-nav_icon_report_n" />
    <i class="iconfont icon-nav_icon_overview_n" />
    <h4>Checkbox Button</h4>
    <eg-checkbox-group v-model="checked">
      <eg-checkbox-button text="checkbox1" :label="1" size="long"></eg-checkbox-button>
      <eg-checkbox-button text="checkbox2" :label="2"></eg-checkbox-button>
    </eg-checkbox-group>
    <p></p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        inputText: null,
        checkboxValue: false,
        checked: [1, 2]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  body{
    padding: 0;
    margin: 0;
  }

  @import "//at.alicdn.com/t/font_444910_7bsaew8i1bf.css";
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
