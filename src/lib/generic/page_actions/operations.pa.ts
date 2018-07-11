import {BasePa} from "./base.pa";
import {operationsInterface} from "../components/operationsPicker";
import {OperationsPo} from "../../android/page_objects/operations.po";


interface OperationsPaInterface extends BasePa {
  // actions
  changeOperationTo: () => Promise<operationsInterface>;
}


class OperationsPa extends BasePa implements OperationsPaInterface {

  constructor(public page: OperationsPo) {
    super();
  }


  // actions

  changeOperationTo() {
      return this.page.operationsPicker.changeOperationTo();
  }

}


export {OperationsPa};
