import * as THREE from 'three';
import { BarGraph } from './CustomGeometry/BarGraph';
import { Graph } from './CustomGeometry/Graph';
import { Text } from './CustomGeometry/Text';


const scene = new THREE.Scene();
const rendererSettings: THREE.WebGLRendererParameters = {};
const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!;
rendererSettings.canvas = canvas;
const renderer = new THREE.WebGLRenderer(rendererSettings);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(1200, 700);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(50, 50, 75);
camera.lookAt(50, 50, -50);

const graph = new Graph(0xffffff);
graph.XYAxis(100).forEach(line => scene.add(line));
graph.YAxisNumericLabels(5, 50).forEach(async text => {
    const txt = await text;
    scene.add(txt);
});

let xPosition = 0;
const barList: Array<THREE.Mesh> = [];
for (let i = 0; i < 15; i++) {
    xPosition += 6.5;
    const height = THREE.MathUtils.randInt(0, 100);
    barList[i] = (new BarGraph).bar({ width: 2.5, height, length: 2.5 }, { x: xPosition, y: (height / 2) + 0.5, z: 0 });
}

barList.forEach(bar => scene.add(bar));

barList.forEach(async bar => {
    const txt = await Text.get(bar.position.y.toString(), bar.position.x, bar.position.y, 0xffffff);
    scene.add(txt);
});


// const light = new THREE.AmbientLight(0x404040);
// scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    barList.forEach(bar => bar.rotation.y += 0.01);
    // txt.rotation.x += 0.01;
    //     txt.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// if(WebGL.default.isWebGLAvailable()){
//   console.log('Web GL Available');
// }else{
//   const warning = WebGL.default.getWebGLErrorMessage();
//   console.log(warning);
// }