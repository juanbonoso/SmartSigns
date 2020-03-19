import * as THREE from 'three';
import { Scene, Camera, WebGLRenderer, Geometry, Material, DirectionalLight, Mesh } from 'three';

export class ThreeJSTest {
  private scene!: Scene;
  private camera!: Camera;
  private renderer!: WebGLRenderer;
  private geometry!: Geometry;
  private material!: Material;
  private directionalLight!: DirectionalLight;
  private cube!: Mesh;

  public constructor() {
    // レンダラーを作成
    this.createRenderer();
    // シーンを作成
    this.createScene();
  }

  private createRenderer() {
    // WebGL レンダラーを作成
    this.renderer = new THREE.WebGLRenderer();
    // サイズの設定
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
  }

  public createScene(): void {
    // シーン (空間) を作成
    this.scene = new THREE.Scene();

    // 立方体のジオメトリーを作成
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    // 赤のマテリアルを作成
    this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // 上記作成のジオメトリーとマテリアルを合わせてメッシュを生成
    this.cube = new THREE.Mesh(this.geometry, this.material);
    // メッシュをシーンに追加
    this.scene.add(this.cube);

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // カメラ位置を設定
    this.camera.position.z = 5;

    //光源を作成
    this.directionalLight = new THREE.DirectionalLight(0xffffff);
    this.directionalLight.position.set(0.1, 0.1, 0.1);
    this.scene.add(this.directionalLight);
  }

  public render() {
    requestAnimationFrame(this.render.bind(this));

    // 立方体メッシュを自転
    this.cube.rotation.x += 0.05;
    this.cube.rotation.y += 0.01;

    // レンダリング
    this.renderer.render(this.scene, this.camera);
  }
}
