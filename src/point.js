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
    if (!(action instanceof Function)) {
      return undefined;
    }
    return action(this.x, this.y);
  }
}

module.exports = Point;
