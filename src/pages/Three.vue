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
import * as THREE from 'three';

@Component({
  components: {
    HelloWorld,
  },
})
export default class ThreePage extends Vue {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  camera: any;
  scene: any;
  renderer: any;
  mesh: any;
  cube: any;

  init() {
    // eslint-disable-next-line
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const texture = new THREE.TextureLoader().load('../assets/textures/metal.jpg');

    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  mounted() {
    let scene: any, camera: any, renderer: any;
    let geometry, material, mesh: any;

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      geometry = new THREE.BoxGeometry(200, 200, 200);
      material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      renderer.render(scene, camera);
    }

    init();
    animate();
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
