import {ORIGIN_PARAMS} from "./constants";
import Cell from "./Cell";
import Canvas from "./Canvas";

class CellsField {
  x = 0;
  y = 0;
  cells;

  WIDTH = ORIGIN_PARAMS.canvasWidth / ORIGIN_PARAMS.cellWidth;
  HEIGHT = ORIGIN_PARAMS.canvasHeight / ORIGIN_PARAMS.cellHeight;

  constructor() {
    this.cells = new Array(this.WIDTH);
    this.cells.fill(new Array(this.HEIGHT));
  }

  draw = (canvas:Canvas) => {
    for (let i = 0; i < this.WIDTH; i++) {
        for (let j = 0; j < this.HEIGHT; j++) {
          const cell = new Cell({
            x: this.x + i * Cell.width,
            y: this.y + j * Cell.height,
          });
          canvas.setObject(cell);
          this.cells[i][j] = cell;
        }
      }
  }
}

export default CellsField;
