import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide, RepeatWrapping, Sprite, SpriteMaterial, TextureLoader } from "three";
import { BOARD_SIZE } from "../constants";

const mapTileTexture = new TextureLoader().load(process.env.REACT_APP_MAP_TILE!);
mapTileTexture.wrapS = mapTileTexture.wrapT = RepeatWrapping;
mapTileTexture.repeat.set(BOARD_SIZE, BOARD_SIZE);

const mapTileMaterial = new SpriteMaterial({ map: mapTileTexture, side: DoubleSide });
mapTileMaterial.transparent = false;
mapTileMaterial.opacity = 0;
const mapTile = new Sprite(mapTileMaterial);
mapTile.scale.set(BOARD_SIZE, BOARD_SIZE, 0);

export default function Map() {
    const scene = useThree(state => state.scene);

    useEffect(() => {
        scene.add(mapTile);
    }, []);

    return null;
}
