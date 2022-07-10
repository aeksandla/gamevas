import {ActionCallbackType, ActionTypes} from "./types";
import Canvas from "./Canvas";

export type CanvasObjectSetStateCb<T> = (state: T) => T;
export type CanvasObjectSetState<T> = T | CanvasObjectSetStateCb<T>;

export class CanvasObject<T = Record<string, any>> {
  readonly canvasObject?: boolean;
  isOver = false;
  object: Path2D;
  listeners: Partial<Record<ActionTypes, ActionCallbackType>> = {};
  draw: (canvas: Canvas) => void;
  state: T;
  setState: (arg: CanvasObjectSetState<T>) => void;
  addEventListener: (type: ActionTypes, cb: ActionCallbackType) => void;

  isCb = (arg: CanvasObjectSetState<T>): arg is CanvasObjectSetStateCb<T> => typeof arg === 'function';
}
