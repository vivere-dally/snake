import { Vector3 } from "three";

export function numEq(a: number, b: number, tolerance = Number.EPSILON): boolean {
    return Math.abs(a - b) <= tolerance;
}

export function setV3(a: Vector3, { x, y }: Vector3): void {
    a.set(x, y, 0);
}

export function rnd(from: number, to: number): number {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
