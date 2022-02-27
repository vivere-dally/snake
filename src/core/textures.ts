import { Texture, TextureLoader, Vector3 } from "three";
import { match, __ } from "ts-pattern";

export const SNAKE_HEAD = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD!);
export const SNAKE_HEAD2 = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD2!);
export const SNAKE_HEAD3 = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD3!);

export const SNAKE_BODY_BOT_RIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_BOT_RIGHT!);
export const SNAKE_BODY_BOT_LEFT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_BOT_LEFT!);
export const SNAKE_BODY_TOP_RIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_TOP_RIGHT!);
export const SNAKE_BODY_TOP_LEFT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_TOP_LEFT!);

export const SNAKE_BODY_TURN = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_BOT_LEFT!);
export const SNAKE_BODY_STRAIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_STRAIGHT!);

export const SNAKE_TAIL = new TextureLoader().load(process.env.REACT_APP_SNAKE_TAIL!);

export const FOOD = new TextureLoader().load(process.env.REACT_APP_FOOD!);

export const GET_SNAKE_TEXTURE = ({ x: ax, y: ay }: Vector3, { x: bx, y: by }: Vector3): Texture => {
    console.log(`${ax}-${ay} : ${bx}-${by}`)

    return match([ax, ay, bx, by])
        .with([__, -1, 1, __], () => SNAKE_BODY_TOP_LEFT)
        .with([-1, __, __, 1], () => SNAKE_BODY_BOT_LEFT)
        .with([__, -1, __, -1], () => SNAKE_BODY_TOP_RIGHT)
        .with([1, __, __, -1], () => SNAKE_BODY_BOT_LEFT)
        .otherwise(() => SNAKE_BODY_STRAIGHT);
}

export const GET_SNAKE_BODY_TEXTURE = (a: Vector3, b: Vector3): Texture => {
    if (a == b) {
        return SNAKE_BODY_STRAIGHT;
    }

    return SNAKE_BODY_TURN;
}
