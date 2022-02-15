import { useEffect } from "react";
import { Vector3 } from "three";

const DIRECTIONS: Readonly<Record<string, Vector3>> = {
    'KeyW': new Vector3(0, -1),
    'ArrowUp': new Vector3(0, -1),

    'KeyS': new Vector3(0, 1),
    'ArrowDown': new Vector3(0, 1),

    'KeyA': new Vector3(-1, 0),
    'ArrowLeft': new Vector3(-1, 0),

    'KeyD': new Vector3(1, 0),
    'ArrowRight': new Vector3(1, 0)
}

const OPPOSITE_DIRECTIONS: Readonly<Record<string, Vector3>> = {
    'KeyW': new Vector3(0, 1),
    'ArrowUp': new Vector3(0, 1),

    'KeyS': new Vector3(0, -1),
    'ArrowDown': new Vector3(0, -1),

    'KeyA': new Vector3(1, 0),
    'ArrowLeft': new Vector3(1, 0),

    'KeyD': new Vector3(-1, 0),
    'ArrowRight': new Vector3(-1, 0)
}

interface UserInputProps {
    notifyDirectionChange: (vector: Vector3) => void;
}

export function useSnakeControls({ notifyDirectionChange }: UserInputProps) {
    useEffect(() => {
        let lastDirection = DIRECTIONS['ArrowRight'];
        const handleKeyPressed = (e: KeyboardEvent) => {
            const direction = DIRECTIONS[e.key];
            if (!direction) {
                return;
            }

            e.preventDefault();
            if (direction.equals(lastDirection) || lastDirection.equals(OPPOSITE_DIRECTIONS[e.key])) {
                return;
            }

            notifyDirectionChange(direction.clone());
            lastDirection = direction;
        }

        document.addEventListener('keydown', handleKeyPressed);
        return () => {
            document.removeEventListener('keydown', handleKeyPressed);
        }
    }, [notifyDirectionChange]);
}
