import * as THREE from 'three';
import { CustomGrid } from './CustomGeometry/CustomGrid';


export function DrawGrid(
    scene: THREE.Scene,
    color: THREE.ColorRepresentation,
    length: number
) {
    (new CustomGrid(color)).getGrid(0, 0, 0, length).forEach(ele => scene.add(ele));
}
