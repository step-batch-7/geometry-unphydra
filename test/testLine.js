const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", () => {
  describe("toString", () => {
    it("should give string representation of the line for four values", () => {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.toString();
      const expected = "line endA(1,2)-----endB(3,4)";
      assert.deepStrictEqual(actual, expected);
    });
    it("should give string representation of the line as undefined for no values ", () => {
      const line = new Line({}, {});
      const actual = line.toString();
      const expected =
        "line endA(undefined,undefined)-----endB(undefined,undefined)";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should give true for matched lines", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });
    it("should return false for undefined points of lines ", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({}, {});
      assert.notOk(line1.isEqualTo(line2));
    });
    it("should give false for unmatched line", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      assert.notOk(line1.isEqualTo(line2));
    });
    it("should give true if same line is given", () => {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line1));
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
    it("should give true for same line", () => {
      const line = new Line({ x: 2, y: 2 }, { x: 1, y: 1 });
      assert.ok(line.isParallelTo(line));
    });
    it("should give false for unparalleled line", () => {
      const line1 = new Line({ x: 2, y: 2 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 2, y: 4 }, { x: 1, y: 2 });
      assert.notOk(line1.isParallelTo(line2));
    });
  });
});
