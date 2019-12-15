const assert = require("chai").assert;
const Point = require("../src/point.js");

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

    it("should visit with reference of undefined and return undefined", () => {
      const point = new Point(2, 3);
      const actual = point.visit("function");
      const expected = undefined;
      assert.deepStrictEqual(actual, expected);
    });
  });
});
