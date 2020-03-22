<template>
  <div id="app">
    <h1 class="title"><a href="https://discoverthreejs.com/">Discoverthreejs.com</a> - Ch 1.7 Load Models</h1>
    <div id="scene-container">
      <!-- This div will hold our scene-->
    </div>
    <button type="button" class="btn" @click="character3D.changeCurrentAnimation(0)">Donde Estudio?</button>
    <button type="button" class="btn" id="facu" @click="character3D.changeCurrentAnimation(1)">Facultad</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character3D } from '@/utils/Character3D';

@Component
export default class Character extends Vue {
  private character3D!: Character3D;
  mounted() {
    this.character3D = new Character3D();
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
  height: 80%;
}
.btn {
  position: relative;
  top: 80vh;
  height: 5rem;
  width: 8rem;
}
#facu {
  left: 5rem;
}
</style>
