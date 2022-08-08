<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import core from '@gf-ui/core';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    console.log(core);
  },
};
</script>
