import {CanvasObject} from "./GameObject";
import {ORIGIN_PARAMS} from "../constants";
import Canvas from "./Canvas";
import {IDrawRect, MapType, NodeType} from "../common-types";
import {getMapKey} from "../utils";
import Game from "./Game";

export class Grid extends CanvasObject {
  width = ORIGIN_PARAMS.gridCellWidth;
  height = ORIGIN_PARAMS.gridCellHeight;
  cells: MapType = {};

  constructor() {
    super();
    this.width = ORIGIN_PARAMS.gridCellWidth;
    this.height = ORIGIN_PARAMS.gridCellHeight;
  }

  updateCell = (x: number, y: number, data: Partial<NodeType>, canvas: Canvas, gridColor: string) => {
    this.cells[getMapKey(x, y)] = {...this.cells[getMapKey(x, y)], ...data}
    if (Game.isShowHitboxGrid) {
      this.drawCell(canvas)({
        x: x * this.width,
        y: y * this.height,
        width: this.width,
        height: this.height,
        strokeStyle: gridColor,
      });
    }
  }

  drawCell = (canvas: Canvas): IDrawRect => (params) => {
    const object = new Path2D();
    canvas.context.fillStyle = 'transparent';
    canvas.context.strokeStyle = params.strokeStyle || (Game.isShowGrid ? '#8292ff' : 'transparent');

    object.rect(params.x, params.y, params.width, params.height);

    canvas.context.stroke(object);
    canvas.context.fill(object);

    return object;
  }

  draw = (canvas: Canvas) => {
    const xCount = ORIGIN_PARAMS.canvasWidth / ORIGIN_PARAMS.gridCellWidth;
    const yCount = ORIGIN_PARAMS.canvasHeight / ORIGIN_PARAMS.gridCellHeight;
    const drawCell = this.drawCell(canvas);
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        this.cells[getMapKey(x, y)] = {
          cell: drawCell({
            x: this.width * x,
            y: this.height * y,
            width: this.width,
            height: this.height,
          }),
          x,
          y,
          cost: 0,
          id: -1,
        };
      }
    }
  }
}

export default Grid;
