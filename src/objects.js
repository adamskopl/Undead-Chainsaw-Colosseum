export const objects = [

  { pos: { x: 12, y: 9 }, moves: true, dir: null, dirRequest: { x: -1, y: 0}, },
  { pos: { x: 10, y: 9 }, moves: true, dir: null, dirRequest: { x: 1, y: 0} },

  { pos: { x: 10, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 11, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 12, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 13, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 14, y: 10 }, moves: false, dir: null, dirRequest: null },

  { pos: { x: 12, y: 15 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 13, y: 15 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 14, y: 15 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 15, y: 15 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 16, y: 15 }, moves: false, dir: null, dirRequest: null },


  { pos: { x: 8, y: 8 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 8, y: 9 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 8, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 8, y: 11 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 8, y: 12 }, moves: false, dir: null, dirRequest: null },


  { pos: { x: 16, y: 9 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 16, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 16, y: 11 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 16, y: 12 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 16, y: 13 }, moves: false, dir: null, dirRequest: null },

];

export function getPlayer() {
  return objects[0];
}

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
