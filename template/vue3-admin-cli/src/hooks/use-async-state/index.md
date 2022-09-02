### 异步数据hook
```ts
<template>
  <div class="demo">
    {{ isLoading ? '加载中' : '加载完成' }}
    <div v-for="(item, index) in state" :key="index">{{ item + index }}</div>
  </div>
</template>

<script setup lang="ts">
import { useAsnyState } from '@/hooks'

const promsie = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([0, 1, 2, 3])
    }, 5000)
  })
}

const { state, isLoading } = useAsnyState(promsie, [])
</script>
```