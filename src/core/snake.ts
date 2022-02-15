import { Vector3 } from "three";

export const HALF_BOARD_SIZE: number = 21;

export const NUMBER_COMPARISON_TOLERANCE: number = 1e7;

export const SNAKE_INIT_SIZE = 3;
export const SNAKE_INIT_POSITION = new Vector3(0, 0);
export const SNAKE_INIT_DIRECTION = new Vector3(1, 0);
export const SNAKE_INIT_SPEED = 1e2;

export const HEAD_HORIZONTAL_LEFT_TO_RIGHT = Math.PI / 2;
export const HEAD_HORIZONTAL_RIGHT_TO_LEFT = -Math.PI / 2;

export const HEAD_VERTICAL_TOP_TO_BOTTOM = 0;
export const HEAD_VERTICAL_BOTTOM_TO_TOP = Math.PI;

export const BODY_VERTICAL = 0;
export const BODY_HORIZONTAL = -Math.PI / 2;

export interface SnakeSegment {
    position: Vector3;
    direction: Vector3;
    rotation: number;
}

export class Snake {
    private __snake: SnakeSegment[];

    private static __instance: Snake;

    private constructor() {
        this.__snake = []
        this.__snake.push({ position: SNAKE_INIT_POSITION.clone(), direction: SNAKE_INIT_DIRECTION.clone(), rotation: HEAD_HORIZONTAL_LEFT_TO_RIGHT });
        for (let index = 1; index <= SNAKE_INIT_SIZE; index++) {
            const segmentPosition = SNAKE_INIT_POSITION.clone();
            segmentPosition.x -= index;
            this.__snake.push({ position: segmentPosition, direction: SNAKE_INIT_DIRECTION.clone(), rotation: BODY_HORIZONTAL });
        }
    }

    /**
     * instance
     */
    public static get instance(): Snake {
        if (!this.__instance) {
            this.__instance = new Snake();
        }

        return this.__instance;
    }

    /**
     * move
     */
    public move() {
        for (let index = 0; index < this.__snake.length; index++) {
            const element = this.__snake[index];
            element.position.add(element.direction);
        }
    }

    public changeDirection(direction: Vector3) {
        let next = direction;
        for (let index = 0; index < Snake.instance.snakeSegments.length; index++) {
            const temp = Snake.instance.snakeSegments[index].direction.clone();
            Snake.instance.snakeSegments[index].direction = next;
            next = temp;
        }
    }

    /**
     * hasHitTheWall
     */
    public hasHitTheWall(size: number): boolean {
        const halfSize = size / 2;
        const { x, y } = this.__snake[0].position;
        if (x < -halfSize || x >= halfSize ||
            y < -halfSize || y >= halfSize) {
            return true;
        }

        return false;
    }

    /**
     * eat
     */
    public eat({ x: foodX, y: foodY }: Vector3): boolean {
        const { x: headX, y: headY } = this.__snake[0].position;
        if (headX.equals(foodX, NUMBER_COMPARISON_TOLERANCE) &&
            headY.equals(foodY, NUMBER_COMPARISON_TOLERANCE)) {
            this.grow();
            return true;
        }

        return false;
    }

    private grow() {
        const segment: SnakeSegment = { ...this.__snake[this.__snake.length - 1] };
        segment.position.x -= segment.direction.x;
        segment.position.y -= segment.direction.y;

        this.__snake.push(segment);
    }


    public get snakeSegments() {
        return this.__snake;
    }

}
