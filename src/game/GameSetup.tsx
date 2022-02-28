import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Food from "../core/food";
import { useSnakeControls } from "../core/hooks/useSnakeControls";
import { useSnakeSpeed } from "../core/hooks/useSnakeSpeed";
import { Snake } from "../core/snake";
import { SNAKE_BODY_STRAIGHT, SNAKE_HEAD, SNAKE_TAIL } from "../core/textures";

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

    // For some reason, if I don't use the textures in the JSX, they get rendered very dimly.
    // Maybe there is some ThreeJS caveat that I do not know.
    return (
        <>
            <sprite position={[-1000, -1000, 0]}>
                <spriteMaterial map={SNAKE_HEAD} />
            </sprite>
            <sprite position={[-1000, -1000, 0]}>
                <spriteMaterial map={SNAKE_TAIL} />
            </sprite>
            <sprite position={[-1000, -1000, 0]}>
                <spriteMaterial map={SNAKE_BODY_STRAIGHT} />
            </sprite>
        </>
    );
}
