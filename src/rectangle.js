class Rectangle {
  constructor(vertexA, vertexC) {
    this.A = new Point(vertexA.x, vertexA.y);
    this.C = new Point(vertexC.x, vertexC.y);
    this.B = new Point(vertexA.x, vertexC.y);
    this.D = new Point(vertexC.x, vertexA.y);
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
}
module.exports = Rectangle;
