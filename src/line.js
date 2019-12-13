const isEqualPoint = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};
class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }
  toString() {
    return `line endA(${this.endA.x},${this.endA.y}) endB(${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(other) {
    const isInstanceofLine = other instanceof Line;
    let isEqualVal =
      isInstanceofLine && isEqualPoint(other.endA, this.endA);
    return isEqualVal && isEqualPoint(other.endB, this.endB);
  }
}
module.exports = Line;
