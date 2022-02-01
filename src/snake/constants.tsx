import { Vector2, Vector3 } from "three";

// The game map size (N x N)
export const N: number = 15;

export const getGameMapBorders = (mapSize: number): Vector2[] => {
    const borders: Vector2[] = [];
    for (let index = 0; index < mapSize; index++) {
        // Top
        borders.push(new Vector2(index, 0));

        // Bottom
        borders.push(new Vector2(index, mapSize));

        if (index < N - 2) {
            // Left
            borders.push(new Vector2(0, index + 1));

            // Right
            borders.push(new Vector2(mapSize, index + 1));
        }
    }

    return borders;
}

export const snakeStartPosition = new Vector2(0.5, 0.5);
export const snakeStartDirection = new Vector2(1, 0);
export const snakeStartSpeed = 0.05;

export const toVector3 = ({ x, y }: Vector2, z?: 0): Vector3 => {
    return new Vector3(x, y, z);
}
