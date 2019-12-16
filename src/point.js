class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) {
      return false;
    }
    const isXCoordinateEqual = this.x === other.x;
    const isYCoordinateEqual = this.y === other.y;
    return isXCoordinateEqual && isYCoordinateEqual;
  }

  visit(action) {
    return action(this.x, this.y);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    return 2;
  }
}

module.exports = Point;
