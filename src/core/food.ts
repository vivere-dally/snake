import { Sprite, SpriteMaterial, Vector3 } from "three";
import { Set } from "typescript";
import { HALF_BOARD_SIZE, SNAKE_INIT } from "../constants";
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
        const xSet = new Set<number>();
        const ySet = new Set<number>();

        for (let index = 0; index < SNAKE_INIT.SIZE; index++) {
            const {x, y} = SNAKE_INIT.POSITION.clone().sub(SNAKE_INIT.DIRECTION.clone().multiplyScalar(index));
            xSet.add(x);
            ySet.add(y);
        }

        this.__position = new Vector3(
            this.__generateCoordinateWithoutCollision(xSet),
            this.__generateCoordinateWithoutCollision(ySet)
        )

        this.__sprite = new Sprite(new SpriteMaterial({ map: FOOD }));
        setV3(this.__sprite.position, this.__position);
    }

    private __position: Vector3;
    private __sprite: Sprite;

    public generate(snakePositions: Vector3[]) {
        const xSet = new Set(snakePositions.map(e => e.x));
        const ySet = new Set(snakePositions.map(e => e.y));

        this.__position = new Vector3(
            this.__generateCoordinateWithoutCollision(xSet),
            this.__generateCoordinateWithoutCollision(ySet)
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

    private __generateCoordinateWithoutCollision(set: Set<number>) {
        let coordinate;
        do {
            coordinate = rnd(-HALF_BOARD_SIZE, HALF_BOARD_SIZE);
        } while (set.has(coordinate));

        return coordinate;
    }
}
