const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
  describe("toString", () => {
    it("should give toString representation of rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (5,4)]";
      assert.deepStrictEqual(actual, expected);
    });
  });
});
