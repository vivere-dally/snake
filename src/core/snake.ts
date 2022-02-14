import { Vector3 } from "three";

export const HALF_BOARD_SIZE: number = 21;

export const NUMBER_COMPARISON_TOLERANCE: number = 1e7;

export const SNAKE_INIT_SIZE = 3;
export const SNAKE_INIT_POSITION = new Vector3(0.5, 0.5);
export const SNAKE_INIT_DIRECTION = new Vector3(1, 0);
export const SNAKE_INIT_SPEED = 1e3;

export interface SnakeSegment {
    position: Vector3;
    direction: Vector3;
}

export class Snake {
    private __snake: SnakeSegment[];

    private static __instance: Snake;

    private constructor() {
        this.__snake = []
        this.__snake.push({ position: SNAKE_INIT_POSITION.clone(), direction: SNAKE_INIT_DIRECTION.clone() });
        for (let index = 1; index <= SNAKE_INIT_SIZE; index++) {
            const segmentPosition = SNAKE_INIT_POSITION.clone();
            segmentPosition.x -= index;
            this.__snake.push({ position: segmentPosition, direction: SNAKE_INIT_DIRECTION.clone() });
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
    public move(speed: number) {
        // Save the head's coordinates
        let segment: SnakeSegment = { ...this.__snake[0] };

        // Move the head
        const { x, y } = this.__snake[0].direction.clone().multiplyScalar(speed);
        this.__snake[0].position.x += x;
        this.__snake[0].position.y += y;

        // Move the body
        for (let index = 1; index < this.__snake.length; index++) {
            const temp = this.__snake[index];
            this.__snake[index] = segment;
            segment = temp;
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
