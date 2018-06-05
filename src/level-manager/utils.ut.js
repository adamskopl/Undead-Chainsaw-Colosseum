import test from 'tape';
import {
  getFieldSize,
  getGameAreaSize,
} from './utils';

test('getGameAreaSize', (t) => {
  [ // [appW, appH], [marginX, maringY], [gameAreaW, gameAreaH]
    [[100, 100], [0.1, 0.1], [80, 80]],
    [[800, 600], [0.15, 0.15], [560, 420]],
    [[600, 800], [0.12, 0.35], [456, 240]],
    [[0, 0], [0, 0], [0, 0]],
  ].forEach((tc) => {

    let [res, actual, expected] = [null, null];
    res = getGameAreaSize(
      new Phaser.Point(tc[0][0], tc[0][1]),
      new Phaser.Point(tc[1][0], tc[1][1]),
    );
    if (tc[2]) {
      actual = Phaser.Point.equals(
        res,
        new Phaser.Point(tc[2][0], tc[2][1]),
      );
      expected = true;
    } else {
      [expected, actual] = [res, tc[2]];
    }

    t.equal(expected, actual, `game res of ${tc[0][0]}x${tc[0][1]} ` +
            `and margins ${tc[1][0]}x${tc[1][1]}, ` +
            `should have game area of size ${tc[2][0]}x${tc[2][1]}`);
  });
  t.end();
});

test('getFieldSize', (t) => {
  [
    [new Phaser.Point(100, 100), new Phaser.Point(10, 10), 10],
    [new Phaser.Point(100, 100), new Phaser.Point(20, 20), 5],
    [new Phaser.Point(100, 100), new Phaser.Point(10, 20), 5],
    [new Phaser.Point(100, 100), new Phaser.Point(20, 10), 5],
    [new Phaser.Point(200, 50), new Phaser.Point(40, 5), 5],
  ].forEach((tc) => {
    t.equal(getFieldSize(tc[0], tc[1]), tc[2], `game of the size ${tc[0].x}x${tc[0].y}, with ${tc[1].x}x${tc[1].y} fields, will have field size of ${tc[2]}`);
  });
  t.end();
});
