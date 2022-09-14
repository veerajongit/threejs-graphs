import { BoxGeometry, ColorRepresentation, DoubleSide, MathUtils, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { Graph } from './Graph';
import { pointInSpace } from './BasicElements';

interface BarDimensions2D {
    width: number,
    height: number
}
interface BarDimensions3D {
    width: number,
    height: number,
    length: number,
}

export class BarGraph extends Graph {
    constructor(color: ColorRepresentation = randColor()) { // If color isn't defined, randomly assign colors
        super(color);
    }

    bar2d = (dimensions: BarDimensions2D, position: pointInSpace): Mesh => {
        const geometry = new PlaneGeometry(dimensions.width, dimensions.height);
        const material = new MeshBasicMaterial({ color: this.color, side: DoubleSide });
        const mesh = new Mesh(geometry, material);
        mesh.position.set(position.x, position.y, position.z);
        return mesh;
    }

    bar3d = (dimensions: BarDimensions3D, position: pointInSpace): Mesh => {
        const geometry = new BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new MeshBasicMaterial({ color: this.color });
        const mesh = new Mesh(geometry, material);
        mesh.position.set(position.x, position.y, position.z);
        return mesh;
    }
}

const randColor = (): ColorRepresentation => `rgb(${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)})`;
