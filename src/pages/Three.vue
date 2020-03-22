<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewpsort" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Comptabile" content="ie=edge" />
      <title>My first three.js app</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue';
import { ThreeJSTest } from '@/utils/ThreeTest';
@Component({
  components: {
    HelloWorld,
  },
})
export default class ThreePage extends Vue {
  mounted() {
    const threeJSTest = new ThreeJSTest();
    threeJSTest.render();
  }
}
</script>

<style>
body {
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
