import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "../../generic/page_objects/basePage.po";
import {OperationsPicker} from "../../generic/components/operationsPicker";


interface OperationsPoInterface extends BasePagePo {
  operationsPicker: OperationsPicker;
}


class OperationsPo extends BasePagePo implements OperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new OperationsPicker(this.ef.autoId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {OperationsPo};
