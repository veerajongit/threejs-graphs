import * as THREE from 'three';

export class Bar {
    private color: THREE.ColorRepresentation;
    constructor(color: THREE.ColorRepresentation) {
        this.color = color;
    }

    getBar = (
        dimensions: {
            width: number,
            height: number,
            length: number,
        },
        position: {
            x: number,
            z: number
        }
    ): THREE.Mesh => {
        const geometry = new THREE.BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new THREE.MeshToonMaterial({ color: this.color });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position.x, dimensions.height / 2, position.z);
        return mesh;
    }
}