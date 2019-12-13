const isEqualPoint = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};
class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    const endA = `endA(${this.endA.x},${this.endA.y})`;
    const endB = `endB(${this.endB.x},${this.endB.y})`;
    return `line ${endA}-----${endB}`;
  }
  isEqualTo(other) {
    const isInstanceofLine = other instanceof Line;
    let arePointEqual =
      isInstanceofLine && isEqualPoint(other.endA, this.endA);
    return arePointEqual && isEqualPoint(other.endB, this.endB);
  }
}
module.exports = Line;
