import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { DoubleSide, MeshBasicMaterial, PlaneGeometry, RepeatWrapping, Sprite, SpriteMaterial, TextureLoader } from "three";
import { HALF_BOARD_SIZE } from "../core/snake";

const mapTileTexture = new TextureLoader().load(process.env.REACT_APP_MAP_TILE!);
mapTileTexture.wrapS = mapTileTexture.wrapT = RepeatWrapping;
mapTileTexture.repeat.set(HALF_BOARD_SIZE, HALF_BOARD_SIZE);

const mapTileMaterial = new SpriteMaterial({ map: mapTileTexture, side: DoubleSide });
mapTileMaterial.transparent = false;
mapTileMaterial.opacity = 0;
const mapTile = new Sprite(mapTileMaterial);
mapTile.scale.set(HALF_BOARD_SIZE, HALF_BOARD_SIZE, 0);

export default function Map() {
    const scene = useThree(state => state.scene);

    useEffect(() => {
        scene.add(mapTile);
    }, []);

    return null;
}
