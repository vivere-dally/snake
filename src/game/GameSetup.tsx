import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Food from "../core/food";
import { useSnakeControls } from "../core/hooks/useSnakeControls";
import { useSnakeSpeed } from "../core/hooks/useSnakeSpeed";
import { Snake } from "../core/snake";

export default function GameSetup() {
    useSnakeControls({ notifyDirectionChange: (direction) => { Snake.instance.direction = direction; } });
    const canMove = useSnakeSpeed();
    const isPaused = useState(false);

    const scene = useThree(state => state.scene);

    useEffect(() => {
        scene.add(Food.instance.sprite);
        scene.add(...Snake.instance.segments.map(s => s.sprite));
    }, []);

    useFrame(() => {
        if (!canMove() || Snake.instance.hasCollided()) {
            return;
        }

        Snake.instance.move();
        if (Snake.instance.canEat(Food.instance.position)) {
            scene.add(Snake.instance.eat());
            Food.instance.generate(Snake.instance.segments.map(e => e.sprite.position.clone()));
        }
    });

    return null;
}
