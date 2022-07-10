export enum ActionTypes {MouseDown = 'mousedown', MouseUp = 'mouseup', MouseOver = 'mouseover', MouseOut = 'mouseout'}

export type CanvasActionsType = {
  [action in ActionTypes]: Array<ActionCallbackType>
}

export type ActionCallbackType = (e: Event) => void;

interface IGameObjectActions extends Record<ActionTypes, string> {
}

interface IGameObject extends IGameObjectActions {
}

export type ICanvasDrawImage = (image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void

export type IDrawRect = ({fillStyle, strokeStyle, x, y, width, height,}:
                            {
                              strokeStyle?: CanvasFillStrokeStyles['strokeStyle'];
                              fillStyle?: CanvasFillStrokeStyles['fillStyle'];
                              x: number;
                              y: number;
                              width: number;
                              height: number;
                            }) => Path2D

