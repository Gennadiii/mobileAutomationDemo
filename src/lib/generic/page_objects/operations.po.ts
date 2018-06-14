import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {OperationsPicker} from "../components/operationsPicker";


interface OperationsPoInterface extends BasePagePo {
  operationsPicker: OperationsPicker;
}


class OperationsPo extends BasePagePo implements OperationsPoInterface {

  name = 'Calc - Operations';

  operationsPicker = new OperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {OperationsPo};
