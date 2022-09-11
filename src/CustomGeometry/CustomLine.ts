import * as THREE from 'three';

export class CustomLine {
    protected color: THREE.ColorRepresentation;
    constructor(color: THREE.ColorRepresentation) {
        this.color = color;
    }

    protected getLine = (
        pointVectorOne: THREE.Vector3,
        pointVectorTwo: THREE.Vector3
        ): THREE.Line => {
        const material = new THREE.LineBasicMaterial({ color: this.color });
        const points = [];
        points.push(pointVectorOne);
        points.push(pointVectorTwo);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return new THREE.Line(geometry, material);
    }
}