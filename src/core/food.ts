import { Vector3 } from "three";
import { HALF_BOARD_SIZE } from "./snake";

export const RANDOM_NUMBER = (from: number, to: number): number => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

export default class Food {
    private static __instance: Food;

    private __position: Vector3;

    private constructor() {
        this.__position = new Vector3(
            RANDOM_NUMBER(-HALF_BOARD_SIZE, HALF_BOARD_SIZE),
            RANDOM_NUMBER(-HALF_BOARD_SIZE, HALF_BOARD_SIZE)
        )
    }

    /**
     * instance
     */
    public static get instance() {
        if (!this.__instance) {
            this.__instance = new Food();
        }

        return this.__instance;
    }

    public generate() {
        this.__position = new Vector3(
            RANDOM_NUMBER(-HALF_BOARD_SIZE, HALF_BOARD_SIZE),
            RANDOM_NUMBER(-HALF_BOARD_SIZE, HALF_BOARD_SIZE)
        )

        return this.__position;
    }

    public get position() {
        return this.__position;
    }
}
