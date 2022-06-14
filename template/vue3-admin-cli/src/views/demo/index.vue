<template>
  <div class="demo">
    <span>111</span>
    demo 首页

    <div class="">
      <button @click="startRequest('get')">开始请求</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { startRequest } from "./hooks/request"
</script>

<style lang="scss" scoped>
  .demo{
    span{
      color: red;
    }
  }
</style>


