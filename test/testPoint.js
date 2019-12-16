const assert = require("chai").assert;
const Point = require("../src/point.js");
const Line = require("../src/line");

describe("point", () => {
  describe("toString", () => {
    it("should give string representation for valid coordinates", () => {
      const point = new Point(2, 3);
      const actual = point.toString();
      const expected = "[Point @(2,3)]";
      assert.deepStrictEqual(actual, expected);
    });

    it("should give string representation for undefined coordinates", () => {
      const point = new Point();
      const actual = point.toString();
      const expected = "[Point @(undefined,undefined)]";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("clone", () => {
    it("should give clone point for a point with valid coordinate", () => {
      const point = new Point(2, 3);
      const actual = point.clone();
      const expected = new Point(2, 3);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give clone point for a point with undefined coordinate", () => {
      const point = new Point();
      const actual = point.clone();
      const expected = new Point();
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should validate if given point is instance of point", () => {
      const point = new Point(2, 3);
      assert.ok(point.isEqualTo(point));
    });

    it("should invalidate if given point is not instance of point", () => {
      const point = new Point(2, 3);
      assert.notOk(point.isEqualTo({ x: 2, y: 3 }));
    });

    it("should validate for given point is same coordinate", () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      assert.ok(point1.isEqualTo(point2));
    });

    it("should invalidate for given point is different coordinate", () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(4, 7);
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should validate for given point is negative coordinate", () => {
      const point1 = new Point(-2, -6);
      const point2 = new Point(-2, -6);
      assert.ok(point1.isEqualTo(point2));
    });
  });

  describe("visit", () => {
    it("should visit with reference of sum and return sum of coordinates", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      const expected = 5;
      assert.deepStrictEqual(actual, expected);
    });

    it("should visit with reference of multiple and return multiple of coordinates", () => {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      const expected = 6;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("findDistanceTo", () => {
    it("should give NaN if point is not instance of point", () => {
      const point1 = new Point(2, 3);
      const point2 = { x: 4, y: 6 };
      assert.isNaN(point1.findDistanceTo(point2));
    });

    it("should give distance of two positive points when distance is greater than zero", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(3, 2);
      const actual = point1.findDistanceTo(point2);
      const expected = 2;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give distance of two negative points when distance is greater than zero", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(-5, 2);
      const actual = point1.findDistanceTo(point2);
      const expected = 6;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give distance of two points when distance is zero", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      const actual = point1.findDistanceTo(point2);
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give distance for two points when distance is in decimal number", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(3, 11.9);
      const actual = point1.findDistanceTo(point2);
      const expected = 10.1;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isOn", () => {
    it("should validate if point is on line segment", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(3, 3);
      assert.ok(point.isOn(line));
    });

    it("should invalidate of point is not on line segment", () => {
      const line = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(3, 4);
      assert.notOk(point.isOn(line));
    });

    it("should throw an error if line object does not has the hasPoint method", () => {
      const line = ({ x: 1, y: 1 }, { x: 5, y: 5 });
      const point = new Point(3, 3);
      assert.throws(() => {
        point.isOn(line);
      });
    });
  });
});
