import T from 'tween';

let rot = { r: 0 };

export function getPromiseTick(speed) {
  return new Promise(function promiseTick(res) {
    return new T.Tween(rot)
      .to({ r: 0.5 }, speed)
      .onComplete(function onComplete() {
        rot.r = 0;
        res(null);
      })
      .easing(T.Easing.Cubic.In)
      .start();
  });
}

export function drawClock(ctx, size) {
  ctx.save();
  ctx.strokeStyle = 'white';
  ctx.translate(ctx.canvas.width - (1.5 * size), 1.5 * size); // center
  ctx.rotate(Math.PI * rot.r);
  ctx.strokeRect(-size / 2, -size / 2, size, size);
  ctx.restore();
}
