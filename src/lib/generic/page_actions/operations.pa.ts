import {BasePagePa} from "./basePage.pa";
import {operationsInterface} from "../components/operationsPicker";
import {OperationsPo} from "../../android/page_objects/operations.po";


interface OperationsPaInterface extends BasePagePa {
  // actions
  changeOperationTo: () => Promise<operationsInterface>;
}


class OperationsPa extends BasePagePa implements OperationsPaInterface {

  constructor(public page: OperationsPo) {
    super();
  }


  // actions

  changeOperationTo() {
      return this.page.operationsPicker.changeOperationTo();
  }

}


export {OperationsPa};
