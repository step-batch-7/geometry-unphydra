const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", () => {
  describe("toString", () => {
    it("should give string representation of the line for four values", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      const expected = "[Line (1,2) to (3,4)]";
      assert.deepStrictEqual(actual, expected);
    });

    it("should give string representation of the line as undefined for no values ", () => {
      const line = new Line({}, {});
      const actual = line.toString();
      const expected =
        "[Line (undefined,undefined) to (undefined,undefined)]";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should validate for matched lines", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should invalidate for undefined points of lines ", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({}, {});
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should invalidate for unmatched line", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should validate if same line is given", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line1));
    });

    it("should validate if other line is altered of line segment", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 3, y: 4 }, { x: 1, y: 2 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should invalidate if given line segment is not instanceOf line ", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = ({ x: 1, y: 1 }, { x: 3, y: 4 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should validate for first enda and second endb is equal but alter is deferent", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 3, y: 5 }, { x: 1, y: 2 });
      assert.notOk(line1.isEqualTo(line2));
    });
  });

  describe("length", () => {
    it("should give length for positive points", () => {
      const line = new Line({ x: 5, y: 4 }, { x: 1, y: 1 });
      const actual = line.length;
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give length for one negative point", () => {
      const line = new Line({ x: 2, y: 2 }, { x: -2, y: -1 });
      const actual = line.length;
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give length for two negative points", () => {
      const line = new Line({ x: -6, y: -4 }, { x: -2, y: -1 });
      const actual = line.length;
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give length for two points on second quadrant", () => {
      const line = new Line({ x: 6, y: -4 }, { x: 2, y: -1 });
      const actual = line.length;
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give length for two points on third quadrant", () => {
      const line = new Line({ x: -6, y: 4 }, { x: -2, y: 1 });
      const actual = line.length;
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give length for two points with approximate value", () => {
      const line = new Line({ x: 6, y: 7 }, { x: 3, y: 2 });
      const actual = line.length;
      const expected = 5.83;
      assert.approximately(actual, expected, 0.01);
    });
  });

  describe("isParallelTo", () => {
    it("should validate for parallel line with positive points", () => {
      const line1 = new Line({ x: 0, y: 3 }, { x: 2, y: 0 });
      const line2 = new Line({ x: 0, y: 6 }, { x: 4, y: 0 });
      assert.ok(line1.isParallelTo(line2));
    });

    it("should validate for parallel line with negative points", () => {
      const line1 = new Line({ x: 0, y: -3 }, { x: -2, y: 0 });
      const line2 = new Line({ x: 0, y: -6 }, { x: -4, y: 0 });
      assert.ok(line1.isParallelTo(line2));
    });

    it("should invalidate for same line with positive points", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 1, y: 1 });
      assert.notOk(line.isParallelTo(line));
    });

    it("should invalidate for two line segment of same line", () => {
      const line1 = new Line({ x: 2, y: 2 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 9, y: 9 }, { x: 5, y: 5 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate for unparalleled line with positive points", () => {
      const line1 = new Line({ x: 2, y: 2 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 2, y: 4 }, { x: 1, y: 2 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate for unparalleled line with negative points", () => {
      const line1 = new Line({ x: -4, y: -3 }, { x: -2, y: -3 });
      const line2 = new Line({ x: -5, y: -6 }, { x: -4, y: -9 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate if given line is not instanceof Line", () => {
      const line1 = new Line({ x: -4, y: -3 }, { x: -2, y: -3 });
      const line2 = { endA: { x: -5, y: -6 }, endB: { x: -4, y: -9 } };
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate for two line segment of y-axis", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 0, y: 2 });
      const line2 = new Line({ x: 0, y: -2 }, { x: 0, y: 0 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate for two line segment parallel to y-axis", () => {
      const line1 = new Line({ x: 2, y: 4 }, { x: 2, y: -4 });
      const line2 = new Line({ x: -2, y: 4 }, { x: -2, y: -4 });
      assert.ok(line1.isParallelTo(line2));
    });

    it("should invalidate for two line segment of x-axis", () => {
      const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 0 });
      const line2 = new Line({ x: -2, y: 0 }, { x: 0, y: 0 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should invalidate for two line segment parallel to x-axis", () => {
      const line1 = new Line({ x: 4, y: 2 }, { x: -4, y: 2 });
      const line2 = new Line({ x: 4, y: -2 }, { x: -4, y: -2 });
      assert.ok(line1.isParallelTo(line2));
    });
  });

  describe("slope", () => {
    it("should give slope for line with positive points", () => {
      const line = new Line({ x: 7, y: 6 }, { x: 6, y: 2 });
      const actual = line.slope;
      const expected = 4;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give slope for line with negative points", () => {
      const line = new Line({ x: -4, y: -3 }, { x: -2, y: -1 });
      const actual = line.slope;
      const expected = 1;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give zero for x-axis", () => {
      const line = new Line({ x: 2, y: 0 }, { x: 1, y: 0 });
      const actual = line.slope;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give infinity for y-axis", () => {
      const line = new Line({ x: 0, y: 2 }, { x: 0, y: 1 });
      const actual = line.slope;
      const expected = Infinity;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give NaN for a point", () => {
      const line = new Line({ x: 2, y: 1 }, { x: 2, y: 1 });
      const actual = line.slope;
      const expected = NaN;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give infinity if slope is -infinity", () => {
      const line = new Line({ x: 0, y: -7 }, { x: 0, y: 0 });
      const actual = line.slope;
      const expected = Infinity;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("findY", () => {
    it("should give y coordinate for positive x coordinate of a line segment", () => {
      const line = new Line({ x: 9, y: 9 }, { x: 1, y: 1 });
      const actual = line.findY(3);
      const expected = 3;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give y coordinate for negative x coordinate of a line segment", () => {
      const line = new Line({ x: 0, y: 0 }, { x: -7, y: -7 });
      const actual = line.findY(-4);
      const expected = -4;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give NaN for x coordinate outside line segment but in same line", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line.findY(3);
      const expected = NaN;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give y coordinate for x coordinate of a line parallel to x-axis", () => {
      const line = new Line({ x: 0, y: 2 }, { x: 4, y: 2 });
      const actual = line.findY(3);
      const expected = 2;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give y coordinate for x coordinate of a line parallel to y-axis", () => {
      const line = new Line({ x: 2, y: 0 }, { x: 2, y: 4 });
      const actual = line.findY(2);
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give y coordinate for x coordinate of x-axis", () => {
      const line = new Line({ x: 4, y: 0 }, { x: -4, y: 0 });
      const actual = line.findY(0);
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give y coordinate for x coordinate of y-axis", () => {
      const line = new Line({ x: 0, y: 4 }, { x: 0, y: -4 });
      const actual = line.findY(0);
      const expected = 4;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("findX", () => {
    it("should give x coordinate for positive y coordinate of a line segment", () => {
      const line = new Line({ x: 9, y: 9 }, { x: 1, y: 1 });
      const actual = line.findX(3);
      const expected = 3;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give x coordinate for negative y coordinate of a line segment", () => {
      const line = new Line({ x: 0, y: 0 }, { x: -7, y: -7 });
      const actual = line.findX(-4);
      const expected = -4;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give NaN for y coordinate outside line segment but in same line", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const actual = line.findX(3);
      const expected = NaN;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give x coordinate for y coordinate of a line parallel to x-axis", () => {
      const line = new Line({ x: 0, y: 2 }, { x: 4, y: 2 });
      const actual = line.findX(2);
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give x coordinate for y coordinate of a line parallel to y-axis", () => {
      const line = new Line({ x: 2, y: 0 }, { x: 2, y: 4 });
      const actual = line.findX(3);
      const expected = 2;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give x coordinate for y coordinate of x-axis", () => {
      const line = new Line({ x: 4, y: 0 }, { x: -4, y: 0 });
      const actual = line.findX(0);
      const expected = 4;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give x coordinate for y coordinate of y-axis", () => {
      const line = new Line({ x: 0, y: 4 }, { x: 0, y: -4 });
      const actual = line.findX(0);
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("split", () => {
    it("should split and give two line segment of a line of positive points", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const splitLine1 = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const splitLine2 = new Line({ x: 3, y: 3 }, { x: 5, y: 5 });
      const actual = line.split();
      const expected = [splitLine1, splitLine2];
      assert.deepStrictEqual(actual, expected);
    });

    it("should split and give two line segment of a line of negative points", () => {
      const line = new Line({ x: 2, y: 2 }, { x: -2, y: -2 });
      const splitLine1 = new Line({ x: 2, y: 2 }, { x: 0, y: 0 });
      const splitLine2 = new Line({ x: 0, y: 0 }, { x: -2, y: -2 });
      const actual = line.split();
      const expected = [splitLine1, splitLine2];
      assert.deepStrictEqual(actual, expected);
    });

    it("should split and give two line segment of line segment of x-axis", () => {
      const line = new Line({ x: 1, y: 0 }, { x: 5, y: 0 });
      const splitLine1 = new Line({ x: 1, y: 0 }, { x: 3, y: 0 });
      const splitLine2 = new Line({ x: 3, y: 0 }, { x: 5, y: 0 });
      const actual = line.split();
      const expected = [splitLine1, splitLine2];
      assert.deepStrictEqual(actual, expected);
    });

    it("should split and give two line segment of line segment of y-axis", () => {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      const splitLine1 = new Line({ x: 0, y: 1 }, { x: 0, y: 3 });
      const splitLine2 = new Line({ x: 0, y: 3 }, { x: 0, y: 5 });
      const actual = line.split();
      const expected = [splitLine1, splitLine2];
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("hasPoint", () => {
    it("should validate for a line segment with positive points", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(3, 3);
      assert.ok(line.hasPoint(point));
    });

    it("should invalidate for a line segment with positive points", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(6, 6);
      assert.notOk(line.hasPoint(point));
    });

    it("should validate for a line segment with negative points", () => {
      const line = new Line({ x: -2, y: -1 }, { x: -8, y: -4 });
      const point = new Point(-4, -2);
      assert.ok(line.hasPoint(point));
    });

    it("should invalidate for a line segment with negative points", () => {
      const line = new Line({ x: -2, y: -1 }, { x: -8, y: -4 });
      const point = new Point(-10, -2);
      assert.notOk(line.hasPoint(point));
    });

    it("should validate for a line segment passing through zero,zero", () => {
      const line = new Line({ x: -2, y: -2 }, { x: 2, y: 2 });
      const point = new Point(0, 0);
      assert.ok(line.hasPoint(point));
    });

    it("should invalidate for a point which is not instance of point", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      assert.notOk(line.hasPoint({ x: 3, y: 3 }));
    });

    it("should invalidate for a point which is not in the line or line segment", () => {
      const line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
      const point = new Point(4, 3);
      assert.notOk(line.hasPoint(point));
    });

    it("should validate for a point which in on a line parallel to x-axis", () => {
      const line = new Line({ x: 0, y: 2 }, { x: 5, y: 2 });
      const point = new Point(2, 2);
      assert.ok(line.hasPoint(point));
    });
  });

  describe("findPointFromStart", () => {
    it("should give null if the distance is greater than line length", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      assert.isNull(line.findPointFromStart(5));
    });

    it("should give nan if the distance is less than zero", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      assert.isNull(line.findPointFromStart(-1));
    });

    it("should give point for a valid distance from the start of a line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = line.findPointFromStart(2);
      const expected = new Point(3, 1);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give start point for zero distance", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = line.findPointFromStart(0);
      const expected = new Point(1, 1);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give end point for distance equal to length of line", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = line.findPointFromStart(4);
      const expected = new Point(5, 1);
      assert.deepStrictEqual(actual, expected);
    });
  });
});
