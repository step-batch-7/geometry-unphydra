const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

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

    it("should remain unchanged of the properties of the circle", () => {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      circle.centerPoint.x = undefined;
      circle.centerPoint.y = undefined;
      circle.radius = undefined;
      const actual = circle.toString();
      const expected = "[Circle @(1,2) radius 5]";
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

  describe("area", () => {
    it("should give area of a circle with positive centre point and radius", () => {
      const circle = new Circle({ x: 1, y: 1 }, 3);
      const actual = circle.area;
      const expected = 28.27;
      assert.approximately(actual, expected, 0.01);
    });

    it("should give zero for area if radius is zero", () => {
      const circle = new Circle({ x: 1, y: 1 }, 0);
      const actual = circle.area;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("perimeter", () => {
    it("should give perimeter of a circle with positive centre point and radius", () => {
      const circle = new Circle({ x: 1, y: 1 }, 3);
      const actual = circle.perimeter;
      const expected = 18.85;
      assert.approximately(actual, expected, 0.01);
    });

    it("should give zero for perimeter if radius is zero", () => {
      const circle = new Circle({ x: 1, y: 1 }, 0);
      const actual = circle.perimeter;
      const expected = 0;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("hasPoint", () => {
    it("should invalidate if the point is not a instance of point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = { x: 3, y: 3 };
      assert.notOk(circle.hasPoint(point));
    });

    it("should validate if given point is valid and circle has the point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(3, 0);
      assert.ok(circle.hasPoint(point));
    });

    it("should invalidate if given point is valid and circle not has the point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(2, 0);
      assert.notOk(circle.hasPoint(point));
    });

    it("should validate if given point is zero zero and circle has the point", () => {
      const circle = new Circle({ x: 2, y: 0 }, 2);
      const point = new Point(0, 0);
      assert.ok(circle.hasPoint(point));
    });
  });

  describe("moveTo", () => {
    it("should give a new circle with the same dimension in the given point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(1, 1);
      const actual = circle.moveTo(point);
      const expected = new Circle({ x: 1, y: 1 }, 3);
      assert.deepStrictEqual(actual, expected);
    });

    it("should give the same circle if the given point is same as previous", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 0);
      const actual = circle.moveTo(point);
      const expected = circle;
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("covers", () => {
    it("should invalidate if point is not instance of point", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = { x: 1, y: 0 };
      assert.notOk(circle.covers(point));
    });

    it("should validate if the point is inside the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(2, 2);
      assert.ok(circle.covers(point));
    });

    it("should invalidate if the point is not inside the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(4, 0);
      assert.notOk(circle.covers(point));
    });

    it("should validate if the point is in center the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 0);
      assert.ok(circle.covers(point));
    });

    it("should invalidate if the point is in perimeter the circle", () => {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(3, 0);
      assert.ok(circle.covers(point));
    });
  });
});
