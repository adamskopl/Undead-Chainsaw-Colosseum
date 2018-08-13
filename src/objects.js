import Pnt from './point';
import { createMapTwo } from './utils';

export const objectsInitial = [
  { pos: { x: 13, y: 8 }, moves: true, dir: null, dirRequest: null },

  { pos: { x: 12, y: 9 }, moves: true, dir: null, dirRequest: { x: 1, y: 0 }, },

  { pos: { x: 10, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 11, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 12, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 13, y: 10 }, moves: false, dir: null, dirRequest: null },
  { pos: { x: 14, y: 10 }, moves: false, dir: null, dirRequest: null },
];


export function getObject(others, pos) {
  return others.find(o => Pnt.equal(o.pos, pos));
}

// can object move in a given direction
export function canMove(o, dir, others) {
  return getObject(others, Pnt.add(o.pos, dir)) === undefined;
}

export function objIsMoving(/*object*/) {

}

export function objExists(pos, others) {
  return getObject();
}

/**
 * Map with fields on which more than one block wants to be moved.
 */
export function getFieldsMultiRequestsMap(objs) {
  let map = createMapTwo();
  let positionsReq = objs
    .filter(o => o.dir !== null)
    .map(o => pnt.add(o.pos, o.dir));
  getPositionsMultiRequests(positionsReq).forEach(setMap.bind(null, map));
  return map;

  function setMap(m, p) {
    m.set(p.x, p.y, true);
  }
  function getPositionsMultiRequests(posRequests) {
    let preDuplicates = [];
    let multiReq = [];
    posRequests.forEach(function (pReq) {
      if (pnt.some(preDuplicates, pReq) && !pnt.some(multiReq, pReq)) {
        multiReq.push(pReq);
      } else {
        preDuplicates.push(pReq);
      }
    });
    return multiReq;
  }
}
