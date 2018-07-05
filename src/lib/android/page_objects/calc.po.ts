import {CalcPo as GenericCalcPo} from "../../generic/page_objects/calc.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {OperationsPicker} from "../../generic/components/operationsPicker";


interface CalcPoInterface extends GenericCalcPo {
  operationsPicker: OperationsPicker;
}


class CalcPo extends GenericCalcPo implements CalcPoInterface {

  name = 'AndroidCalc';

  // override
  operationsPicker = new OperationsPicker(this.ef.autoId('operationsPicker'), this.ef);

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {CalcPo};
