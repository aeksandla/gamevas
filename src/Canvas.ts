import {ActionCallbackType, ActionTypes, ICanvasDrawImage, IDrawRect} from "./types";
import {BACKGROUND, ORIGIN_PARAMS} from "./constants";
import {
  CanvasObject,
  CanvasObjectSetState, CanvasObjectSetStateCb,
} from "./GameObject";

class Canvas {
  canvas: HTMLCanvasElement;
  context;
  canvasWidth: number;
  canvasHeight: number;
  private objects: any[] = [];

  constructor(id: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(id);
    if (!this.canvas) throw new Error('Canvas не найден');

    this.context = this.canvas.getContext('2d');

    const {height, width} = Canvas.calcCanvasSize();

    this.setCanvasSize(width, height);
    // this.setEventListeners();
  }

  setObject = (object: CanvasObject) => {
    this.objects.push(object);
    object.setState = (arg) => {
      if (object.isCb(arg)) {
        object.state = {
          ...object.state,
          ...arg(object.state),
        }
      } else {
        object.state = {
          ...object.state,
          ...arg,
        }
      }
      this.drawObjects();
    };
    this.drawObjects();

    // object.addEventListener = (type: ActionTypes, cb: ActionCallbackType) => {
    //   object.listeners[type] = cb;
    // }
  };

  removeObject = (object: any) => {
    object.setState = () => {};
    this.objects = this.objects.filter(o => o !== object);
    this.drawObjects();
  }

  private drawObjects = () => {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.objects.forEach(object => {
      object.draw(this);
    });
  }

  // private setEventListeners = () => {
  //   this.objects.forEach(object => {
  //       Object.entries(object.listeners).forEach(([type, cb]: [ActionTypes, ActionCallbackType]) => {
  //         switch (type) {
  //           case ActionTypes.MouseDown:
  //             return this.canvas.addEventListener('mousedown', (e) => this.objectEvents.mousedown(object, e));
  //           case ActionTypes.MouseUp:
  //             return this.canvas.addEventListener('mouseup', (e) => this.objectEvents.mouseup(object, e));
  //           case ActionTypes.MouseOver:
  //             return this.canvas.addEventListener('mousemove', (e) => this.objectEvents.mouseover(object, e));
  //           case ActionTypes.MouseOut:
  //             return this.canvas.addEventListener('mousemove', (e) => this.objectEvents.mouseout(object, e));
  //           default:
  //             break;
  //         }
  //       })
  //   });
  // }

  private setCanvasSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvasHeight = height;
    this.canvasWidth = width;
  }

  private static calcCanvasSize() {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;

    let canvasWidth, canvasHeight;
    canvasWidth = windowWidth;
    canvasHeight = windowWidth * ORIGIN_PARAMS.canvasHeight / ORIGIN_PARAMS.canvasWidth;


    if (canvasHeight > windowHeight) {
      const dif = canvasHeight - windowHeight;
      const difPercent = dif / canvasHeight;
      canvasHeight = canvasHeight * (1 - difPercent);
      canvasWidth = canvasWidth * (1 - difPercent);
    }

    if (canvasWidth > windowWidth) {
      const dif = canvasWidth - windowWidth;
      const difPercent = dif / canvasWidth;
      canvasWidth = canvasWidth * (1 - difPercent);
      canvasHeight = canvasHeight * (1 - difPercent);
    }

    return {height: canvasHeight, width: canvasWidth}
  }

  drawRect: IDrawRect = ({fillStyle = 'none', strokeStyle = 'none', x, y, width, height,}) => {
    const object = new Path2D();
    this.context.fillStyle = fillStyle;
    this.context.strokeStyle = strokeStyle;

    object.rect(x, y, width, height);

    this.context.stroke(object);
    this.context.fill(object);

    return object;
  }

  drawImage: ICanvasDrawImage = (image, sx, sy, sw, sh, dx, dy, dw, dh) => {
    this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }

  // objectEvents = {
  //   mousedown: (object: CanvasObject, e: MouseEvent) => {
  //     const isMouseDown = this.context.isPointInPath(object.object, e.x, e.y);
  //     if (isMouseDown) {
  //       object.listeners[ActionTypes.MouseDown](e);
  //     }
  //   },
  //   mouseup: (object: CanvasObject, e: MouseEvent) => {
  //     const isMouseUp = this.context.isPointInPath(object.object, e.x, e.y);
  //     if (isMouseUp) {
  //       object.listeners[ActionTypes.MouseUp](e);
  //     }
  //   },
  //   mouseover: (object: CanvasObject, e: MouseEvent) => {
  //     const isMouseOver = this.context.isPointInPath(object.object, e.x, e.y) && !object.isOver;
  //     if (isMouseOver) {
  //       object.isOver = true;
  //       object.listeners[ActionTypes.MouseOver](e);
  //     }
  //   },
  //   mouseout: (object: CanvasObject, e: MouseEvent) => {
  //     const isMouseOut = !this.context.isPointInPath(object.object, e.x, e.y) && object.isOver;
  //     if (isMouseOut) {
  //       object.isOver = false;
  //       object.listeners[ActionTypes.MouseOut](e);
  //     }
  //   },
  // }
}

export default Canvas;
