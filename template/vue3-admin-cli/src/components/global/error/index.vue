<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="pc-home">
    <span style="color: red">error页面</span>
    <router-link to="/demo">
      <button>返回</button>
    </router-link>
  </div>
</template>
