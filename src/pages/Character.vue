<template>
  <html>
    <head>
      <title>Discoverthreejs.com - Ch 1.7: Load Models</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <link rel="icon" href="https://discoverthreejs.com/favicon.ico" type="image/x-icon" />
    </head>

    <body>
      <div id="app">
        <h1 class="title"><a href="https://discoverthreejs.com/">Discoverthreejs.com</a> - Ch 1.7 Load Models</h1>
        <div id="scene-container">
          <!-- This div will hold our scene-->
        </div>
      </div>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character3D } from '@/utils/Character3D';

@Component
export default class Character extends Vue {
  mounted() {
    // eslint-disable-next-line
    const character3D = new Character3D();
  }
}
</script>

<style>
body {
  margin: 0px;
  overflow: hidden;
  color: white;
  text-align: center;
}

h1 {
  position: absolute;
  width: 100%;
  z-index: 1;
  font-size: 1.5rem;
}

a {
  color: white;
}
a:hover {
  color: purple;
}

#scene-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
