import { BoxGeometry, BufferGeometry, ColorRepresentation, DoubleSide, Line, LineBasicMaterial, MathUtils, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from 'three';
import { DefaultEnvironment } from '../default.env';
import { Environment } from '../environment.default';

export type coordinates = {
    x: number,
    y: number,
    z: number
}

export type cuboidDimensions = {
    width: number,
    height: number,
    length?: number //2d Graph will not have length
}

export class BasicElements {
    public color: ColorRepresentation;
    protected env: DefaultEnvironment = Environment();

    constructor(color?: ColorRepresentation) {
        color = (color === undefined) ? this.env.barChart.defaultColor : color;
        this.color = color;
    }

    public static randColorGenerator = (): ColorRepresentation => `rgb(${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)})`;

    public line = (startPoint: coordinates, endPoint: coordinates): Line => {
        const material = new LineBasicMaterial({ color: this.color });
        const points = [
            new Vector3(startPoint.x, startPoint.y, startPoint.z),
            new Vector3(endPoint.x, endPoint.y, endPoint.z),
        ];
        const geometry = new BufferGeometry().setFromPoints(points);
        return new Line(geometry, material);
    }

    public cuboid2D = (dimensions: cuboidDimensions): Mesh => {
        const geometry = new PlaneGeometry(dimensions.width, dimensions.height);
        const material = new MeshBasicMaterial({ color: this.color, side: DoubleSide });
        return new Mesh(geometry, material);
    }

    public cuboid3D = (dimensions: cuboidDimensions): Mesh => {
        const geometry = new BoxGeometry(dimensions.width, dimensions.height, dimensions.length);
        const material = new MeshBasicMaterial({ color: this.color });
        return new Mesh(geometry, material);
    }
}