import { Vector3 } from "three";
import { match } from "ts-pattern";

export const NUMBER_COMPARISON_TOLERANCE = 1 / 1e7;

export const BOARD_SIZE = 23;
export const HALF_BOARD_SIZE = Math.floor(BOARD_SIZE / 2);

export interface FR {
    FRONT: Vector3,
    REVERSE: Vector3
}

export const DIRECTION: Record<string, FR> = {
    // TOP
    'KeyW': { FRONT: new Vector3(0, 1), REVERSE: new Vector3(0, -1) },
    'ArrowUp': { FRONT: new Vector3(0, 1), REVERSE: new Vector3(0, -1) },

    // RIGHT
    'KeyD': { FRONT: new Vector3(1, 0), REVERSE: new Vector3(-1, 0) },
    'ArrowRight': { FRONT: new Vector3(1, 0), REVERSE: new Vector3(-1, 0) },

    // BOTTOM
    'KeyS': { FRONT: new Vector3(0, -1), REVERSE: new Vector3(0, 1) },
    'ArrowDown': { FRONT: new Vector3(0, -1), REVERSE: new Vector3(0, 1) },

    // LEFT
    'KeyA': { FRONT: new Vector3(-1, 0), REVERSE: new Vector3(1, 0) },
    'ArrowLeft': { FRONT: new Vector3(-1, 0), REVERSE: new Vector3(1, 0) }
};

export function ROTATION({ x, y }: Vector3): number {
    return match([x, y])
        .with([0, 1], () => Math.PI)
        .with([1, 0], () => Math.PI / 2)
        .with([0, -1], () => 0)
        .with([-1, 0], () => - Math.PI / 2)
        .otherwise(() => 0);
}

export const SNAKE_INIT = {
    SIZE: 3,
    POSITION: new Vector3(0, 0),
    DIRECTION: DIRECTION['KeyD'].FRONT.clone()
} as const;

