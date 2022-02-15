
export function useSnakeSpeed() {
    let counter = 0;

    const canMove = (): boolean => {
        counter++;
        if (counter % 10 === 0) {
            counter = 0;
            return true;
        }

        return false;
    }

    return canMove;
}