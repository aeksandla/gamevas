import {
  ActionCallbackType,
  ActionTypes,
  ECanvasEventType,
  ICanvasDrawImage,
  IDrawEllipse,
  IDrawRect
} from "../common-types";
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
    this.enableEventListeners();
    this.render();
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

  enableEventListeners = () => {
    this.canvas.addEventListener('mousedown', (e) => {
      this.objects.forEach(object => {
        if (object.listeners[ActionTypes.MouseDown]) this.objectEvents[ActionTypes.MouseDown](object, e);
      })
    });
    this.canvas.addEventListener('mouseup', (e) => {
      this.objects.forEach(object => {
        if (object.listeners[ActionTypes.MouseUp]) this.objectEvents[ActionTypes.MouseUp](object, e);
      })
    });
    this.canvas.addEventListener('mousemove', (e) => {
      this.objects.forEach(object => {
        if (object.listeners[ActionTypes.MouseOver]) this.objectEvents[ActionTypes.MouseOver](object, e);
        if (object.listeners[ActionTypes.MouseOut]) this.objectEvents[ActionTypes.MouseOut](object, e);
      })
    });
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
  };

  updateMap = () => {
    this.grid.draw(this);
    this.objects.forEach(object => {
      if (object.state?.sprite?.hitboxWidth && object.state?.sprite?.hitboxHeight && object.state.x !== undefined && object.state.y !== undefined) {
        const {sprite: {
          hitboxWidth,
          hitboxHeight,
        },
        x: objectX,
        y: objectY,
        } = object.state;
        for (let x = 0; x < hitboxWidth; x++) {
          for (let y = 0; y < hitboxHeight; y++){
            const currentX = objectX + x;
            const currentY = objectY + y;
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

  private setCanvasSize() {
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

  drawEllipse: IDrawEllipse = ({fillStyle = 'transparent', strokeStyle = 'transparent', x, y, radiusX, radiusY = radiusX, rotation, counterclockwise, startAngle, endAngle}) => {
    const object = new Path2D();
    this.context.fillStyle = fillStyle;
    this.context.strokeStyle = strokeStyle;

    object.ellipse(x * this.grid.width, y * this.grid.height, radiusX * this.grid.width, radiusY * this.grid.height, rotation, startAngle, endAngle, counterclockwise);

    this.context.stroke(object);
    this.context.fill(object);

    return object;
  }

  drawImage: ICanvasDrawImage = (image, sx, sy, sw, sh, dx, dy, dw, dh) => {
    this.context.drawImage(image, sx, sy, sw, sh, dx * this.grid.width, dy * this.grid.height, dw * this.grid.width, dh * this.grid.height);
  }

  objectEvents = {
    mousedown: (object: CanvasObject, e: MouseEvent) => {
      const isMouseDown = this.context.isPointInPath(object.object, this.getCoordinate(e, 'x'), this.getCoordinate(e, 'y'));
      if (isMouseDown) {
        object.listeners[ActionTypes.MouseDown](e);
      }
    },
    mouseup: (object: CanvasObject, e: MouseEvent) => {
      const isMouseUp = this.context.isPointInPath(object.object, this.getCoordinate(e, 'x'), this.getCoordinate(e, 'y'));
      if (isMouseUp) {
        object.listeners[ActionTypes.MouseUp](e);
      }
    },
    mouseover: (object: CanvasObject, e: MouseEvent) => {
      const isMouseOver = this.context.isPointInPath(object.object, this.getCoordinate(e, 'x'), this.getCoordinate(e, 'y')) && !object.isOver;
      if (isMouseOver) {
        console.log('mouseover');
        object.isOver = true;
        object.listeners[ActionTypes.MouseOver](e);
      }
    },
    mouseout: (object: CanvasObject, e: MouseEvent) => {
      const isMouseOut = !this.context.isPointInPath(object.object, this.getCoordinate(e, 'x'), this.getCoordinate(e, 'y')) && object.isOver;
      if (isMouseOut) {
        console.log('mouseout');
        object.isOver = false;
        object.listeners[ActionTypes.MouseOut](e);
      }
    },
  }

  getCoordinate = (e: MouseEvent, type: 'x' | 'y') => {
    return (e[type] - this.canvas.getBoundingClientRect()[type]) * Game.scale;
  }

  addEventListener = (type: ECanvasEventType, listener: (e: {naturalEvent: Event, x: number, y: number}) => void) => {
    switch (type) {
      case ECanvasEventType.Click: {
        this.canvas.addEventListener('click', (e) => {
          listener({naturalEvent: e, x: Math.floor(this.getCoordinate(e, 'x') / this.grid.width), y: Math.floor(this.getCoordinate(e, 'y') / this.grid.height)});
        })
        break;
      }
    }
  }
}

export default Canvas;
