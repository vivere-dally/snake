import { OrthographicCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Map from "./Map";
import SnakeGame from "./SnakeGame";

const CameraSetup = () => {
    const camera = useThree(state => state.camera);

    useEffect(() => {
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
    }, [camera]);

    return null;
}

export default function Game() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <OrthographicCamera
                makeDefault
                position={[0, Math.PI / 2, 0]}
                zoom={40}
            />
            <CameraSetup />
            <Map />
            <SnakeGame />
        </Canvas>
    );
}