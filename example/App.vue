<template>
  <div id="app">
    <h2>基础组件</h2>
    <h4 id="input-title">
      Input
    </h4>
    <div class="form">
      <div class="form-item">
        <label class="form-item__label">normal</label>
        <eg-input
          v-model="inputText1"
          placeholder="输入XXX"
          is-number
          is-negative
          :clearable="false"
          :is-error="false"
        >
          <template v-slot:suffix>
            后缀
          </template>
        </eg-input>
      </div>
      <div class="form-item">
        <label class="form-item__label">validate</label>
        <eg-input
          v-model="inputText2"
          placeholder="输入YYY"
          is-number
        />
      </div>
      <div class="form-item">
        <label class="form-item__label">size</label>
        <eg-input :placeholder="'normal'" />
        <eg-input
          :placeholder="'medium'"
          size="medium"
        />
        <eg-input
          :placeholder="'long'"
          size="long"
        />
      </div>
    </div>
    <h4 id="box-title">
      Box (Nodata)
    </h4>
    <eg-box
      style="height: 10rem;"
      :extra-text="'title2'"
    >
      <template v-slot:headerLeft>
        <div>title1</div>
      </template>
      <template v-slot:content>
        <div
          v-nodata="true"
          style="height: 100%;"
          eg-nodata-text="木有数据"
        />
      </template>
    </eg-box>
    <h4 id="button-title">
      Button
    </h4>
    <div class="form">
      <div class="form-item">
        <eg-button>normal</eg-button>
        <eg-button type="minor">
          minor
        </eg-button>
        <eg-button disabled>
          disabled
        </eg-button>
        <eg-button
          type="minor"
          disabled
        >
          minor-disabled
        </eg-button>
      </div>
      <div class="form-item">
        <label class="form-item__label">text</label>
        <eg-button type="text">
          normal
        </eg-button>
        <eg-button
          type="text"
          color="danger"
        >
          danger
        </eg-button>
        <eg-button
          type="text"
          color="success"
        >
          success
        </eg-button>
      </div>
    </div>
    <!--    <i class="iconfont icon-tab_icon_fold" />-->
    <h4 id="checkbox-title">
      Checkbox Button
    </h4>
    <div class="form">
      <div class="form-item">
        <label class="form-item__label">size</label>
        <eg-checkbox-group v-model="checked">
          <eg-checkbox-button
            text="long"
            :label="1"
            size="long"
          />
          <eg-checkbox-button
            text="normal"
            :label="2"
          />
          <eg-checkbox-button
            text="short"
            :label="3"
            size="short"
          />
        </eg-checkbox-group>
      </div>
    </div>
    <h4 id="tab-title">
      Radio
    </h4>
    <div class="form">
      <div class="form-item">
        <label class="form-item__label">tab</label>
        <eg-tab-group v-model="tabValue">
          <eg-tab-button
            text="tab1"
            :label="1"
            size="long"
          />
          <eg-tab-button
            text="tab2"
            :label="2"
            :disabled="true"
          />
          <eg-tab-button
            text="tab3"
            :label="3"
            size="short"
          />
        </eg-tab-group>
      </div>
      <div class="form-item">
        <label class="form-item__label">underline</label>
        <eg-tab-group
          v-model="tabValue"
          type="underline"
        >
          <eg-tab-button
            text="日"
            :label="1"
            size="long"
          />
          <eg-tab-button
            text="月"
            :label="2"
            :disabled="true"
          />
          <eg-tab-button
            text="年"
            :label="3"
            size="short"
          />
        </eg-tab-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        inputText1: null,
        inputText2: null,
        checkboxValue: false,
        checked: [1, 2],
        tabValue: 1,
        isShowNoData: true
      }
    },
    methods: {
      toggleNodata () {
        this.isShowNoData = !this.isShowNoData
      }
    },
    created () {}
  }
</script>

<style lang="scss">
  body, html{
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
    background-color: #f2f5fa;
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
