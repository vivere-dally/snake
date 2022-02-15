import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Euler, Sprite, SpriteMaterial, Vector3 } from "three";
import Food from "../core/food";
import { useSnakeControls } from "../core/hooks/useSnakeControls";
import { useSnakeSpeed } from "../core/hooks/useSnakeSpeed";
import { HALF_BOARD_SIZE, Snake, SNAKE_INIT_SPEED } from "../core/snake";
import { FOOD, GET_SNAKE_TEXTURE, SNAKE_HEAD, SNAKE_HEAD2 } from "../core/textures";

const assignXY = (a: Vector3, b: Vector3): void => {
    a.x = b.x;
    a.y = b.y;
}

export default function SnakeGame() {
    const isPaused = useState(false);

    const foodRef = useRef<Sprite>();

    const scene = useThree(state => state.scene);

    // Food
    const foodSprite = new Sprite(new SpriteMaterial({ map: FOOD }));
    assignXY(foodSprite.position, Food.instance.position);

    // Snake
    const canMove = useSnakeSpeed();
    useSnakeControls({ notifyDirectionChange: Snake.instance.changeDirection });
    const snakeSprites: Sprite[] = [];

    useEffect(() => {
        scene.add(foodSprite);

        let prev: Vector3 | undefined = undefined;
        for (let index = 0; index < Snake.instance.snakeSegments.length; index++) {
            const element = Snake.instance.snakeSegments[index];
            const sprite: Sprite = new Sprite(new SpriteMaterial({
                map: GET_SNAKE_TEXTURE(prev, index + 1 === Snake.instance.snakeSegments.length ? undefined : element.position)
            }));
            assignXY(sprite.position, element.position);
            sprite.material.rotation = element.rotation;
            snakeSprites.push(sprite);

            prev = sprite.position;
        }

        scene.add(...snakeSprites);
    }, []);


    useFrame(() => {
        if (!canMove()) {
            return;
        }

        if (!Snake.instance.hasHitTheWall(HALF_BOARD_SIZE)) {
            Snake.instance.move();
        }

        // Food.instance.generate();

        for (let index = 0; index < Snake.instance.snakeSegments.length; index++) {
            const element = Snake.instance.snakeSegments[index];
            assignXY(snakeSprites[index].position, element.position);
            snakeSprites[index].updateMatrix();
        }
    });

    // return (
    //     <group>
    //         <sprite ref={foodRef} position={Food.instance.position}>
    //             <spriteMaterial map={FOOD} />
    //         </sprite>
    //     </group>
    // )

    return null;
}
