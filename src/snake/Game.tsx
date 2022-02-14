// import { OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { Camera, DataTexture2DArray, Euler, SpriteMaterial, TextureFilter, TextureLoader, Vector2, Vector3 } from "three";
// import { BOARD_SIZE, } from "../utils/constants";
// import Snake from "./Snake";

// const CameraSetup = () => {
//     const camera = useThree(state => state.camera);

//     useEffect(() => {
//         camera.lookAt(0, 0, 0);
//         camera.updateProjectionMatrix();
//     }, [camera]);

//     return null;
// }

// export default function Game() {

//     const map = new TextureLoader().load(`data:image/png;base64,${SNAKE_TEXTURE}`);
//     // const hmmMap =
    
//     const material = new SpriteMaterial({ map: map  })

//     return (
//         <Canvas style={{width: '100vw', height: '100vh' }}>
//             <OrthographicCamera
//                 makeDefault
//                 position={[0, Math.PI / 2, 0]}
//                 zoom={40}
//             />
//             <CameraSetup />
//             <gridHelper args={[BOARD_SIZE, BOARD_SIZE, 'white', 'gray']} />
//             <Snake />
//             <mesh position={[0, 0, 0]}>
//                 <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//                 <meshNormalMaterial attach="material" />
//             </mesh>
//             <sprite args={[material]} position={[1, 0, 0]} />
//             <OrbitControls/>
//         </Canvas>
//     );
// }

export {}
