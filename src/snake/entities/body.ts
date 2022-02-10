import { Vector3 } from "three";

export enum SegmentType {
    HEAD,
    BODY
}

export interface BodySegmentConfig {
    position: Vector3;
    direction: Vector3;
    type: SegmentType
}
