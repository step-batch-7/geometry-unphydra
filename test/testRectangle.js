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

    it("should give toString representation of rectangle with undefined values", () => {
      const rectangle = new Rectangle(
        { x: undefined, y: undefined },
        { x: undefined, y: undefined }
      );
      const actual = rectangle.toString();
      const expected =
        "[Rectangle (undefined,undefined) to (undefined,undefined)]";
      assert.deepStrictEqual(actual, expected);
    });

    it("should not change the properties of rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      rectangle.A = undefined;
      rectangle.B = undefined;
      rectangle.C = undefined;
      rectangle.D = undefined;
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (5,4)]";
      assert.deepStrictEqual(actual, expected);
    });
  });
});
