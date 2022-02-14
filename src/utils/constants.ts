import { Vector2, Vector3 } from "three";

export const NUMBER_COMPARISON_TOLERANCE: number = 1e7;

// The game map size (BOARD_SIZE x BOARD_SIZE)
export const BOARD_SIZE: number = 21;

// Snake
export const SNAKE_INIT_SIZE = 3;
export const SNAKE_INIT_POSITION = new Vector3(0.5, 0.5);
export const SNAKE_INIT_DIRECTION = new Vector3(1, 0);
export const SNAKE_INIT_SPEED = 1e3;

// Controls
export const IS_UP = (key: string) => key === 'KeyW' || key === 'ArrowUp';
export const DIRECTION_UP = new Vector3(0, -1);

export const IS_DOWN = (key: string) => key === 'KeyS' || key === 'ArrowDown';
export const DIRECTION_DOWN = new Vector3(0, 1);

export const IS_LEFT = (key: string) => key === 'KeyA' || key === 'ArrowLeft';
export const DIRECTION_LEFT = new Vector3(-1, 0);

export const IS_RIGHT = (key: string) => key === 'KeyD' || key === 'ArrowRight';
export const DIRECTION_RIGHT = new Vector3(1, 0);

// Utils
export const RANDOM_NUMBER = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
