const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const getSlopeOfLine = function(line) {
  const deltaX = line.endA.x - line.endB.x;
  const deltaY = line.endA.y - line.endB.y;
  return deltaY / deltaX;
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
    const slopeOFThis = getSlopeOfLine(this);
    const slopeOfOther = getSlopeOfLine(other);
    return slopeOFThis === slopeOfOther;
  }
}
module.exports = Line;
