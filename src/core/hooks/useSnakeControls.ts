import { useEffect } from "react";
import { Vector3 } from "three";
import { DIRECTION, SNAKE_INIT } from "../../constants";

interface UserInputProps {
    notifyDirectionChange: (vector: Vector3) => void;
}

export function useSnakeControls({ notifyDirectionChange }: UserInputProps) {
    useEffect(() => {
        let lastDirection = SNAKE_INIT.DIRECTION.clone();
        const handleKeyPressed = (e: KeyboardEvent) => {
            console.log(e.key);
            const direction = DIRECTION[e.key];
            if (!direction) {
                return;
            }

            e.preventDefault();
            if (direction.FRONT.equals(lastDirection) || direction.REVERSE.equals(lastDirection)) {
                return;
            }

            lastDirection = direction.FRONT;
            notifyDirectionChange(direction.FRONT.clone());
        }

        document.addEventListener('keydown', handleKeyPressed);
        return () => {
            document.removeEventListener('keydown', handleKeyPressed);
        }
    }, [notifyDirectionChange]);
}
