import { Canvas } from "@react-three/fiber";
import Map from "./Map";
import GameSetup from "./GameSetup";

export default function Game() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ zoom: 0.15 }}>
            <Map />
            <GameSetup />
        </Canvas>
    );
}
