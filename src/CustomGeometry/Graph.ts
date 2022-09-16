import { ColorRepresentation, Line, Mesh } from 'three';
import { BasicElements } from './BasicElements';
import { Text } from './Text';

export class Graph extends BasicElements {
    constructor(color?: ColorRepresentation) {
        super(color);
    }

    xAxis = (length: number): Line => this.line({ x: 0, y: 0, z: 0 }, { x: length, y: 0, z: 0 });
    yAxis = (length: number): Line => this.line({ x: 0, y: 0, z: 0 }, { x: 0, y: length, z: 0 });

    YAxisNumericLabels = (points: number, length: number): Array<Promise<Mesh>> => {
        const texts = [];
        for (let i = 0; i <= length; i += points) {
            texts.push(Text.get(i.toString(), { x: -2, y: (i - 0.6) * 2 + 1.5, z: 0 }, this.color));
        }
        return texts;
    }

    XAxisLabels = (labels: Array<string>, distance: number): Array<Promise<Mesh>> => {
        const texts = [];
        for (let i = 0; i < labels.length; i++) {
            texts.push(Text.getDiagonal(labels[i], { x: distance * (i + 1), y: -1.5, z: 0 }, this.color));
        }
        return texts;
    }
}