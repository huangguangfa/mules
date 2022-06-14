<script setup lang="ts">
import useVueRouter from "@/hooks/useRouter";
const { routerPush } = useVueRouter()
</script>

<template>
  <header>
    <div class="wrapper">
      app content
      <button @click="routerPush('demo')">to demo</button>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
