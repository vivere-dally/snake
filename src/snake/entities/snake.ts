import { Vector3 } from "three";
import { NUMBER_COMPARISON_TOLERANCE } from "../../utils/constants";
import { BodySegment, SegmentType } from "./Body";

export class Snake {
    private __snake: BodySegment[];

    constructor(
        size: number,
        position: Vector3,
        direction: Vector3
    ) {
        this.__snake = []
        this.__snake.push({ position: position.clone(), direction: direction.clone(), type: SegmentType.HEAD });
        for (let index = 1; index <= size; index++) {
            const segmentPosition = position.clone();
            segmentPosition.x -= index;
            this.__snake.push({ position: segmentPosition, direction: direction.clone(), type: SegmentType.BODY });
        }
    }

    /**
     * move
     */
    public move(speed: number) {
        // Save the head's coordinates
        let segment: BodySegment = { ...this.__snake[0], type: SegmentType.BODY };

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
        const segment: BodySegment = { ...this.__snake[this.__snake.length - 1] };
        segment.position.x -= segment.direction.x;
        segment.position.y -= segment.direction.y;

        this.__snake.push(segment);
    }
}
