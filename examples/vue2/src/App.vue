<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { Http } from '@gf-ui/core';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    const http = Http({
      base: 'api',
    });
    console.log(http);
  },
};
</script>
