import T from 'tween';
import { draw, moveObject, moveAll } from './draw';
import { objects } from './objects';

const OBJECT_SIZE = 20;

window.T = T;

init();

function init() {
  const context = document.getElementById('canvasGame').getContext('2d');
  window.ctx = context;
  window.requestAnimationFrame(update.bind(null, context));

  document.addEventListener('keydown', onDown);

  moveIteration();
}

function moveIteration() {
  moveAll(objects).then(moveIteration);
}

function update(ctx, time) {
  T.update(time);
  draw(ctx, objects, OBJECT_SIZE);
  window.requestAnimationFrame(update.bind(null, ctx));
}

function onDown(e) {
  switch (e.keyCode) {
    case 38: // up
    case 87: // w
    objects[0].dirRequest = { x: 0, y: -1 };
      break;
    case 39: // right
    case 68: // d
    objects[0].dirRequest = { x: 1, y: 0 };
      break;
    case 40: // down
    case 83: // s
    objects[0].dirRequest = { x: 0, y: 1 };
      break;
    case 37: // left
    case 65: // a
    objects[0].dirRequest = { x: -1, y: 0 };
      break;
    default:
  }
}
