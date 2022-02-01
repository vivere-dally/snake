import { Vector3 } from "three";

export interface Coordinates {
    position: Vector3;
    direction: Vector3;
}

export interface SnakeBlock {
    move: (speed: number) => void;
}
