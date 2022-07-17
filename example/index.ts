import {Game, Man, CellsField, Cell, ORIGIN_PARAMS, Canvas, Abyss} from 'go-canvas'
import {ECanvasEventType} from "../src";

const backgroundCanvas = new Canvas('background-canvas');

Game.scale = ORIGIN_PARAMS.canvasWidth / backgroundCanvas.canvas.getBoundingClientRect().width;
// Game.isShowGrid = true;
Game.isShowHitbox = true;
// Game.isShowHitboxGrid = true;

const manCanvas = new Canvas('man-canvas');

// Cell.height = ORIGIN_PARAMS.cellHeight * Game.ratio;
// Cell.width = ORIGIN_PARAMS.cellWidth * Game.ratio;

// const cellsField = new CellsField();
// cellsField.draw(backgroundCanvas);

const mans = [1].map((_man, index) => new Man({x: 0, y: 100 * index}));
mans.forEach((man) => {
  manCanvas.setObject(man);
});

manCanvas.addEventListener(ECanvasEventType.Click, (e) => {
  mans.forEach((man) => {
    man.run({x: e.x, y: e.y});
  });
});

const abyss1 = new Abyss({x: 1, y: 10, width: 20, height: 9});
const abyss2 = new Abyss({x: 21, y: 10, width: 20, height: 9});
const abyss3 = new Abyss({x: 42, y: 10, width: 15, height: 9});

const abyss4 = new Abyss({x: 50, y: 30, width: 20, height: 9});
const abyss5 = new Abyss({x: 30, y: 30, width: 20, height: 9});
const abyss6 = new Abyss({x: 9, y: 30, width: 15, height: 9});

manCanvas.setObject(abyss1);
manCanvas.setObject(abyss2);
manCanvas.setObject(abyss3);
manCanvas.setObject(abyss4);
manCanvas.setObject(abyss5);
manCanvas.setObject(abyss6);

// setInterval(() => {
//   mans.forEach((man) => {
//     man.run({x: Math.floor(Math.random() * backgroundCanvas.canvasWidth), y: Math.floor(Math.random() * backgroundCanvas.canvasHeight)});
//   });
// }, 10000)
