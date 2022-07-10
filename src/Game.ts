import Canvas from './Canvas';
import CellsField from './CellsField';
import {BACKGROUND, ORIGIN_PARAMS} from './constants';
import Man from "./Man";
import Cell from "./Cell";

class Game {
  static ratio: number;
  backgroundCanvas;
  manCanvas;

  constructor() {
    this.backgroundCanvas = new Canvas('background-canvas');
    Game.ratio = this.backgroundCanvas.canvasWidth / ORIGIN_PARAMS.canvasWidth;

    this.manCanvas = new Canvas('man-canvas');

    Cell.height = ORIGIN_PARAMS.cellHeight * Game.ratio;
    Cell.width = ORIGIN_PARAMS.cellWidth * Game.ratio;

    const cellsField = new CellsField();
    cellsField.draw(this.backgroundCanvas);
    const mans = [1,2,3,4,5,6,7,8,9,20,11,12,13].map((_man, index) => new Man({x: 0, y: 100 * index}));
    mans.forEach((man) => {
      this.manCanvas.setObject(man);
    });
    this.manCanvas.canvas.addEventListener('click', (e) => {
      mans.forEach((man) => {
        man.run({x: e.x, y: e.y});
      });
    });

    setInterval(() => {
      mans.forEach((man) => {
        man.run({x: Math.floor(Math.random() * this.backgroundCanvas.canvasWidth), y: Math.floor(Math.random() * this.backgroundCanvas.canvasHeight)});
      });
    }, 10000)
  }
}

export default Game;
