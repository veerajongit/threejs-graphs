import * as THREE from 'three';
import { BasicElements } from './BasicElements';
import { Text } from './Text';

export class Graph extends BasicElements {
    constructor(color: THREE.ColorRepresentation) {
        super(color);
    }

    xAxis = (length: number): THREE.Line => this.line({ x: 0, y: 0, z: 0 }, { x: length, y: 0, z: 0 });

    yAxis = (length: number): THREE.Line => this.line({ x: 0, y: 0, z: 0 }, { x: 0, y: length, z: 0 });

    XYAxis = (length: number): Array<THREE.Line> => [this.xAxis(length), this.yAxis(length)];

    YAxisNumericLabels = (points: number, length: number): Array<Promise<THREE.Mesh>> => {
        const texts = [];
        for (let i = 0; i <= length; i += points) {
            texts.push(Text.get(i.toString(), -2, i - 0.6, this.color));
        }
        return texts;
    }
}