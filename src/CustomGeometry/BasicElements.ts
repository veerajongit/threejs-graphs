import * as THREE from 'three';

export interface pointInSpace {
    x: number,
    y: number,
    z: number
}

export class BasicElements {
    public color: THREE.ColorRepresentation;
    constructor(color: THREE.ColorRepresentation) {
        this.color = color
    }

    public line = (startPoint: pointInSpace, endPoint: pointInSpace): THREE.Line => {
        const material = new THREE.LineBasicMaterial({ color: this.color });
        const points = [
            new THREE.Vector3(startPoint.x, startPoint.y, startPoint.z),
            new THREE.Vector3(endPoint.x, endPoint.y, endPoint.z),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return new THREE.Line(geometry, material);
    }
}