import T from 'tween';
import m from './math';
import { getObjectMap } from './objects';
import { getPromiseTick, drawClock } from './clock';

const SPEED = 400;
// TEST FOR DIFFERENT GRAVS
const GRAV = { x: 0, y: 1 };

export function draw(ctx, objects, OBJECT_SIZE) {
  ctx.fillStyle = 'black';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  objects.forEach(function (o) {
    ctx.save();
    ctx.strokeStyle = o.moves ? 'white' : 'brown';
    ctx.strokeRect(
      o.pos.x * OBJECT_SIZE,
      o.pos.y * OBJECT_SIZE, OBJECT_SIZE, OBJECT_SIZE,
    );
    ctx.restore();
  });

  drawClock(ctx, OBJECT_SIZE);
}

// check if object can move in a given direction
function canMove(o, dir, objectsMap) {
  let targetPos = { x: o.pos.x + dir.x, y: o.pos.y + dir.y };
  return (objectsMap.get(targetPos.x) ?
    objectsMap.get(targetPos.x).get(targetPos.y) :
    undefined) === undefined;
}

function applyDir(OBJECTS) {
  const objectsMap = getObjectMap(OBJECTS);
  OBJECTS.forEach(function (o) {
    if (o.moves === false) {
      return;
    }
    if (canMove(o, GRAV, objectsMap)) {
      o.dir = GRAV;
    } else if (
      o.dirRequest !== null &&
      !m.equal(m.neg(o.dirRequest), GRAV) &&
      canMove(o, o.dirRequest, objectsMap)
    ) {
      o.dir = o.dirRequest;
    }
  });
}

export function moveObject(o) {
  if (o.dir === null) {
    return Promise.resolve(null);
  }
  return new Promise(function promiseMoveObj(res) {
    return new T.Tween(o.pos)
      .to(m.add(o.pos, o.dir), SPEED)
      .easing(T.Easing.Cubic.In)
      .onComplete(res.bind(null, o))
      .start();
  });
}


export function moveAll(objects) {
  applyDir(objects);

  // launched when objects are ready to be moved
  return Promise.all(
    objects.map(moveObject)
      .concat(getPromiseTick(SPEED))
  ).then(function onMovePromiseAll(objs) {
    objs
      .filter(o => o !== null)
      .forEach(function forObjectMoveDone(o) {
        o.dir = null;
        o.dirRequest = null;
      });
  });
}
