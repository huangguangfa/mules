<template>
    <div class="user">
        用户模块
        <button v-click-outside="clickOutside">点击</button>
    </div>
</template>

<script setup lang="ts">
function clickOutside() {
        console.log('点击外部区域')
    }
</script>  

<style lang="scss" scoped>
    .user{
        color: blue;
    }
</style>