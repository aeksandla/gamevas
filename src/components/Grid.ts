import {CanvasObject} from "./GameObject";
import {ORIGIN_PARAMS} from "../constants";
import Canvas from "./Canvas";
import {MapType, NodeType} from "../common-types";
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
        x: x,
        y: y,
        strokeStyle: gridColor,
      });
    }
  }

  drawCell = (canvas: Canvas) => (params: {x: number; y: number, strokeStyle?: string}) => {
    const object = new Path2D();
    canvas.context.fillStyle = 'transparent';
    canvas.context.strokeStyle = params.strokeStyle || 'rgba(0,0,255,0.1)';
    object.rect(params.x * this.width, params.y * this.height, this.width, this.height);
    canvas.context.stroke(object);
    canvas.context.fill(object);

    if (Game.isShowGrid) {
      const x = (params.x);
      const y = (params.y);
      if ((x % 5 === 0 && y === 0) || (y % 5 === 0 && x === 0)) {
        canvas.context.fillStyle = "#00F";
        canvas.context.font = "10pt Arial";
        canvas.context.fillText((x || y).toString(), x * this.width, y * this.height + this.height/2);
      }
    }
  }

  draw = (canvas: Canvas) => {
    const xCount = ORIGIN_PARAMS.canvasWidth / ORIGIN_PARAMS.gridCellWidth;
    const yCount = ORIGIN_PARAMS.canvasHeight / ORIGIN_PARAMS.gridCellHeight;
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        if (Game.isShowGrid) {
          this.drawCell(canvas)({x, y});
        }
        this.cells[getMapKey(x, y)] = {
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
