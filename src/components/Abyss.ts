import {CanvasObject} from "./GameObject";
import sprite from "../images/abyss.png";
import {withHitbox} from "../HOCs";
import {ActionTypes, EHitboxShape} from "../common-types";

const abyssSprite = new Image(935, 1133);
abyssSprite.src = sprite;

class _Abyss extends CanvasObject {
  private sprite = abyssSprite;
  gridColor = 'green';

  constructor({x, y, width, height}: { x: number; y: number; width: number; height: number}) {
    super();
    this.id = `abyss`
    this.state = {
      x,
      y,
      sprite: {
        imageX: 0,
        imageY: 0,
        imageWidth: width,
        imageHeight: height,
        realImageWidth: 1868,
        realImageHeight: 917,
        hitboxWidth: width,
        hitboxHeight: height,
      },
    };

    // this.addEventListener(ActionTypes.MouseOver, () => this.setState(state => ({
    //   sprite: {
    //     ...state.sprite,
    //     imageX: 34,
    //   }
    // })));
    //
    // this.addEventListener(ActionTypes.MouseOut, () => this.setState(state => ({
    //   sprite: {
    //     ...state.sprite,
    //     imageX: 0,
    //   }
    // })));
  }
}

export const Abyss = withHitbox(_Abyss, EHitboxShape.Ellipse)
export default Abyss;
