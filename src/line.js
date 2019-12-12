class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }
  toString() {
    return `line endA(${this.endA.x},${this.endA.y}) endB(${this.endB.x},${this.endB.y})`;
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
