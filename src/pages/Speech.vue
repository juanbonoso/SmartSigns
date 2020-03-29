<template>
  <div id="app">
    <h1>Hola</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Speech extends Vue {}
</script>

<style>
h1 {
  position: absolute;
  width: 100%;
  z-index: 1;
  font-size: 1.5rem;
}
</style>
