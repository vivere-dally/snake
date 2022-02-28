import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide, RepeatWrapping, Sprite, SpriteMaterial, TextureLoader } from "three";
import { BOARD_SIZE } from "../constants";

const mapTileTexture = new TextureLoader().load(process.env.REACT_APP_MAP_TILE!);
mapTileTexture.wrapS = mapTileTexture.wrapT = RepeatWrapping;
mapTileTexture.repeat.set(BOARD_SIZE, BOARD_SIZE);

const mapTileMaterial = new SpriteMaterial({ map: mapTileTexture, side: DoubleSide });
const mapTile = new Sprite(mapTileMaterial);
mapTile.scale.set(BOARD_SIZE, BOARD_SIZE, 0);

export default function Map() {
    const scene = useThree(state => state.scene);

    useEffect(() => {
        scene.add(mapTile);
    }, []);

    // For some reason, if I don't use the `mapTileTexture` in the JSX, it gets rendered very dimly.
    // Maybe there is some ThreeJS caveat that I do not know.
    return (
        <sprite position={[-1000, -1000, 0]}>
            <spriteMaterial map={mapTileTexture} />
        </sprite>
    );
}
