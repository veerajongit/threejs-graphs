import { ColorRepresentation, Mesh } from 'three';
import { Graph } from './Graph';
import { coordinates, cuboidDimensions } from './BasicElements';

export class BarGraph extends Graph {
    constructor(color?: ColorRepresentation) {
        super(color);
    }

    bar2d = (dimensions: cuboidDimensions, position: coordinates): Mesh => {
        const mesh = this.cuboid2D(dimensions);
        mesh.position.set(position.x, (dimensions.height / 2) + position.y, position.z);
        return mesh;
    }

    bar3d = (dimensions: cuboidDimensions, position: coordinates): Mesh => {
        const mesh = this.cuboid3D(dimensions);
        mesh.position.set(position.x, (dimensions.height / 2) + position.y, position.z);
        return mesh;
    }
}
