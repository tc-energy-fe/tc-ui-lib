<template>
  <div class="eg-nodata">
    <span class="eg-nodata__text">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'EgNodata',

    props: {
      text: {
        type: String,
        default: '暂无数据'
      }
    }
  }
</script>

<style lang="scss" src="./nodata.scss"/>
