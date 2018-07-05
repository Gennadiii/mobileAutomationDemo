import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePagePo} from "../../generic/page_objects/basePage.po";
import {IosOperationsPicker} from "../components/iosOperationsPicker";


interface OperationsPoInterface extends BasePagePo {
  operationsPicker: IosOperationsPicker;
}


class OperationsPo extends BasePagePo implements OperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new IosOperationsPicker(this.ef.autoId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {OperationsPo};
