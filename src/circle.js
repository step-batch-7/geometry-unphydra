const Point = require("./point");

const areCentrePointEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

class Circle {
  constructor(centerPoint, radius) {
    this.centerPoint = new Point(centerPoint.x, centerPoint.y);
    this.radius = radius;
  }

  toString() {
    const point = `Circle @(${this.centerPoint.x},${this.centerPoint.y})`;
    const radius = `radius ${this.radius}`;
    return `[${point} ${radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) {
      return false;
    }
    const isCentrePointEqual = areCentrePointEqual(
      this.centerPoint,
      other.centerPoint
    );
    const areRadiusEqual = this.radius === other.radius;
    return isCentrePointEqual && areRadiusEqual;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get perimeter() {
    return Math.PI * 2 * this.radius;
  }
}

module.exports = Circle;
