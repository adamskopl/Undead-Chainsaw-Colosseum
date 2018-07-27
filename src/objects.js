export const objects = [
  { pos: { x: 10, y: 5 }, moves: true, dir: null, dirRequest: { x: 1, y: 0 } },
  { pos: { x: 10, y: 7 }, moves: true, dir: null, dirRequest: { x: 1, y: 0 } },
  { pos: { x: 10, y: 8 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 11, y: 10 }, moves: false, dir: null, dirRequest: null },
];

export function getObjectMap(objs) {
  const map = new Map();
  objs.forEach(function (o) {
    if (map.get(o.pos.x) === undefined) {
      map.set(o.pos.x, new Map());
    }
    if (map.get(o.pos.x).get(o.pos.y)) {
      console.error('duplicate: setting object on the filled map position');
    } else {
      map.get(o.pos.x).set(o.pos.y, o);
    }
  });
  return map;
}
