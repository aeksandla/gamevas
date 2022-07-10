import {CanvasObject} from "./GameObject";
import sprite from './images/man.png';
import {withRun, withHitbox, IChangeStateFields} from "./HOCs";

const manSprite = new Image(935, 1133);
manSprite.src = sprite;

const manStaticValues = {
  imageWidth: 233.75 / 2,
  imageHeight: 283.25 / 2,
  realImageWidth: 233.75,
  realImageHeight: 283.25,
  hitboxWidth: 100,
  hitboxHeight: 100,
};

class Man extends CanvasObject {
  private _step = 1.3;
  private _sprite = manSprite;

  constructor({x, y}: { x: number; y: number; }) {
    super();
    this.state = {
      x,
      y,
      sprite: {
        imageX: 0,
        imageY: 0,
        ...manStaticValues
      },
    };
  }
}

const toLeft = [
  {sprite: {imageX: 0, imageY: 566.5, ...manStaticValues}},
  {sprite: {imageX: 233.75, imageY: 566.5, ...manStaticValues}},
  {sprite: {imageX: 467.5, imageY: 566.5, ...manStaticValues}},
  {sprite: {imageX: 701.25, imageY: 566.5, ...manStaticValues}},
]

const toRight = [
  {sprite: {imageX: 0, imageY: 849.75, ...manStaticValues}},
  {sprite: {imageX: 233.75, imageY: 849.75, ...manStaticValues}},
  {sprite: {imageX: 467.5, imageY: 849.75, ...manStaticValues}},
  {sprite: {imageX: 701.25, imageY: 849.75, ...manStaticValues}},
]

const setView: () => IChangeStateFields = () => {
  let currentState = -1;
  return ({dX, dY, isLast}) => {
    if (isLast) {
      return {sprite: {imageX: 0, imageY: 0, ...manStaticValues}};
    }
    if (currentState === 4) currentState = 0
    else currentState++
    if (dX > 0) {
      return toRight[currentState];
    } else {
      return toLeft[currentState];
    }
  }
}

export default withRun(withHitbox(Man), setView());
