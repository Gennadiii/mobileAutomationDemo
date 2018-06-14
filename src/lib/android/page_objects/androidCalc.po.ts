import {CalcPo} from "../../generic/page_objects/calc.po";
import {AndroidOperationsPicker} from "../../generic/components/android/androidOperationsPicker";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface AndroidCalcPoInterface extends CalcPo {
}


class AndroidCalcPo extends CalcPo implements AndroidCalcPoInterface {

  name = 'AndroidCalc';

  // override
  operationsPicker = new AndroidOperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {AndroidCalcPo};
