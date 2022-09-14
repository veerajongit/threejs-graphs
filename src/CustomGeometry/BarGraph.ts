import { BoxGeometry, ColorRepresentation, DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { Graph } from './Graph';
import { pointInSpace } from './BasicElements';

interface BarDimensions {
    width: number,
    height: number,
    length?: number //2d Graph will not have length
}

export class BarGraph extends Graph {
    constructor(color: ColorRepresentation = 0xffffff) {
        super(color);
    }

    bar2d = (dimensions: BarDimensions, position: pointInSpace): Mesh => {
        const geometry = new PlaneGeometry(dimensions.width, dimensions.height);
        const material = new MeshBasicMaterial({ color: this.color, side: DoubleSide });
        const mesh = new Mesh(geometry, material);
        mesh.position.set(position.x, (dimensions.height / 2) + position.y, position.z);
        return mesh;
    }

    bar3d = (dimensions: BarDimensions, position: pointInSpace): Mesh => {
        const geometry = new BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new MeshBasicMaterial({ color: this.color });
        const mesh = new Mesh(geometry, material);
        mesh.position.set(position.x, (dimensions.height / 2) + position.y, position.z);
        return mesh;
    }
}
