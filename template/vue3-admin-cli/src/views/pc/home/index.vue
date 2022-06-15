<script setup lang="ts">
import { RouterLink } from 'vue-router'
import useRouter from '@/hooks/useRouter'
import httpRequest from '@/hooks/useHttpRequest'

const { getQueryParam } = useRouter()
console.log('获取参数', getQueryParam())
console.log('请求', httpRequest())
</script>

<template>
  <div class="pc-home">
    <span style="color: red">pc首页</span>
    <router-link to="/demo">
      <button>返回demo</button>
    </router-link>
  </div>
</template>
