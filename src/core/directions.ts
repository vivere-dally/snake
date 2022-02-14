import { Vector3 } from "three";

export const IS_UP = (key: string) => key === 'KeyW' || key === 'ArrowUp';
export const DIRECTION_UP = new Vector3(0, -1);

export const IS_DOWN = (key: string) => key === 'KeyS' || key === 'ArrowDown';
export const DIRECTION_DOWN = new Vector3(0, 1);

export const IS_LEFT = (key: string) => key === 'KeyA' || key === 'ArrowLeft';
export const DIRECTION_LEFT = new Vector3(-1, 0);

export const IS_RIGHT = (key: string) => key === 'KeyD' || key === 'ArrowRight';
export const DIRECTION_RIGHT = new Vector3(1, 0);
