import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export class Character3D {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private container!: HTMLElement;
  private controls: any;
  private renderer!: THREE.WebGLRenderer;
  private clock = new THREE.Clock();
  private mixers: any[] = [];

  constructor() {
    this.container = document.querySelector('#scene-container') as HTMLElement;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8fbcd4);

    this.createCamera();
    this.createControls();
    this.createLights();
    this.loadModels();
    this.createRenderer();

    this.renderer.setAnimationLoop(() => {
      this.update();
      this.render();
    });
    // window.addEventListener('resize', this.onWindowResize);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(35, this.container.clientWidth / this.container.clientHeight, 1, 100);
    this.camera.position.set(-1.5, 1.5, 6.5);
  }

  createControls() {
    this.controls = new OrbitControls(this.camera, this.container);
  }

  createLights() {
    const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x0f0e0d, 5);

    const mainLight = new THREE.DirectionalLight(0xffffff, 5);
    mainLight.position.set(10, 10, 10);

    this.scene.add(ambientLight, mainLight);
  }

  loadModels() {
    const loader = new GLTFLoader();

    // A reusable function to set up the models. We're passing in a position parameter
    // so that they can be individually placed around the scene
    const onLoad = (gltf: GLTF, position: THREE.Vector3) => {
      const model = gltf.scene.children[0];
      model.position.copy(position);

      const animation = gltf.animations[0];

      const mixer = new THREE.AnimationMixer(model);
      this.mixers.push(mixer);

      const action = mixer.clipAction(animation);
      action.play();

      this.scene.add(model);
    };

    // the loader will report the loading progress to this function
    // eslint-disable-next-line
    const onProgress = () => {};

    // the loader will send any error messages to this function, and we'll log
    // them to to console
    const onError = (errorMessage: any) => {
      console.log(errorMessage);
    };

    // load the first model. Each model is loaded asynchronously,
    // so don't make any assumption about which one will finish loading first
    const parrotPosition = new THREE.Vector3(0, 0, 2.5);
    loader.load('./models/Parrot.glb', gltf => onLoad(gltf, parrotPosition), onProgress, onError);

    const flamingoPosition = new THREE.Vector3(7.5, 0, -10);
    loader.load('./models/Flamingo.glb', gltf => onLoad(gltf, flamingoPosition), onProgress, onError);

    const storkPosition = new THREE.Vector3(0, -2.5, -10);
    loader.load('./models/Stork.glb', gltf => onLoad(gltf, storkPosition), onProgress, onError);
  }

  createRenderer() {
    // create a WebGLRenderer and set its width and height
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.gammaFactor = 2.2;
    // this.renderer.gammaOutput = true;

    this.renderer.physicallyCorrectLights = true;

    this.container.appendChild(this.renderer.domElement);
  }

  update() {
    const delta = this.clock.getDelta();

    for (const mixer of this.mixers) {
      mixer.update(delta);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;

    // update the camera's frustum
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }
}
