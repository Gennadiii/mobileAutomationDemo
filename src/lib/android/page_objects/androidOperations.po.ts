import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "../../generic/page_objects/basePage.po";
import {OperationsPicker} from "../../generic/components/operationsPicker";


interface AndroidOperationsPoInterface extends BasePagePo {
  operationsPicker: OperationsPicker;
}


class AndroidOperationsPo extends BasePagePo implements AndroidOperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new OperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {AndroidOperationsPo};
