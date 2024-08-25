import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class Scene {
  constructor(fov = 38, camera, scene, stats, controls, renderer) {
    this.fov = fov;
    this.scene = scene;
    this.stats = stats;
    this.camera = camera;
    this.controls = controls;
    this.renderer = renderer;
  }

  initScene() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      9000
    );
    this.camera.position.z = 350;
    this.camera.position.y = 100;
    this.scene = new THREE.Scene();


    this.scene.background = new THREE.Color(0x000011);

    const starCount = 10000;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3); // 3 coordinates per star

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] =  500 - 100; // x
      positions[i * 3 + 1] = 500 - 100; // y
      positions[i * 3 + 2] = 500 - 100; // z
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, opacity: 0.8, transparent: true });
    const stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(stars);

    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById("solar-system-canvas"),
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('#solar-system-wrapper').appendChild(this.renderer.domElement);

    this.controls =  new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true

    window.addEventListener("resize", () => this.onWindowResize(), false);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}