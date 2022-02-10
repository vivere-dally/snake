import { Vector3 } from "three";
import { RANDOM_NUMBER } from "../../utils/constants";

export class Food {
    private __size: number;
    private __position!: Vector3;

    constructor(boardSize: number) {
        this.__size = Math.floor(boardSize / 2);
        this.generate();
    }

    /**
     * generate
     */
    public generate(): Vector3 {
        const x = RANDOM_NUMBER(-this.__size, this.__size);
        const y = RANDOM_NUMBER(-this.__size, this.__size);
        this.__position = new Vector3(x, y);

        return this.position;
    }

    public get position(): Vector3 {
        return this.__position;
    }

}