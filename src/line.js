class Line {
  constructor(xOne, yOne, xTwo, yTwo) {
    this.xOne = xOne;
    this.yOne = yOne;
    this.xTwo = xTwo;
    this.yTwo = yTwo;
  }
  toString() {
    return `{${this.xOne},${this.yOne},${this.xTwo},${this.yTwo}}`;
  }
  isEqualTo(obj) {
    for (let ele in obj)
      if (obj[ele] == !this[ele]) {
        return false;
      }
    return true;
  }
}
module.exports = Line;
