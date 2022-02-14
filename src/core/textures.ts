import { Texture, TextureLoader, Vector3 } from "three";

export const SNAKE_HEAD = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD!);
export const SNAKE_HEAD2 = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD2!);
export const SNAKE_HEAD3 = new TextureLoader().load(process.env.REACT_APP_SNAKE_HEAD3!);

export const SNAKE_BODY_BOT_RIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_BOT_RIGHT!);
export const SNAKE_BODY_BOT_LEFT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_BOT_LEFT!);
export const SNAKE_BODY_TOP_RIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_TOP_RIGHT!);
export const SNAKE_BODY_TOP_LEFT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_TOP_LEFT!);
export const SNAKE_BODY_STRAIGHT = new TextureLoader().load(process.env.REACT_APP_SNAKE_BODY_STRAIGHT!);

export const SNAKE_TAIL = new TextureLoader().load(process.env.REACT_APP_SNAKE_TAIL!);

export const FOOD = new TextureLoader().load(process.env.REACT_APP_FOOD!);

export const GET_SNAKE_TEXTURE = (a?: Vector3, b?: Vector3): Texture => {
    if (!a) {
        return SNAKE_HEAD;
    }

    if (!b) {
        return SNAKE_TAIL;
    }

    if (a.x === 1 && b.y === -1) {
        return SNAKE_BODY_BOT_RIGHT;
    }

    if (a.x === -1 && b.y === -1) {
        return SNAKE_BODY_BOT_LEFT;
    }

    if (a.x === 1 && b.y === 1) {
        return SNAKE_BODY_TOP_RIGHT;
    }

    if (a.x === -1 && b.y === 1) {
        return SNAKE_BODY_TOP_LEFT;
    }

    return SNAKE_BODY_STRAIGHT;
}
