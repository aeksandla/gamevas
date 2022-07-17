import {ActionCallbackType, ECanvasEventType, ICanvasDrawImage, IDrawRect} from "../common-types";
import {ORIGIN_PARAMS} from "../constants";
import {CanvasObject} from "./GameObject";
import Grid from "./Grid";
import Game from "./Game";

export class Canvas {
  canvas: HTMLCanvasElement;
  context;
  canvasWidth: number;
  canvasHeight: number;
  private objects: any[] = [];
  private isRerender = true;
  grid: Grid;

  constructor(id: string) {
    this.canvas = <HTMLCanvasElement>document.getElementById(id);
    if (!this.canvas) throw new Error('Canvas не найден');
    this.context = this.canvas.getContext('2d');
    this.setCanvasSize();
    this.grid = new Grid();
    this.setObject(this.grid);
    this.render();
    // this.setEventListeners();
  }

  render = () => {
    const main = (timestamp: number) => {
      if (this.isRerender) {
        this.drawObjects();
        this.updateMap();
        this.isRerender = false;
      }
      requestAnimationFrame(main);
    }
    main(0);
  }

  setObject = <TBase extends CanvasObject>(object: TBase) => {
    this.objects.push(object);
    object.map = this.grid.cells;
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
      this.isRerender = true;
    };
    this.isRerender = true;

    // object.addEventListener = (type: ActionTypes, cb: ActionCallbackType) => {
    //   object.listeners[type] = cb;
    // }
  };

  updateMap = () => {
    this.grid.draw(this);
    this.objects.forEach(object => {
      if (object.state?.sprite?.hitboxWidth && object.state?.sprite?.hitboxHeight && object.state.x && object.state.y) {
        for (let x = 0; x < object.state.sprite.hitboxWidth; x++) {
          for (let y = 0; y < object.state.sprite.hitboxHeight; y++){
            const currentX = object.state.x + x;
            const currentY = object.state.y + y;
            this.grid.updateCell(currentX, currentY, {x: currentX, y: currentY, cost: Infinity, id: object.id}, this, object.gridColor);
          }
        }
      }
    })

  }

  removeObject = (object: any) => {
    object.setState = () => {};
    this.objects = this.objects.filter(o => o !== object);
    this.isRerender = true;
    this.updateMap();
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

  private setCanvasSize() {
    const windowWidth = document.documentElement.clientWidth;
    const windowHeight = document.documentElement.clientHeight;
    this.canvas.width = ORIGIN_PARAMS.canvasWidth;
    this.canvas.height = ORIGIN_PARAMS.canvasHeight;

    this.canvas.style.width = '100%';
    this.canvas.style.height = 'auto';

    this.canvasWidth = ORIGIN_PARAMS.canvasWidth;
    this.canvasHeight = ORIGIN_PARAMS.canvasHeight;
  }

  drawRect: IDrawRect = ({fillStyle = 'transparent', strokeStyle = 'transparent', x, y, width, height}) => {
    const object = new Path2D();
    this.context.fillStyle = fillStyle;
    this.context.strokeStyle = strokeStyle;

    object.rect(x * this.grid.width, y * this.grid.height, width * this.grid.width, height * this.grid.height);

    this.context.stroke(object);
    this.context.fill(object);

    return object;
  }

  drawImage: ICanvasDrawImage = (image, sx, sy, sw, sh, dx, dy, dw, dh) => {
    this.context.drawImage(image, sx, sy, sw, sh, dx * this.grid.width, dy * this.grid.height, dw * this.grid.width, dh * this.grid.height);
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

  addEventListener = (type: ECanvasEventType, listener: (e: {naturalEvent: Event, x: number, y: number}) => void) => {
    switch (type) {
      case ECanvasEventType.Click: {
        this.canvas.addEventListener('click', (e) => {
          listener({naturalEvent: e, x: Math.floor(e.x * Game.scale / this.grid.width), y: Math.floor(e.y * Game.scale / this.grid.height)});
        })
        break;
      }
    }
  }
}

export default Canvas;
