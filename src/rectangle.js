class Rectangle {
  constructor(vertexA, vertexC) {
    this.A = { x: vertexA.x, y: vertexA.y };
    this.C = { x: vertexC.x, y: vertexC.y };
    this.B = { x: vertexA.x, y: vertexC.y };
    this.D = { x: vertexC.x, y: vertexA.y };
  }

  toString() {
    const vertexA = `(${this.A.x},${this.A.y})`;
    const vertexC = `(${this.C.x},${this.C.y})`;
    return `[Rectangle ${vertexA} to ${vertexC}]`;
  }
}
module.exports = Rectangle;
