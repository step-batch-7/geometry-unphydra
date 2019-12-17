const Point = require("../src/point");
const Line = require("../src/line");

const getOtherVertices = function(vertexA, vertexC) {
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
    const { B } = getOtherVertices(this.A, this.C);
    const length = B.findDistanceTo(this.A);
    const breadth = B.findDistanceTo(this.C);
    return length * breadth;
  }

  get perimeter() {
    const { B } = getOtherVertices(this.A, this.C);
    const length = B.findDistanceTo(this.A);
    const breadth = B.findDistanceTo(this.C);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) {
      return false;
    }
    const { B, D } = getOtherVertices(this.A, this.C);
    const diagonal1 = new Line(this.A, this.C);
    const diagonal2 = new Line(B, D);
    const otherDiagonal = new Line(other.A, other.C);
    return (
      otherDiagonal.isEqualTo(diagonal1) ||
      otherDiagonal.isEqualTo(diagonal2)
    );
  }

  hasPoint(point) {
    const { B, D } = getOtherVertices(this.A, this.C);
    const lowerLine = new Line(this.A, B);
    const upperLine = new Line(this.C, D);
    const leftLine = new Line(this.A, D);
    const rightLine = new Line(B, this.C);
    return (
      lowerLine.hasPoint(point) ||
      upperLine.hasPoint(point) ||
      leftLine.hasPoint(point) ||
      rightLine.hasPoint(point)
    );
  }
}
module.exports = Rectangle;
