<script setup lang="ts">
import { RouterView } from 'vue-router'
import useEvents from '@/hooks/useEvents'
const { $emit } = useEvents()
</script>

<template>
  <button @click="$emit('datas', { name: '数据' })">派发内容</button>
  <RouterView />
</template>

<style lang="scss"></style>
