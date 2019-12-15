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
    return true;
  }
}

module.exports = Point;
