declare global {
    interface Number {
        equals(other: number, tolerance: number): boolean
    }
}

Number.prototype.equals = (other: number, tolerance = Number.EPSILON): boolean => {
    const self = Number(this);
    return Math.abs(self - other) < tolerance;
}

export { }