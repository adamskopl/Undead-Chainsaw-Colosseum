/**
 * Two dimensional map.
 * @typedef {Object} MapTwo
 */

const MapTwoBase = {
  init() {
    this.m = new Map();
  },
  set(x, y, o) {
    if (this.m.get(x) === undefined) {
      this.m.set(x, new Map());
    }
    this.m.get(x).set(y, o);
  },
  get(x, y) {
    return this.m.get(x) !== undefined ? this.m.get(x).get(y) : undefined;
  },
  forEach(fn) {
    this.m.forEach(function eachX(xMap, x) {
      xMap.forEach(function eachXY(xy, y) {
        fn(xy, x, y);
      });
    });
  }
};

export function createMapTwo() {
  let m = Object.create(MapTwoBase);
  m.init();
  return m;
}
