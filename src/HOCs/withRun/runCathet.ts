import {IRunContext} from "./types";
import {INTERVAL} from "./constants";

const runCathet: IRunContext = (changeStateFields) => {
  return function ({x: toX, y: toY}) {
    if (this._interval) {
      clearInterval(this._interval);
    }

    const yPath = toY - this.state.y;
    const xPath = toX - this.state.x;

    const xSign = xPath / Math.abs(xPath) * this._step;
    const ySign = yPath / Math.abs(yPath) * this._step;

    this._interval = setInterval(() => {
      this.setState((currentState: any) => {
        if (currentState.x === toX && currentState.y === toY) clearInterval(this._interval);

        const newState = {x: currentState.x, y: currentState.y, ...changeStateFields({dX: xSign, dY: ySign})};
        if (Math.abs(currentState.x - toX) >= this._step) newState.x = currentState.x + xSign;
        else newState.x = toX;
        if (Math.abs(currentState.y - toY) >= this._step) newState.y = currentState.y + ySign;
        else newState.y = toY;

        return newState;
      })
    }, INTERVAL)
  }
}

export default runCathet;
