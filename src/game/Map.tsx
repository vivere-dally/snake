import { useEffect } from "react";
import { DoubleSide, MeshBasicMaterial, PlaneGeometry, RepeatWrapping, TextureLoader } from "three";
import { HALF_BOARD_SIZE } from "../core/snake";

const mapTileTexture = new TextureLoader().load(process.env.REACT_APP_MAP_TILE!);
mapTileTexture.wrapS = mapTileTexture.wrapT = RepeatWrapping;
mapTileTexture.repeat.set(HALF_BOARD_SIZE, HALF_BOARD_SIZE);

const mapTileMaterial = new MeshBasicMaterial({ map: mapTileTexture, side: DoubleSide });
const mapTileGeometry = new PlaneGeometry(3, 3, 10, 10);
mapTileGeometry.rotateX(Math.PI / 2);

export default function Map() {
    return (
        <mesh args={[mapTileGeometry, mapTileMaterial]} />
    );
}
