import {ActionCallbackType, ActionTypes, MapType, NodeType} from "../common-types";
import Canvas from "./Canvas";

export type CanvasObjectSetStateCb<T> = (state: T) => T;
export type CanvasObjectSetState<T> = T | CanvasObjectSetStateCb<T>;

function addEventListener(type: ActionTypes, cb: ActionCallbackType) {
  this.listeners[type] = cb;
}

export class CanvasObject<T = Record<string, any>> {
  readonly canvasObject?: boolean;
  isOver = false;
  object: Path2D;
  listeners: Partial<Record<ActionTypes, ActionCallbackType>> = {};
  draw: (canvas: Canvas) => void;
  state: T;
  setState: (arg: CanvasObjectSetState<T>) => void;
  addEventListener: (type: ActionTypes, cb: ActionCallbackType) => void = addEventListener.bind(this);
  map: MapType = {};
  id: string | number = -1;
  gridColor = 'black';

  isCb = (arg: CanvasObjectSetState<T>): arg is CanvasObjectSetStateCb<T> => typeof arg === 'function';
}
