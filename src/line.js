const Point = require("./point.js");

const getYIntercept = function(point, slope) {
  return point.y - point.x * slope;
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

const checkPointsCollinear = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof Line)) {
      return false;
    }
    let areEndsEqual =
      other.endA.isEqualTo(this.endA) || other.endA.isEqualTo(this.endB);
    areEndsEqual =
      areEndsEqual &&
      (other.endB.isEqualTo(this.endB) || other.endB.isEqualTo(this.endA));
    return areEndsEqual;
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  isParallelTo(other) {
    if (!(other instanceof Line)) {
      return false;
    }
    const areSlopeEqual = this.slope === other.slope;
    let arePointsCollinear = checkPointsCollinear(
      this.endA,
      this.endB,
      other.endA
    );
    arePointsCollinear =
      arePointsCollinear &&
      checkPointsCollinear(this.endB, other.endA, other.endB);
    return areSlopeEqual && !arePointsCollinear;
  }

  get slope() {
    const deltaX = this.endA.x - this.endB.x;
    const deltaY = this.endA.y - this.endB.y;
    const slopeOfLine = deltaY / deltaX;
    return slopeOfLine === -Infinity ? Infinity : slopeOfLine;
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
    if (!(point instanceof Point)) {
      return false;
    }
    const isXisInLine = point.x === this.findX(point.y);
    const isYisInLine = point.y === this.findY(point.x);
    return isXisInLine || isYisInLine;
  }
  findPointFromStart(distance) {
    const lengthOfLine = this.length;
    if (distance > lengthOfLine || distance < 0) return NaN;
  }
}
module.exports = Line;
