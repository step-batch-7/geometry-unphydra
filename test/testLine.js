const assert = require("assert");
const Line = require("../src/line");

describe("toString", () => {
  it("should give string representation of the line for four values", () => {
    const line = new Line(1, 2, 3, 4);
    const actual = line.toString();
    const expected = "{1,2,3,4}";
    assert.deepStrictEqual(actual, expected);
  });
  it("should give string representation of the line as undefined for no values ", () => {
    const line = new Line();
    const actual = line.toString();
    const expected = "{undefined,undefined,undefined,undefined}";
    assert.deepStrictEqual(actual, expected);
  });
});
