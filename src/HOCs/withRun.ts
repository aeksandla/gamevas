const runCanvasObject = (changeStateFields: IChangeStateFields) => {
  return function ({x: toX, y: toY}: { x: number; y: number; }) {
    if (this._interval) {
      clearInterval(this._interval);
    }
    const yPath = toY - this.state.y;
    const xPath = toX - this.state.x;

    const xSign = xPath / Math.abs(xPath) * this._step;
    const ySign = yPath / Math.abs(yPath) * this._step;

    this._interval = setInterval(() => {
      this.setState((currentState: any) => {
        let newState = {};
        if (Math.abs(yPath) > Math.abs(xPath)) {
          if (Math.abs(toY - this.state.y) >= this._step) {
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
          if (Math.abs(toX - this.state.x) >= this._step) {
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
    })
  }
}

type IWithRun = (CanvasObjectClass: any, changeFields?: IChangeStateFields) => typeof CanvasObjectClass;
export type IChangeStateFields = ({dX, dY, isLast}: {dX: number; dY: number, isLast?: boolean}) => object;
/**
 *
 * @param CanvasObjectClass
 * @param changeStateFields
 * @description Класс должен иметь поле _step, стейты x, y
 */
export const withRun: IWithRun = (CanvasObjectClass, changeStateFields = () => ({})) => {
  return class CanvasObjectWithHitbox extends CanvasObjectClass {
    private _interval: NodeJS.Timer | null;
    constructor(...args: any) {
      super(...args);
      this.run = runCanvasObject(changeStateFields).bind(this);
    }
  }
}
