import {Game, Man, ORIGIN_PARAMS, Canvas, Abyss, NodeType, ECanvasEventType} from 'go-canvas'

const backgroundCanvas = new Canvas('background-canvas');
const game = new Game();
game.showToolbox();
Game.scale = ORIGIN_PARAMS.canvasWidth / backgroundCanvas.canvas.getBoundingClientRect().width;

const manCanvas = new Canvas('man-canvas');

const abyss1 = new Abyss({x: 0, y: 10, width: 60, height: 5});
const abyss2 = new Abyss({x: 20, y: 20, width: 60, height: 5});
const abyss3 = new Abyss({x: 0, y: 0, width: 71, height: 5});
const abyss4 = new Abyss({x: 51, y: 30, width: 20, height: 5});
const abyss5 = new Abyss({x: 27, y: 35, width: 20, height: 4});
const abyss6 = new Abyss({x: 9, y: 30, width: 15, height: 6});

manCanvas.setObject(abyss1);
manCanvas.setObject(abyss2);
manCanvas.setObject(abyss3);
manCanvas.setObject(abyss4);
manCanvas.setObject(abyss5);
manCanvas.setObject(abyss6);

const mans = [1, 2, 3, 4].map((_man, index) => new Man({x: 0, y: 6}));
mans.forEach((man) => {
  manCanvas.setObject(man);
});

manCanvas.addEventListener(ECanvasEventType.Click, (e) => {
  mans.forEach((man, index) => {
    // @ts-ignore
    if (document.forms.mansForm.man.value == index+1) man.run({x: e.x, y: e.y});
  });
});

setInterval(() => {
  const free = Object.values(manCanvas.grid.map).filter(({cost}) => cost === 0);
  mans.forEach((man) => {
    if (!man._interval) {
      const newPosition: NodeType =  free[Math.floor(Math.random() * free.length - 1)];
      man.run({
        x: newPosition.x,
        y: newPosition.y,
      });
    }
  });
}, 10000)

