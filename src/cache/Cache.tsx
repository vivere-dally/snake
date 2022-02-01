
export interface Cache {
    highestScore: number;
    isGameFinished: boolean;
    lastGameData?: any; // TODO - should contain snake's body position, speed, direction and food's position (if any food at that time)
}



