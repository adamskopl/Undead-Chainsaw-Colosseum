import T from 'tween';
import Pnt from './point';
import { getObjectsMap, getFieldsMultiRequestsMap } from './objects';
import { getPromiseTick, drawClock } from './clock';
import { createMapTwo } from './utils';

export function draw(ctx, objects, OBJECT_SIZE) {
  ctx.fillStyle = 'white';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  objects.forEach(function (o) {
    ctx.save();
    ctx.strokeStyle = o.moves ? 'black' : 'orange';
    ctx.strokeRect(
      o.pos.x * OBJECT_SIZE,
      o.pos.y * OBJECT_SIZE, OBJECT_SIZE, OBJECT_SIZE,
    );
    ctx.restore();
  });

  drawClock(ctx, OBJECT_SIZE);
}

function moveObject(o) {
  return new Promise(promiseMoveObj);

  function promiseMoveObj(res) {
    return new T.Tween(o.pos)
      .to(Pnt.add(o.pos, o.dir), SPEED)
      .easing(T.Easing.Cubic.In)
      .onComplete(res.bind(null, o))
      .start();
  }
}

function getPositionsForcedByGravity(objectsMoving, objects) {
  return objectsMoving
    .reduce(reducer.bind(null, objects), []);
  function reducer(objs, arr, o) {
    if (canMove(o, GRAV, objs)) {
      arr.push(o.pos);
    }
    return arr;
  }
}

function getMoveDirections(objects) {
  let objectsMoving = objects.filter(o => o.moves === true);
  let gravDirs = getPositionsForcedByGravity(objectsMoving, objects);
  return objectsMoving.map(function (o) {
    return {
      o,
      dir: gravDirs.find(p => Pnt.equal(p, o.pos)) ? GRAV : o.dirRequest
    };
  });
}
  // // launched when objects are ready to be moved
  // return Promise.all(
  //   objects
  //   .filter(o => o.dir !== null)
  //   .map(moveObject)
  //   .concat(getPromiseTick(SPEED))
  // ).then(function onMovePromiseAll(objs) {
  //   objs
  //     .filter(o => o !== null)
  //     .forEach(function forObjectMoveDone(o) {
  //       o.dir = null;
  //     });
  // });
