import * as THREE from 'three';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export class Text {
    // protected color: THREE.ColorRepresentation;
    // constructor(color: THREE.ColorRepresentation) {
    //     this.color = color;
    // }
    static get = (text: string, x: number, y: number, color: THREE.ColorRepresentation): Promise<THREE.Mesh> => {
        return new Promise(resolve => {
            const loader = new FontLoader();
            loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/droid/droid_sans_regular.typeface.json', function (font) {
                const geometry = new TextGeometry(text, {
                    font: font,
                    size: 1.5,
                    height: 0.1
                });
                geometry.center();

                const material = new THREE.MeshBasicMaterial({
                    color
                });

                const txt = new THREE.Mesh(geometry, material);
                txt.position.set(x, (y * 2) + 1.5, 0);
                resolve(txt);
            });
        });
    }
}