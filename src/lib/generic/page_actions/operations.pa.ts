import {BasePagePa} from "./basePage.pa";
import {operationsInterface} from "../components/operationsPicker";
import {AndroidOperationsPo} from "../../android/page_objects/androidOperations.po";


interface OperationsPaInterface extends BasePagePa {
  // actions
  changeOperationTo: () => Promise<operationsInterface>;
}


class OperationsPa extends BasePagePa implements OperationsPaInterface {

  constructor(public page: AndroidOperationsPo) {
    super();
  }


  // actions

  changeOperationTo() {
      return this.page.operationsPicker.changeOperationTo();
  }

}


export {OperationsPa};
