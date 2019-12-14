const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const getYIntercept = function(line) {
  const slopeOFLine = line.slope;
  return line.endA.y - line.endA.x * slopeOFLine;
};

const areEqual = function(val1, val2) {
  return val1 === val2;
};

const isPointInRange = function(point, range) {
  const sortedRange = range.sort();
  return point >= sortedRange[0] && point <= sortedRange[1];
};

const getMidPoint = function(line) {
  const xOfMidPoint = (line.endA.x + line.endB.x) / 2;
  const yOfMidPoint = (line.endA.y + line.endB.y) / 2;
  return { x: xOfMidPoint, y: yOfMidPoint };
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[line ${endA} to ${endB}]`;
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
    const areSlopeEqual = areEqual(this.slope, other.slope);
    const yInterceptOfThis = getYIntercept(this);
    const yInterceptOfOther = getYIntercept(other);
    const areYInterceptEqual = areEqual(
      yInterceptOfThis,
      yInterceptOfOther
    );
    return areSlopeEqual && !areYInterceptEqual;
  }

  get slope() {
    const deltaX = this.endA.x - this.endB.x;
    const deltaY = this.endA.y - this.endB.y;
    return deltaY / deltaX;
  }

  findY(x) {
    if (!isPointInRange(x, [this.endA.x, this.endB.x])) {
      return NaN;
    }
    const yInterceptOfThis = getYIntercept(this);
    const slopeOFThis = this.slope;
    const Y = slopeOFThis * x + yInterceptOfThis;

    if (isNaN(Y)) {
      return this.endA.x;
    }
    return Y;
  }

  findX(y) {
    if (!isPointInRange(y, [this.endA.y, this.endB.y])) {
      return NaN;
    }
    const yInterceptOfThis = getYIntercept(this);
    const slopeOFThis = this.slope;
    const X = (y - yInterceptOfThis) / slopeOFThis;

    if (isNaN(X)) {
      return this.endA.y;
    }
    return X;
  }

  split() {
    const midPoint = getMidPoint(this);
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }
}
module.exports = Line;
