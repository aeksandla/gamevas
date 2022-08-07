import {Game, Man, ORIGIN_PARAMS, Canvas, NodeType, ECanvasEventType, Stone, StoneSize} from 'gamevas'

const getRandomPosition = () => {
    const free = Object.values(manCanvas.grid.map).filter(({cost}) => cost === 0);
    return free[Math.floor(Math.random() * free.length - 1)];
}
const getRandomStoneSize = () => {
    const sizes = [StoneSize.M, StoneSize.L, StoneSize.S, StoneSize.Xs];
    return sizes[Math.floor(Math.random() * 4)];
}

const backgroundCanvas = new Canvas('background-canvas');
const game = new Game();
game.showToolbox();
Game.scale = ORIGIN_PARAMS.canvasWidth / backgroundCanvas.canvas.getBoundingClientRect().width;

const manCanvas = new Canvas('man-canvas');

const stones = [...(new Array(20))].map(() => {
    const position = getRandomPosition();
    const s = new Stone({x: position.x, y: position.y, size: getRandomStoneSize()});
    manCanvas.setObject(s);
    return s;
});

const mans = [1, 2, 3, 4].map(() => new Man({x: 0, y: 6}));
mans.forEach((man) => {
    manCanvas.setObject(man);
});

manCanvas.addEventListener(ECanvasEventType.Click, (e) => {
    mans.forEach((man, index) => {
        // @ts-ignore
        if (document.forms.mansForm.man.value == index + 1) {
            man.run({x: e.x, y: e.y});
        }
    });
});

setInterval(() => {
    const free = Object.values(manCanvas.grid.map).filter(({cost}) => cost === 0);
    mans.forEach((man) => {
        const newPosition: NodeType = free[Math.floor(Math.random() * free.length - 1)];
        man.run({
            x: newPosition.x,
            y: newPosition.y,
        });
    });
}, 10000)

