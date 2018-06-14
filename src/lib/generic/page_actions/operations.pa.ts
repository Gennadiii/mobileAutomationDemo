import {BasePagePa} from "./basePage.pa";
import {OperationsPo} from "../page_objects/Operations.po";
import {operationsInterface} from "../components/operationsPicker";


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
