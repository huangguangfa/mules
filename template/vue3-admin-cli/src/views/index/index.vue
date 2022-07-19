<template>
  <div>首页</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const a = ref(1)
console.log(a)
const b = reactive({
  name: 'z',
  age: 18,
})
console.log(b)
</script>
