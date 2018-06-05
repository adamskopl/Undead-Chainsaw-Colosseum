import { GAME_OBJECT_TYPE } from 'src/consts';

const objectsFilterTypes = (objects, types) =>
  objects.filter(c => types.includes(c.$type));

export default {
  init(g) {
    this.g = g;
    this.mainGroup = null;
    this.fieldSize = null;

    this.started = false;
  },
  // when the main sprites group is reloaded
  onMainGroupReloaded(mainGroup) {
    this.mainGroup = mainGroup;
    this.started = false;
  },
  onKeyDirection(direction) {
    if (!this.started) {
      this.started = true;
    }
  },
  onFieldResized(fieldSize) {
    this.fieldSize = fieldSize;
  },
  update() {
    if (!this.mainGroup || !this.started) {
      return;
    }
  },
};
