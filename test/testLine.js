const assert = require("assert");
const Line = require("../src/line");

describe("toString", () => {
  it("should give string representation of the line for four values", () => {
    const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const actual = line.toString();
    const expected = "line endA(1,2) endB(3,4)";
    assert.deepStrictEqual(actual, expected);
  });
  it("should give string representation of the line as undefined for no values ", () => {
    const line = new Line({}, {});
    const actual = line.toString();
    const expected =
      "line endA(undefined,undefined) endB(undefined,undefined)";
    assert.deepStrictEqual(actual, expected);
  });
});

describe("isEqualTo", () => {
  it("should give true for matched lines", () => {
    const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const actual = line1.isEqualTo(line2);
    const expected = true;
    assert.deepStrictEqual(actual, expected);
  });
  it("should return false for unmatched lines ", () => {
    const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
    const line2 = new Line({}, {});
    const actual = line1.isEqualTo(line2);
    const expected = false;
    assert.deepStrictEqual(actual, expected);
  });
});
