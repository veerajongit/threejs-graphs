import { ColorRepresentation, Mesh, MeshBasicMaterial } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { coordinates } from "./BasicElements";

export class Text {
    static get = (text: string, position: coordinates, color: ColorRepresentation): Promise<Mesh> => {
        return new Promise(resolve => {
            const loader = new FontLoader();
            loader.load('src/fonts/droid_sans_regular.typeface.json', function (font) {
                const geometry = new TextGeometry(text, {
                    font: font,
                    size: 1.5,
                    height: 0.1
                });
                geometry.center();

                const material = new MeshBasicMaterial({
                    color
                });

                const txt = new Mesh(geometry, material);
                txt.position.set(position.x, position.y, position.z);
                resolve(txt);
            });
        });
    }

    static getDiagonal = (text: string, position: coordinates, color: ColorRepresentation): Promise<Mesh> => {
        return new Promise(resolve => {
            const loader = new FontLoader();
            loader.load('src/fonts/droid_sans_regular.typeface.json', function (font) {
                const geometry = new TextGeometry(text, {
                    font: font,
                    size: 1.5,
                    height: 0.1
                });
                geometry.center();
                geometry.rotateX(100);
                geometry.rotateY(Math.PI / 3);

                const material = new MeshBasicMaterial({ color });

                const txt = new Mesh(geometry, material);
                txt.position.set(position.x - 0.5, position.y - 1.5, position.z);
                resolve(txt);
            });
        });
    }
}