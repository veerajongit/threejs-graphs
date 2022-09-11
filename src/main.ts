import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Bar } from './CustomGeometry/Bar';
import { DrawGrid } from './grid';

const scene = new THREE.Scene();
const rendererSettings: THREE.WebGLRendererParameters = {};
rendererSettings.canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
const renderer = new THREE.WebGLRenderer(rendererSettings);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 250, 500);
camera.lookAt(250, 250, 250);


const barOne = (new Bar(0x0000ff)).getBar({ width: 10, height: 50, length: 10, }, { x: 25, z: 25 });

scene.add(barOne);


const barTwo = (new Bar(0x0000ff)).getBar({ width: 10, height: 100, length: 10, }, { x: 50, z: 50 });

scene.add(barTwo);

const barThree = (new Bar(0x000000)).getBar({ width: 10, height: 200, length: 10 }, { x: 75, z: 75 });
scene.add(barThree);

const pointLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);
renderer.render(scene, camera);
renderer.setClearColor(0xffffff, 1);

DrawGrid(scene, 0x000000, 500);

function animate() {
    requestAnimationFrame(animate);

    barOne.rotation.y += 0.01;
    barTwo.rotation.y += 0.02;
    barThree.rotation.y += 0.03;

    controls.update();
    renderer.render(scene, camera);
}

animate();

// if(WebGL.default.isWebGLAvailable()){
//   console.log('Web GL Available');
// }else{
//   const warning = WebGL.default.getWebGLErrorMessage();
//   console.log(warning);
// }