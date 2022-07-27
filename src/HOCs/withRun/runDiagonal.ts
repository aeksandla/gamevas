import { IRunContext } from "./types";
import {INTERVAL} from "./constants";

const runDiagonal: IRunContext = (changeStateFields) => {
  return function ({x: toX, y: toY}) {

    if (this._interval) {
      clearInterval(this._interval);
    }
    const yPath = toY - this.state.y;
    const xPath = toX - this.state.x;

    const xSign = xPath / Math.abs(xPath) * this.step;
    const ySign = yPath / Math.abs(yPath) * this.step;

    this._interval = setInterval(() => {
      this.setState((currentState: any) => {
        let newState = {};
        if (Math.abs(yPath) > Math.abs(xPath)) {
          if (Math.abs(toY - this.state.y) >= this.step) {
            newState = {
              y: currentState.y + ySign,
              x: currentState.x + Math.abs(xPath / yPath) * xSign,
              ...changeStateFields({dX: xSign, dY: ySign}),
            }
          } else {
            newState = {
              y: toY,
              x: toX,
              ...changeStateFields({dX: xSign, dY: ySign, isLast: true}),
            };
            clearInterval(this._interval);
          }
        } else {
          if (Math.abs(toX - this.state.x) >= this.step) {
            newState = {
              x: currentState.x + xSign,
              y: currentState.y + Math.abs(yPath / xPath) * ySign,
              ...changeStateFields({dX: xSign, dY: ySign}),
            };
          } else {
            newState = {
              y: toY,
              x: toX,
              ...changeStateFields({dX: xSign, dY: ySign, isLast: true}),
            };
            clearInterval(this._interval);
          }
        }

        return newState;
      })
    }, INTERVAL)
  }
}

export default runDiagonal;
