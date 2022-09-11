import * as THREE from 'three';
import { CustomLine } from "./CustomLine";

export class CustomGrid extends CustomLine {
    constructor(color: THREE.ColorRepresentation) {
        super(color);
    }

    getGrid = (
        originX: number,
        originY: number,
        originZ: number,
        length: number
    ): Array<THREE.Line> => {
        return [
            this.getLine(new THREE.Vector3(originX, originY, originZ), new THREE.Vector3(0, length, 0)),
            this.getLine(new THREE.Vector3(originX, originY, originZ), new THREE.Vector3(0, 0, length)),
            this.getLine(new THREE.Vector3(originX, originY, originZ), new THREE.Vector3(length, 0, 0))
        ];
    }
}