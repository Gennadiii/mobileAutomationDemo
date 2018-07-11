import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "../../generic/page_objects/base.po";
import {IosOperationsPicker} from "../components/iosOperationsPicker";


interface OperationsPoInterface extends BasePo {
  operationsPicker: IosOperationsPicker;
}


class OperationsPo extends BasePo implements OperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new IosOperationsPicker(this.ef.autoId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {OperationsPo};
