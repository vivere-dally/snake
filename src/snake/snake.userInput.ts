import { useEffect } from "react";
import { Vector3 } from "three";
import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, IS_DOWN, IS_LEFT, IS_RIGHT, IS_UP } from "../utils/constants";

interface UserInputProps {
    notifyDirectionChange: (vector: Vector3) => void;
}

export function useUserInput({ notifyDirectionChange }: UserInputProps) {
    useEffect(() => {
        let lastKeyPressed = '';
        const handleKeyPressed = (e: KeyboardEvent) => {
            if (e.key === lastKeyPressed) {
                return;
            }

            lastKeyPressed = e.key;
            if (IS_UP(e.key)) {
                notifyDirectionChange(DIRECTION_UP);
            }
            else if (IS_DOWN(e.key)) {
                notifyDirectionChange(DIRECTION_DOWN);
            }
            else if (IS_LEFT(e.key)) {
                notifyDirectionChange(DIRECTION_LEFT);
            }
            else if (IS_RIGHT(e.key)) {
                notifyDirectionChange(DIRECTION_RIGHT);
            }
        }

        document.addEventListener('keydown', handleKeyPressed);
        return () => {
            document.removeEventListener('keydown', handleKeyPressed);
        }
    }, [notifyDirectionChange]);
}
