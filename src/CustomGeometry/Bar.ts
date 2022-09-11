import * as THREE from 'three';

export class Bar {
    private color?: THREE.ColorRepresentation;
    constructor(color?: THREE.ColorRepresentation) {
        if (color === undefined) {
            this.color = `rgb(${THREE.MathUtils.randInt(0, 255)}, ${THREE.MathUtils.randInt(0, 255)}, ${THREE.MathUtils.randInt(0, 255)})`;
        } else {
            this.color = color;
        }

    }

    getBar = (
        dimensions: {
            width: number,
            height: number,
            length: number,
        }
    ): THREE.Mesh => {
        const geometry = new THREE.BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new THREE.MeshBasicMaterial({ color: this.color });
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }
}