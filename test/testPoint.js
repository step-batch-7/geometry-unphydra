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
  });
});
