import * as THREE from 'three';
import { Text } from './Text';

export class BasicDraw {
    protected color: THREE.ColorRepresentation;
    constructor(color: THREE.ColorRepresentation) {
        this.color = color
    }

    line = (
        startPoint: { x: number, y: number, z: number },
        endPoint: { x: number, y: number, z: number }
    ): THREE.Line => {
        const material = new THREE.LineBasicMaterial({ color: this.color });

        const points = [];
        points.push(new THREE.Vector3(startPoint.x, startPoint.y, startPoint.z));
        points.push(new THREE.Vector3(endPoint.x, endPoint.y, endPoint.z));

        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return new THREE.Line(geometry, material);
    }

    plot2Lines = (length: number): Array<THREE.Line> => {
        return [
            this.line({ x: 0, y: 0, z: 0 }, { x: length, y: 0, z: 0 }),
            this.line({ x: 0, y: 0, z: 0 }, { x: 0, y: length, z: 0 }),
        ];
    }

    plotYAxis = (points: number, length: number): Array<Promise<THREE.Mesh>> => {
        const promise = [];
        for (let i = 0; i <= length; i += points) {
            promise.push(Text.get(i.toString(), -2, i - 0.6, this.color));
        }
        return promise;
    }
}