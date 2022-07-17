import {CanvasObject} from "../../components/GameObject";

export type IChangeStateFields = ({dX, dY, isLast}: { dX: number; dY: number, isLast?: boolean }) => object;

export type IRunContext = (changeStateFields: IChangeStateFields) => IRun;

export type IRun = ({x: toX, y: toY}: { x: number; y: number; }) => void

export enum ERunType {
  Diagonal = 'diagonal',
  Cathet = 'cathet',
  SmartCathet = 'smart-cathet',
}

export type Constructor = new (...args: any[]) => CanvasObject;
