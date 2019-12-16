const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("circle", () => {
  describe("toString", () => {
    it("should give string representation of circle with valid points and radius", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
      assert.deepStrictEqual(actual, expected);
    });

    it("should give undefined in string representation if no value is given ", () => {
      const circle = new Circle({});
      const actual = circle.toString();
      const expected = "[Circle @(undefined,undefined) radius undefined]";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should invalidate if given circle is not instance of circle", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = { centerPoint: { x: 1, y: 2 }, radius: 5 };
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should validate if given circle is own circle", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.ok(circle.isEqualTo(circle));
    });

    it("should invalidate if given circle has equal radius but not equal center", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 2, y: 2 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should invalidate if given circle has equal center but not equal radius", () => {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 6);
      assert.notOk(circle1.isEqualTo(circle2));
    });
  });
});
