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
});
