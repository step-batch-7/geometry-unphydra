const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("circle", () => {
  describe("toString", () => {
    it("should give to string representation of circle with valid points and radius", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
      assert.deepStrictEqual(actual, expected);
    });
  });
});
