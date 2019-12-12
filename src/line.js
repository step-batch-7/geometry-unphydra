const isEqual = function(pointA, pointB) {
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
  isEqualTo(obj) {
    const isEqualType = obj === this;
    let isEqualVal = !isEqualType && isEqual(obj.endA, this.endA);
    return isEqualVal && isEqual(obj.endB, this.endB);
  }
}
module.exports = Line;
