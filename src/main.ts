import * as THREE from 'three';
import { BarGraph } from './CustomGeometry/BarGraph';
import { BasicElements } from './CustomGeometry/BasicElements';
import { Graph } from './CustomGeometry/Graph';
import { Text } from './CustomGeometry/Text';

const environment = {
    bgColor: 0xffffff,
    color: 0x000000
}


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

const graph = new Graph(environment.color);
graph.XYAxis(100).forEach(line => scene.add(line));
graph.YAxisNumericLabels(5, 50).forEach(async text => {
    const txt = await text;
    scene.add(txt);
});

let xPosition = 0;
const barList3D: Array<THREE.Mesh> = [];
for (let i = 0; i < 7; i++) {
    xPosition += 6.5;
    const height = THREE.MathUtils.randInt(0, 100);
    barList3D[i] = (new BarGraph(BasicElements.randColorGenerator())).bar3d({ width: 2.5, height, length: 2.5 }, { x: xPosition, y: 0, z: 0 });
}

barList3D.forEach(bar => scene.add(bar));

barList3D.forEach(async bar => {
    const txt = await Text.get(
        bar.position.y.toString(),
        { x: bar.position.x, y: (bar.position.y * 2) + 1.5, z: 0 },
        environment.color
    );
    scene.add(txt);
});


const barList2D: Array<THREE.Mesh> = [];
for (let i = 0; i < 7; i++) {
    xPosition += 6.5;
    const height = THREE.MathUtils.randInt(0, 100);
    barList2D[i] = (new BarGraph(BasicElements.randColorGenerator())).bar2d({ width: 2.5, height }, { x: xPosition, y: 0, z: 0 });
}
barList2D.forEach(bar => scene.add(bar));

barList2D.forEach(async bar => {
    const txt = await Text.get(
        bar.position.y.toString(),
        { x: bar.position.x, y: (bar.position.y * 2) + 1.5, z: 0 },
        environment.color
    );
    scene.add(txt);
});


// const light = new THREE.AmbientLight(0x404040);
// scene.add(light);

renderer.setClearColor(environment.bgColor);

function animate() {
    requestAnimationFrame(animate);
    barList3D.forEach(bar => bar.rotation.y += 0.01);
    renderer.render(scene, camera);
}
animate();

// if(WebGL.default.isWebGLAvailable()){
//   console.log('Web GL Available');
// }else{
//   const warning = WebGL.default.getWebGLErrorMessage();
//   console.log(warning);
// }