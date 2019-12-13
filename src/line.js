const arePointsEqual = function(pointA, pointB) {
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
    if (other === this) {
      return true;
    }
    const isInstanceofLine = other instanceof Line;
    let areEndsEqual =
      isInstanceofLine && arePointsEqual(other.endA, this.endA);
    return areEndsEqual && arePointsEqual(other.endB, this.endB);
  }

  get length() {
    const deltaX = (this.endA.x - this.endB.x) ** 2;
    const deltaY = (this.endA.y - this.endB.y) ** 2;
    const totalDelta = deltaX + deltaY;
    return Math.sqrt(totalDelta);
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    const slopeOFThis = this.slope;
    const slopeOfOther = other.slope;
    return slopeOFThis === slopeOfOther;
  }

  get slope() {
    const deltaX = this.endA.x - this.endB.x;
    const deltaY = this.endA.y - this.endB.y;
    return deltaY / deltaX;
  }
}
module.exports = Line;
