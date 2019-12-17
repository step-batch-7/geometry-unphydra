class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperties(this, {
      x: { writable: false },
      y: { writable: false }
    });
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
    const deltaX = (this.x - other.x) ** 2;
    const deltaY = (this.y - other.y) ** 2;
    const totalDelta = deltaX + deltaY;
    return Math.sqrt(totalDelta);
  }

  isOn(shape) {
    return shape.hasPoint(new Point(this.x, this.y));
  }
}

module.exports = Point;
