import {AndroidOperationsPicker} from "../../generic/components/android/androidOperationsPicker";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {OperationsPo} from "../../generic/page_objects/operations.po";


interface AndroidOperationsPoInterface extends OperationsPo {
  operationsPicker: AndroidOperationsPicker;
}


class AndroidOperationsPo extends OperationsPo implements AndroidOperationsPoInterface {

  name = 'Calc - Operations';

  // override
  operationsPicker = new AndroidOperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {AndroidOperationsPo};
