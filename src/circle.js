class Circle {
  constructor(centerPoint, radius) {
    this.centerPoint = { x: centerPoint.x, y: centerPoint.y };
    this.radius = radius;
  }
  toString() {
    const point = `Circle @(${this.centerPoint.x},${this.centerPoint.y})`;
    const radius = `radius ${this.radius}`;
    return `[${point} ${radius}]`;
  }
}

module.exports = Circle;
