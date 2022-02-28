import { Sprite, SpriteMaterial, Vector3 } from "three";
import { HALF_BOARD_SIZE, NUMBER_COMPARISON_TOLERANCE, ROTATION, SNAKE_INIT } from "../constants";
import { GET_SNAKE_BODY_TEXTURE, GET_SNAKE_TEXTURE, SNAKE_BODY_STRAIGHT, SNAKE_HEAD, SNAKE_TAIL } from "./textures";
import { numEq, setV3 } from "./utils";

export interface SnakeSegment {
    direction: Vector3,
    sprite: Sprite
}

export class Snake {
    private static __instance: Snake;

    public static get instance() {
        if (!this.__instance) {
            this.__instance = new Snake();
        }

        return this.__instance;
    }

    private constructor() {
        this.__direction = SNAKE_INIT.DIRECTION.clone();
        this.__snake = [];

        for (let index = 0; index < SNAKE_INIT.SIZE; index++) {
            const map = index === 0 ? SNAKE_HEAD : index === SNAKE_INIT.SIZE - 1 ? SNAKE_TAIL : SNAKE_BODY_STRAIGHT;
            const sprite = new Sprite(new SpriteMaterial({ map, rotation: ROTATION(SNAKE_INIT.DIRECTION) }));
            setV3(sprite.position, SNAKE_INIT.POSITION.clone().sub(SNAKE_INIT.DIRECTION.clone().multiplyScalar(index)));
            this.__snake.push({ direction: SNAKE_INIT.DIRECTION.clone(), sprite: sprite });
        }
    }

    private __direction: Vector3;
    private __snake: SnakeSegment[];

    /**
     * move
     */
    public move() {
        let direction = this.__direction;
        for (let index = 0; index < this.__snake.length; index++) {
            const element = this.__snake[index];
            element.sprite.position.add(direction);
            // TODO - set material map
            // if (0 < index && index < this.__snake.length - 1) {
            //     element.sprite.material.map = GET_SNAKE_BODY_TEXTURE(this.__snake[index - 1].direction, element.direction);
            // }

            element.sprite.material.rotation = ROTATION(direction);
            element.sprite.updateMatrix();
            [element.direction, direction] = [direction, element.direction];
        }

        this.__direction = this.__snake[0].direction;
    }

    /**
     * canEat
     */
    public canEat({ x: foodX, y: foodY }: Vector3) {
        const { x: headX, y: headY } = this.__snake[0].sprite.position;
        if (numEq(headX, foodX, NUMBER_COMPARISON_TOLERANCE) &&
            numEq(headY, foodY, NUMBER_COMPARISON_TOLERANCE)) {
            return true;
        }

        return false;
    }

    /**
     * eat
     */
    public eat() {
        const previousTail = this.__snake.at(-1)!;
        const tail = new Sprite(new SpriteMaterial({ map: SNAKE_TAIL, rotation: ROTATION(previousTail.direction) }));
        setV3(tail.position, previousTail.sprite.position.clone().sub(previousTail.direction));

        // TODO - set previous tail material map
        this.__snake.push({ direction: previousTail.direction, sprite: tail });
        return tail;
    }

    /**
     * hasCollided
     */
    public hasCollided() {
        const head = this.__snake[0].sprite.position;
        if (head.x < -HALF_BOARD_SIZE || head.x > HALF_BOARD_SIZE) {
            return true;
        }

        if (head.y < -HALF_BOARD_SIZE || head.y > HALF_BOARD_SIZE) {
            return true;
        }

        for (let index = 1; index < this.__snake.length; index++) {
            const element = this.__snake[index];
            if (element.sprite.position.equals(head)) {
                return true;
            }
        }

        return false;
    }

    public set direction(v: Vector3) {
        this.__direction = v;
    }

    public get segments() {
        return this.__snake;
    }
}
