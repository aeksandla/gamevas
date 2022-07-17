import {CanvasObject} from "./GameObject";
import sprite from '../images/man.png';
import {ERunType, IChangeStateFields, withHitbox, withRun} from "../HOCs/index";
import {ORIGIN_PARAMS} from "../constants";

const manSprite = new Image(935, 1133);
manSprite.src = sprite;

const manStaticValues = {
  imageWidth: Math.round(233.75 / 2 / ORIGIN_PARAMS.gridCellWidth),
  imageHeight: Math.round(283.25 / 2 / ORIGIN_PARAMS.gridCellHeight),
  realImageWidth: 233.75,
  realImageHeight: 283.25,
  hitboxWidth: Math.round(233.75 / 2 / ORIGIN_PARAMS.gridCellWidth),
  hitboxHeight: Math.round(283.25 / 2 / ORIGIN_PARAMS.gridCellHeight),
};

class _Man extends CanvasObject {
  private _step = 1;
  private _sprite = manSprite;
  gridColor = 'red';

  constructor({x, y}: { x: number; y: number; }) {
    super();
    this.id = `man`
    this.state = {
      x,
      y,
      sprite: {
        imageX: x,
        imageY: y,
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
    } else if (dX < 0) {
      return toLeft[currentState];
    } else {
      return {sprite: {imageX: 0, imageY: 0, ...manStaticValues}}
    }
  }
}
const ManWithHitbox = withHitbox(_Man);
export const Man = withRun(ERunType.SmartCathet, setView())(ManWithHitbox);

export default Man;
