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
      rectangle.C = undefined;
      const actual = rectangle.toString();
      const expected = "[Rectangle (1,1) to (5,4)]";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("area", () => {
    it("should give area for a rectangle with positive points", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.area;
      const expected = 12;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give zero if diagonal is parallel to x-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = rectangle.area;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give zero if diagonal is parallel to y-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 5 });
      const actual = rectangle.area;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give zero if two point to creat rectangle are same", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      const actual = rectangle.area;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("perimeter", () => {
    it("should give perimeter for a rectangle with positive points", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const actual = rectangle.perimeter;
      const expected = 14;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give double length if diagonal is parallel to x-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      const actual = rectangle.perimeter;
      const expected = 8;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give double breadth if diagonal is parallel to y-axis", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 4 });
      const actual = rectangle.perimeter;
      const expected = 6;
      assert.deepStrictEqual(actual, expected);
    });

    it("should give zero if two point to creat rectangle are same", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 1, y: 1 });
      const actual = rectangle.perimeter;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("isEqualTo", () => {
    it("should invalidate if the other is not an instance of Rectangle", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = {
        A: { x: 1, y: 1 },
        C: { x: 5, y: 4 },
        B: { x: 5, y: 1 },
        D: { x: 1, y: 5 }
      };
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate for replica rectangle", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should invalidate for different rectangle", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 2 }, { x: 5, y: 4 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate for rectangle which has same diagonal but in opposite direction", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 5, y: 4 }, { x: 1, y: 1 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should validate for rectangle with other diagonal", () => {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const rectangle2 = new Rectangle({ x: 1, y: 4 }, { x: 5, y: 1 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("hasPoint", () => {
    it("should give false if the point is not instance of point", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 3, y: 1 };
      assert.notOk(rectangle.hasPoint(point));
    });

    it("should validate if the point is any of the vertices ", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 1);
      assert.ok(rectangle.hasPoint(point));
    });

    it("should validate if the point on lower line", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(3, 1);
      assert.ok(rectangle.hasPoint(point));
    });

    it("should validate if the point on upper line", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(3, 4);
      assert.ok(rectangle.hasPoint(point));
    });

    it("should validate if the point on right line", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(5, 2);
      assert.ok(rectangle.hasPoint(point));
    });

    it("should validate if the point on light line", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 3);
      assert.ok(rectangle.hasPoint(point));
    });

    it("should invalidate if the point inside the rectangle but not on the lines", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(2, 2);
      assert.notOk(rectangle.hasPoint(point));
    });

    it("should invalidate if the point outside the rectangle but not on the lines", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(0, 0);
      assert.notOk(rectangle.hasPoint(point));
    });
  });

  describe("covers", () => {
    it("should invalidate if the given point is instance of point", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 1, y: 1 };
      assert.notOk(rectangle.covers(point));
    });

    it("should validate if the point is inside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(2, 3);
      assert.ok(rectangle.covers(point));
    });

    it("should invalidate if the point is on the perimeter of the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 3);
      assert.notOk(rectangle.covers(point));
    });

    it("should invalidate if the point is outside the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(5, 5);
      assert.notOk(rectangle.covers(point));
    });

    it("should invalidate it point is on the vertex of the rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(1, 1);
      assert.notOk(rectangle.covers(point));
    });
  });
});
