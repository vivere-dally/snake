import { Shape, Vector2, Vector3 } from "three";

export enum SegmentType {
    HEAD,
    BODY
}

export interface BodySegment {
    position: Vector3;
    direction: Vector3;
    type: SegmentType
}

export class BodySegmentShape extends Shape {
    constructor(type: SegmentType) {
        super();
        this.draw(type);
    }

    private draw(type: SegmentType) {
        switch (type) {
            case SegmentType.HEAD:
                this.lineTo(0.5, 0);
                this.lineTo(-0.5, -0.5);
                this.lineTo(-0.5, 0.5);
                this.lineTo(0.5, 0);
                break;

            case SegmentType.BODY:
                // TOP
                this.lineTo(0, 0);
                this.lineTo(0, 1);

                // Left
                this.lineTo(0, 0);
                this.lineTo(1, 0);

                // Bottom
                this.lineTo(1, 0);
                this.lineTo(1, 1);

                // Right
                this.lineTo(0, 1);
                this.lineTo(1, 1);
                break;

            default:
                break;
        }
    }
}
