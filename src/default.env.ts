import { ColorRepresentation } from "three";

export class DefaultEnvironment {
    darkMode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    bgColor: ColorRepresentation = this.darkMode ? 0x000000 : 0xffffff;
    color: ColorRepresentation = this.darkMode ? 0xffffff : 0x000000;
    barChart: { defaultColor: ColorRepresentation, rotationSpeed: number } = {
        defaultColor: this.darkMode ? 0xffffff : 0x00000,
        rotationSpeed: 0.025
    }
}