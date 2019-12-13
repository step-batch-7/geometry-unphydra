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
});
