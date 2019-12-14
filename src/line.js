const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const getYIntercept = function(point, slope) {
  return point.y - point.x * slope;
};

const areEqual = function(val1, val2) {
  return val1 === val2;
};

const isCoordinateInRange = function(coordinate, range) {
  const sortedRange = range.sort((a, b) => a - b);
  return coordinate >= sortedRange[0] && coordinate <= sortedRange[1];
};

const getMidPoint = function(pointA, pointB) {
  const xOfMidPoint = (pointA.x + pointB.x) / 2;
  const yOfMidPoint = (pointA.y + pointB.y) / 2;
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
    const yInterceptOfThis = getYIntercept(this.endA, this.slope);
    const yInterceptOfOther = getYIntercept(other.endA, other.slope);
    const areYInterceptEqual = areEqual(
      yInterceptOfThis,
      yInterceptOfOther
    );
    const isnan = isNaN(yInterceptOfThis + yInterceptOfOther);
    return areSlopeEqual && (!areYInterceptEqual || isnan);
  }

  get slope() {
    const deltaX = this.endA.x - this.endB.x;
    const deltaY = this.endA.y - this.endB.y;
    return deltaY / deltaX;
  }

  findY(x) {
    if (!isCoordinateInRange(x, [this.endA.x, this.endB.x])) {
      return NaN;
    }
    const slopeOFThis = this.slope;
    const yInterceptOfThis = getYIntercept(this.endA, slopeOFThis);
    const Y = slopeOFThis * x + yInterceptOfThis;

    if (isNaN(Y)) {
      return this.endA.y;
    }
    return Y;
  }

  findX(y) {
    if (!isCoordinateInRange(y, [this.endA.y, this.endB.y])) {
      return NaN;
    }
    const slopeOFThis = this.slope;
    const yInterceptOfThis = getYIntercept(this.endA, slopeOFThis);
    const X = (y - yInterceptOfThis) / slopeOFThis;

    if (isNaN(X)) {
      return this.endA.x;
    }
    return X;
  }

  split() {
    const midPoint = getMidPoint(this.endA, this.endB);
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }

  hasPoint(point) {
    const isXisInRange = isCoordinateInRange(point.x, [
      this.endA.x,
      this.endB.x
    ]);
    const isYisInRange = isCoordinateInRange(point.y, [
      this.endA.y,
      this.endB.y
    ]);
    return isXisInRange && isYisInRange;
  }
}
module.exports = Line;
