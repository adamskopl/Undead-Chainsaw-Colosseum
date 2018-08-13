import Pnt from './point';

import {
  getObject,
  canMove
} from './objects';

const SPEED = 400;
// TEST FOR DIFFERENT GRAVS
const GRAV = { x: 0, y: 1 };

/**
 * Get directions for gravity and other objects.
 *
 * @param {Array.<GameObject>} objects for which directions are calculated
 * @return {Array.<Point>} directions
 */
export function getDirections(objects) {
  const oMoving = objects.filter(o => o.moves);

  const gravityAppliedDirections = oMoving.map(function(o) {
    ...
  });

  // WHY NOT WORKING:
  const gravityAppliedDirections = oMoving.map(
    o => getGravityAppliedDirection.bind(
      null, oMoving.filter(x => x !== o)
    )
  );
  console.table(gravityAppliedDirections);
}

function getGravityAppliedDirection(others, o) {
  console.warn('!')
  return canMove(o, GRAV, others) ? GRAV : o.dirRequest;
}
