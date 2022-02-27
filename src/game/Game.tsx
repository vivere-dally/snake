import { Canvas } from "@react-three/fiber";
import Map from "./Map";
import GameSetup from "./GameSetup";
import { FOOD, SNAKE_BODY_TOP_LEFT } from "../core/textures";

export default function Game() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ zoom: 0.15 }}>
            <Map />
            <GameSetup />
            <sprite>
                <spriteMaterial map={SNAKE_BODY_TOP_LEFT} rotation={Math.PI / 2} />
            </sprite>
            <sprite position={[1,0,0]}>
                <spriteMaterial map={FOOD}  />
            </sprite>
        </Canvas>
    );
}
