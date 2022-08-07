import {CanvasObject} from "./GameObject";
import sprite from '../images/man.png';
import {ERunType, IChangeStateFields, withHitbox, withRun} from "../HOCs/index";

const manSprite = new Image(935, 1133);
manSprite.src = sprite;

const manStaticValues = {
  imageWidth: 5,
  imageHeight: 6,
  realImageWidth: 233.75,
  realImageHeight: 283.25,
  hitboxWidth: 2,
  hitboxHeight: 1,
  hitboxTop: 5,
  hitboxLeft: 1,
};

class _Man extends CanvasObject {
  step = 1;
  sprite = manSprite;
  gridColor = 'red';

  constructor({x, y}: { x: number; y: number;}) {
    super();
    this.id = `man`
    this.state = {
      x: x,
      y: y,
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

const toTop = [
  {sprite: {imageX: 0, imageY: 283.25, ...manStaticValues}},
  {sprite: {imageX: 233.75, imageY: 283.25, ...manStaticValues}},
  {sprite: {imageX: 467.5, imageY: 283.25, ...manStaticValues}},
  {sprite: {imageX: 701.25, imageY: 283.25, ...manStaticValues}},
]

const toBottom = [
  {sprite: {imageX: 0, imageY: 0, ...manStaticValues}},
  {sprite: {imageX: 233.75, imageY: 0, ...manStaticValues}},
  {sprite: {imageX: 467.5, imageY: 0, ...manStaticValues}},
  {sprite: {imageX: 701.25, imageY: 0, ...manStaticValues}},
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
      if (dY < 0) {
        return toTop[currentState]
      } else if (dY > 0) {
       return toBottom[currentState];
      }
      return {sprite: {imageX: 0, imageY: 0, ...manStaticValues}}
    }
  }
}
const ManWithHitbox = withHitbox(_Man);
export const Man = withRun(ERunType.SmartCathet, setView())(ManWithHitbox);

export default Man;
