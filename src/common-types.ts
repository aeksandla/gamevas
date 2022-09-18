export enum ActionTypes {MouseDown = 'mousedown', MouseUp = 'mouseup', MouseOver = 'mouseover', MouseOut = 'mouseout'}

export type CanvasActionsType = {
  [action in ActionTypes]: Array<ActionCallbackType>
}

export type ActionCallbackType = (e: Event) => void;

export type ICanvasDrawImage = (image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number) => void

export type DrawRectParamsType = {
  strokeStyle?: CanvasFillStrokeStyles['strokeStyle'];
  fillStyle?: CanvasFillStrokeStyles['fillStyle'];
  x: number;
  y: number;
  width: number;
  height: number;
}

export type IDrawRect = ({fillStyle, strokeStyle, x, y, width, height,}: DrawRectParamsType) => Path2D;

export type IDrawEllipse = ({fillStyle, strokeStyle, x, y, radiusX, radiusY}:
                           {
                             strokeStyle?: CanvasFillStrokeStyles['strokeStyle'];
                             fillStyle?: CanvasFillStrokeStyles['fillStyle'];
                             x: number;
                             y: number;
                             radiusX: number;
                             radiusY?: number;
                             rotation: number;
                             startAngle: number;
                             endAngle: number;
                             counterclockwise?: boolean;
                           }) => Path2D;

export type NodeType = {x: number; y: number; cost: number; id?: string | number; previous?: NodeType};

export type MapType = Record<string, NodeType>;

export enum ECanvasEventType {
  Click = 'click',
}

export enum EHitboxShape {
  Rect = 'rect',
  Ellipse = 'ellipse',
}

export interface IResource {
    name: string;
    id: Resource;
    image: string;
}

export enum Resource {
    Stone = 'stone',
}
