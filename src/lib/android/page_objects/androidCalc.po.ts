import {CalcPo} from "../../generic/page_objects/calc.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {OperationsPicker} from "../../generic/components/operationsPicker";


interface AndroidCalcPoInterface extends CalcPo {
  operationsPicker: OperationsPicker;
}


class AndroidCalcPo extends CalcPo implements AndroidCalcPoInterface {

  name = 'AndroidCalc';

  // override
  operationsPicker = new OperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {AndroidCalcPo};
