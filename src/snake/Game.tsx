import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box2, Vector2, Vector3 } from "three";
import { generateUUID } from "three/src/math/MathUtils";
import { getGameMapBorders, N } from "./constants";
import Snake from "./Snake";

export default function Game() {
    const gameMapBorders = getGameMapBorders(N);

    return (
        <Canvas
            camera={{
                position: new Vector3(0, N, 0)
            }}
        >
            <gridHelper args={[N, N, 'white', 'gray']} />
            <Snake />
        </Canvas>
    );
}
