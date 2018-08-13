/**
 * Two dimensional map.
 * @typedef {Object} Point
 * @param {Number} x
 * @param {Number} y
 */

function equal(a, b) {
  return a.x === b.x && a.y === b.y;
}

function some(arr, a) {
  return arr.some(el => equal(el, a));
}

export default {
  add(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
  },
  neg(a) {
    return { x: -a.x, y: -a.y };
  },
  equal,
  some
};
