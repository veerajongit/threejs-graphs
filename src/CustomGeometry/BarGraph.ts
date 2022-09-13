import * as THREE from 'three';
import { Graph } from './Graph';
import { pointInSpace } from './BasicElements';
interface BarDimensions {
    width: number,
    height: number,
    length: number,
}
export class BarGraph extends Graph {
    constructor(color?: THREE.ColorRepresentation) { // If color isn't defined, randomly assign colors
        if (color === undefined) {
            color = `rgb(${THREE.MathUtils.randInt(0, 255)}, ${THREE.MathUtils.randInt(0, 255)}, ${THREE.MathUtils.randInt(0, 255)})`;
        }
        super(color);
    }

    bar = (dimensions: BarDimensions, position: pointInSpace): THREE.Mesh => {
        const geometry = new THREE.BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new THREE.MeshBasicMaterial({ color: this.color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position.x, position.y, position.z);
        return mesh;
    }
}