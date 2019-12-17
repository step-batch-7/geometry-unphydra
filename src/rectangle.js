const Point = require("../src/point");

class Rectangle {
  constructor(vertexA, vertexC) {
    this.A = new Point(vertexA.x, vertexA.y);
    this.C = new Point(vertexC.x, vertexC.y);
    this.B = new Point(vertexC.x, vertexA.y);
    this.D = new Point(vertexA.x, vertexC.y);
    Object.defineProperties(this, {
      A: { writable: false },
      B: { writable: false },
      C: { writable: false },
      D: { writable: false }
    });
  }

  toString() {
    const vertexA = `(${this.A.x},${this.A.y})`;
    const vertexC = `(${this.C.x},${this.C.y})`;
    return `[Rectangle ${vertexA} to ${vertexC}]`;
  }

  get area() {
    const length = this.A.findDistanceTo(this.B);
    const breadth = this.A.findDistanceTo(this.D);
    return length * breadth;
  }

  get perimeter() {
    const length = this.A.findDistanceTo(this.B);
    const breadth = this.A.findDistanceTo(this.D);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) {
      return false;
    }
  }
}
module.exports = Rectangle;
