import {CanvasObject} from "./GameObject";
import Canvas from "./Canvas";

const CELL_VIEWS = {
  normal: {
    fillStyle: '#0059ff',
  },
  hover: {
    fillStyle: '#60000b',
  },
  click: {
    fillStyle: '#fff91f',
  }
};

export class Cell extends CanvasObject<{currentView: keyof typeof CELL_VIEWS}> {
  static height: number;
  static width: number;
  x;
  y;
  disabled;

  constructor({x, y, disabled}: { x: number; y: number; disabled?: boolean }) {
    super();
    this.state = {
      currentView: 'normal'
    };
    this.x = x;
    this.y = y;
    this.disabled = disabled;

    if (!disabled) {
      // листенеры добавляются раньше чем реализовывается метод addEventListener
      // this.addEventListener(ActionTypes.MouseDown, () => this.setState({currentView: 'click'}));
      // this.addEventListener(ActionTypes.MouseUp, () => this.setState({currentView: 'normal'}));
      // this.addEventListener(ActionTypes.MouseOver, () => this.setState({currentView: 'hover'}));
      // this.addEventListener(ActionTypes.MouseOut, () => this.setState({currentView: 'normal'}));
    }
  }

  draw = (canvas: Canvas) => {
    console.log('draw');
    const viewParams = CELL_VIEWS[this.state.currentView];
    this.object = canvas.drawRect({
      fillStyle: viewParams.fillStyle,
      // strokeStyle: viewParams.fillStyle,
      x: this.x,
      y: this.y,
      width: Cell.width,
      height: Cell.height
    });
  }
}

export default Cell;
