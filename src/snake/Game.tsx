import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { BOARD_SIZE } from "../utils/constants";
import Snake from "./Snake";

export default function Game() {

    return (
        <Canvas
            camera={{
                position: new Vector3(0, BOARD_SIZE, 0)
            }}
        >
            <gridHelper args={[BOARD_SIZE, BOARD_SIZE, 'white', 'gray']} />
            <Snake />
        </Canvas>
    );
}
