<script setup lang="ts">
import http from '../../../packages/core/src/http/index';
import HelloWorld from './components/HelloWorld.vue'

console.log('http', http);
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
</template>

<style>
</style>
