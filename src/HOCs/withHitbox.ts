import Canvas from "../Canvas";
import Game from "../Game";

function drawObjectWithHitbox(canvas: Canvas) {
  const {
    sprite: {
      imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth, hitboxHeight
    }, x, y
  } = this.state;
  this.object = canvas.drawRect({
    fillStyle: 'transparent',
    strokeStyle: 'transparent',
    x: x + imageWidth * Game.ratio / 2 - hitboxWidth * Game.ratio / 2,
    y: y + imageHeight * Game.ratio / 2 - hitboxHeight * Game.ratio / 2,
    width: hitboxWidth * Game.ratio,
    height: hitboxHeight * Game.ratio,
  });
  canvas.drawImage(this._sprite, imageX, imageY, realImageWidth, realImageHeight, x, y, imageWidth * Game.ratio, imageHeight * Game.ratio);
}

type IWithHitbox = (CanvasObjectClass: any) => typeof CanvasObjectClass;

/**
 *
 * @param CanvasObjectClass
 * @description Класс должен иметь поле _sprite, стейт sprite со свойствами imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth, hitboxHeight
 */
export const withHitbox: IWithHitbox = (CanvasObjectClass,) => {
  return class CanvasObjectWithHitbox extends CanvasObjectClass {

    constructor(...args: any) {
      super(...args);
      this.draw = drawObjectWithHitbox.bind(this);
    }
  }
}
