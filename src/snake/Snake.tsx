import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, MeshBasicMaterial, Shape, ShapeGeometry, Vector3 } from "three";



const shape = new Shape();
shape.lineTo(0.5, 0)
shape.lineTo(-0.5, -0.5)
shape.lineTo(-0.5, 0.5)
shape.lineTo(0.5, 0)

const geometry = new ShapeGeometry(shape)
geometry.rotateX(Math.PI / 2);

const material = new MeshBasicMaterial({ wireframe: true, color: 'white' })
const mesh = new Mesh(geometry, material);
// mesh.pos

const sqShape = new Shape();

const sqGeo = new ShapeGeometry(sqShape)
sqGeo.rotateX(Math.PI / 2);

export default function Snake() {
    const meshRef = useRef<Mesh>();
    const meshRef2 = useRef<Mesh>();
    const meshRef3 = useRef<Mesh>();

    useFrame(({}) => {
        // if (meshRef.current === undefined) {
        //     return;
        // }

        // const { position } = meshRef.current;
        // const { x, y } = direction.clone().multiplyScalar(snakeStartSpeed);

        // position.x += x;
        // position.y += y;
    });

    return (
        <group>
            <mesh ref={meshRef} position={[0, 0, 0]} args={[geometry, material]} />
            <mesh ref={meshRef2} position={[-1, 0, 0]} args={[geometry, material]} />
            <mesh ref={meshRef3} position={[-2, 0, 0]} args={[sqGeo, material]} />
        </group>
    )
}
