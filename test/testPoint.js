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
  });
});
