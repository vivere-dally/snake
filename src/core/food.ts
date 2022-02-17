import { Sprite, SpriteMaterial, Vector3 } from "three";
import { HALF_BOARD_SIZE } from "../constants";
import { FOOD } from "./textures";
import { rnd, setV3 } from "./utils";

export default class Food {
    private static __instance: Food;

    public static get instance() {
        if (!this.__instance) {
            this.__instance = new Food();
        }

        return this.__instance;
    }

    private constructor() {
        this.__position = new Vector3(
            rnd(-HALF_BOARD_SIZE, HALF_BOARD_SIZE),
            rnd(-HALF_BOARD_SIZE, HALF_BOARD_SIZE)
        )

        this.__sprite = new Sprite(new SpriteMaterial({ map: FOOD }));
        setV3(this.__sprite.position, this.__position);
    }

    private __position: Vector3;
    private __sprite: Sprite;

    public generate() {
        this.__position = new Vector3(
            rnd(-HALF_BOARD_SIZE, HALF_BOARD_SIZE),
            rnd(-HALF_BOARD_SIZE, HALF_BOARD_SIZE)
        )

        setV3(this.__sprite.position, this.__position);
        return this.__position;
    }

    public get position() {
        return this.__position;
    }

    public get sprite() {
        return this.__sprite;
    }
}
