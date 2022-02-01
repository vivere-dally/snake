import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, MeshBasicMaterial, Shape, ShapeGeometry, Vector3 } from "three";
import { snakeStartDirection, snakeStartPosition, snakeStartSpeed, toVector3 } from "./constants";



const shape = new Shape();
shape.lineTo(0.5, 0)
shape.lineTo(-0.5, -0.5)
shape.lineTo(-0.5, 0.5)
shape.lineTo(0.5, 0)

const geometry = new ShapeGeometry(shape)
geometry.rotateX(Math.PI / 2);

const material = new MeshBasicMaterial({ wireframe: true, color: 'white' })
const mesh = new Mesh(geometry, material);

export default function Snake() {
    const meshRef = useRef<Mesh>();
    const direction = toVector3(snakeStartDirection);

    useFrame(() => {
        if (meshRef.current === undefined) {
            return;
        }

        const { position } = meshRef.current;
        const {x, y} = direction.clone().multiplyScalar(snakeStartSpeed);

        position.x += x;
        position.y += y;
    });

    return (
        <mesh ref={meshRef} args={[geometry, material]} />
    )
}
