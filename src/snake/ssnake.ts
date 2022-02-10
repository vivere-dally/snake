import { Vector3 } from "three";
import { BOARD_SIZE, NUMBER_COMPARISON_TOLERANCE, SNAKE_INIT_POSITION, SNAKE_INIT_SIZE } from "../utils/constants";

export class SnakeBlock {
    protected _position: Vector3;
    protected _direction: Vector3;

    constructor(position: Vector3, direction: Vector3) {
        this._position = position;
        this._direction = direction;
    }

    /**
     * move
     */
    public move(speed: number) {
        const { x, y } = this._direction.clone().multiplyScalar(speed);
        this._position.x += x;
        this._position.y += y;
    }


    public set direction(direction: Vector3) {
        this._direction = direction;
    }
}

export class SnakeHead extends SnakeBlock {
    constructor(position: Vector3, direction: Vector3) {
        super(position, direction);
    }

    /**
     * hasHitTheWall
     */
    public hasHitTheWall(boardSize: number = BOARD_SIZE): boolean {
        const { x, y } = this._position;
        const halfBoardSize = boardSize / 2;
        if (x < -halfBoardSize || x >= halfBoardSize ||
            y < -halfBoardSize || y >= halfBoardSize) {
            return true;
        }

        return false;
    }

    /**
     * canEat
     */
    public canEat({ x: fx, y: fy }: Vector3): boolean {
        const { x, y } = this._position;
        if (x.equals(fx, NUMBER_COMPARISON_TOLERANCE) &&
            y.equals(fy, NUMBER_COMPARISON_TOLERANCE)) {
            return true;
        }

        return false;
    }
}

export interface SnakeConfig {
    boardSize: number;
    size: number;
    position: Vector3;
    direction: Vector3;
}

export class Snake {
    private __config: SnakeConfig

    private __body: SnakeBlock[];
    private __head: SnakeHead;

    constructor(config: SnakeConfig) {
        this.__config = config;

        this.__head = new SnakeHead(config.position, config.direction);
        this.__body = [];
        this.__body.push(this.__head);
        for (let index = 1; index <= config.size; index++) {
            const { x, y } = config.position;
            const blockPosition = new Vector3(x - index, y);
            this.__body.push(new SnakeBlock(blockPosition, config.direction));
        }
    }

    /**
     * move
     */
    public move() {

    }
}
