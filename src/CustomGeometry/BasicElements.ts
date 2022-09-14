import { BufferGeometry, ColorRepresentation, Line, LineBasicMaterial, MathUtils, Vector3 } from 'three';

export interface pointInSpace {
    x: number,
    y: number,
    z: number
}

export class BasicElements {
    public color: ColorRepresentation;
    constructor(color: ColorRepresentation) {
        this.color = color;
    }

    public static randColorGenerator = (): ColorRepresentation => `rgb(${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)}, ${MathUtils.randInt(0, 255)})`;

    public line = (startPoint: pointInSpace, endPoint: pointInSpace): Line => {
        const material = new LineBasicMaterial({ color: this.color });
        const points = [
            new Vector3(startPoint.x, startPoint.y, startPoint.z),
            new Vector3(endPoint.x, endPoint.y, endPoint.z),
        ];
        const geometry = new BufferGeometry().setFromPoints(points);
        return new Line(geometry, material);
    }
}