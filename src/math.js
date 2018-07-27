export default {
  add(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
  },
  neg(a) {
    return { x: -a.x, y: -a.y };
  },
  equal(a, b) {
    return a.x === b.x && a.y === b.y;
  },
};
