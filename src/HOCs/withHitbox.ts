import Canvas from "../components/Canvas";
import Game from "../components/Game";

function drawObjectWithHitbox(canvas: Canvas) {
  const {
    sprite: {
      imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth = imageWidth, hitboxHeight = imageHeight
    }, x, y
  } = this.state;
  this.object = canvas.drawRect({
    fillStyle: 'transparent',
    strokeStyle: Game.isShowHitbox ? this.gridColor : 'transparent',
    x: x + imageWidth / 2 - hitboxWidth / 2,
    y: y + imageHeight / 2 - hitboxHeight / 2,
    width: hitboxWidth,
    height: hitboxHeight,
  });
  canvas.drawImage(this._sprite, imageX, imageY, realImageWidth, realImageHeight, x, y, imageWidth, imageHeight);
}

type IWithHitbox = (CanvasObjectClass: any) => typeof CanvasObjectClass;

/**
 *
 * @param CanvasObjectClass
 * @description Класс должен иметь поле _sprite, стейт sprite со свойствами imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth, hitboxHeight
 */
export const withHitbox: IWithHitbox = (CanvasObjectClass) => {
  return class CanvasObjectWithHitbox extends CanvasObjectClass {

    constructor(...args: any) {
      super(...args);
      this.draw = drawObjectWithHitbox.bind(this);
    }
  }
}
