import Canvas from "../components/Canvas";
import Game from "../components/Game";
import {EHitboxShape} from "../common-types";

function drawObjectWithHitbox(shape: EHitboxShape) {
  return function (canvas: Canvas) {
    const {
      sprite: {
        imageX,
        imageY,
        realImageWidth,
        realImageHeight,
        imageWidth,
        imageHeight,
        hitboxWidth = imageWidth,
        hitboxHeight = imageHeight,
        hitboxLeft = 0,
        hitboxTop = 0,
      },
      x, y,
    } = this.state;
    if (shape === EHitboxShape.Rect){
      this.object = canvas.drawRect({
        fillStyle: 'transparent',
        strokeStyle: Game.isShowHitbox ? this.gridColor : 'transparent',
        x: x,
        y: y,
        width: hitboxWidth,
        height: hitboxHeight,
      });
    }
    if (shape===EHitboxShape.Ellipse){
      this.object = canvas.drawEllipse({
        fillStyle: 'transparent',
        strokeStyle: Game.isShowHitbox ? this.gridColor : 'transparent',
        x: x + imageWidth / 2,
        y: y + imageHeight / 2,
        radiusX: hitboxWidth/2,
        radiusY: hitboxHeight/2,
        startAngle: 0,
        endAngle: 180,
        rotation: 0,
      });
    }

    canvas.drawImage(this.sprite, imageX, imageY, realImageWidth, realImageHeight, x - hitboxLeft, y - hitboxTop, imageWidth, imageHeight);
  }
}

type IWithHitbox = (CanvasObjectClass: any, shape?: EHitboxShape) => typeof CanvasObjectClass;

/**
 *
 * @param CanvasObjectClass
 * @description Класс должен иметь поле sprite, стейт sprite со свойствами imageX, imageY, realImageWidth, realImageHeight, imageWidth, imageHeight, hitboxWidth, hitboxHeight, hitboxLeft, hitboxTop
 */
export const withHitbox: IWithHitbox = (CanvasObjectClass, shape = EHitboxShape.Rect) => {
  return class CanvasObjectWithHitbox extends CanvasObjectClass {

    constructor(...args: any) {
      super(...args);
      this.draw = drawObjectWithHitbox.bind(this)(shape);
    }
  }
}
