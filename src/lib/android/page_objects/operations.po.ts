import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "../../generic/page_objects/base.po";
import {OperationsPicker} from "../../generic/components/operationsPicker";


interface OperationsPoInterface extends BasePo {
  operationsPicker: OperationsPicker;
}


class OperationsPo extends BasePo implements OperationsPoInterface {

  name = 'Calc - Operations';
  operationsPicker = new OperationsPicker(this.ef.autoId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.operationsPicker];
  }

}


export {OperationsPo};
