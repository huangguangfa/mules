<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { Type } from '../../../packages/core/npm/core.es.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  created() {
    console.log(Type);
  },
};
</script>
