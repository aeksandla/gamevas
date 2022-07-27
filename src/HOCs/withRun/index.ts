import {CanvasObject} from "../../components/GameObject";
import {Constructor, ERunType, IChangeStateFields, IRun} from "./types";
import runCathet from "./runCathet";
import runDiagonal from "./runDiagonal";
import runSmartCathet from "./runSmartCathet";

/**
 *
 * @param type
 * @param changeStateFields
 */
export const withRun = <TBase extends Constructor>(type: ERunType = ERunType.Diagonal, changeStateFields?: IChangeStateFields) =>
  /**
   *
   * @param CanvasObjectClass - Класс должен иметь поле step, стейты x, y
   */
  (CanvasObjectClass: TBase) => class CanvasObjectWithRun extends CanvasObjectClass {
    _interval: NodeJS.Timer | null = null;
    run: IRun;

    constructor(...args: any[]) {
      super(...args as ConstructorParameters<typeof CanvasObject>);
      switch (type) {
        case ERunType.Cathet: {
          this.run = runCathet(changeStateFields).bind(this);
          break;
        }
        case ERunType.Diagonal: {
          this.run = runDiagonal(changeStateFields).bind(this);
          break;
        }
        case ERunType.SmartCathet: {
          this.run = runSmartCathet(changeStateFields).bind(this);
          break;
        }
      }
    }
  }
