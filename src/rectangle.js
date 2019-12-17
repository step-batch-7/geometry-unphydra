const Point = require("../src/point");

const getOtherVertex = function(vertexA, vertexC) {
  const B = new Point(vertexC.x, vertexA.y);
  const D = new Point(vertexA.x, vertexC.y);
  return { B: B, D: D };
};

class Rectangle {
  constructor(vertexA, vertexC) {
    this.A = new Point(vertexA.x, vertexA.y);
    this.C = new Point(vertexC.x, vertexC.y);
    Object.defineProperties(this, {
      A: { writable: false },
      C: { writable: false }
    });
  }

  toString() {
    const vertexA = `(${this.A.x},${this.A.y})`;
    const vertexC = `(${this.C.x},${this.C.y})`;
    return `[Rectangle ${vertexA} to ${vertexC}]`;
  }

  get area() {
    const { B } = getOtherVertex(this.A, this.C);
    const length = B.findDistanceTo(this.A);
    const breadth = B.findDistanceTo(this.C);
    return length * breadth;
  }

  get perimeter() {
    const { B } = getOtherVertex(this.A, this.C);
    const length = B.findDistanceTo(this.A);
    const breadth = B.findDistanceTo(this.C);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) {
      return false;
    }
    return true;
  }
}
module.exports = Rectangle;
