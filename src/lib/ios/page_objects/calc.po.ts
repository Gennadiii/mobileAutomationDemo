import {CalcPo as GenericCalcPo} from "../../generic/page_objects/calc.po";
import {Button} from "../../generic/components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {IosOperationsPicker} from "../components/iosOperationsPicker";
import {IosInputField} from "../components/iosInputField";


interface CalcPoInterface extends GenericCalcPo {
  acknowledgeAlertButton: Button;
  declineAlertButton: Button;
  operationsPicker: IosOperationsPicker;
}


class CalcPo extends GenericCalcPo implements CalcPoInterface {

  name = 'IosCalc';

  // override
  firstNumField = new IosInputField(this.ef.autoId('firstNumber'));

  // override
  secondNumField = new IosInputField(this.ef.autoId('secondNumber'));

  acknowledgeAlertButton = new Button(this.ef.name(`Sure, I want OnePlus!`));
  declineAlertButton = new Button(this.ef.name(`No, I wanna suffer`));

  // override
  operationsPicker = new IosOperationsPicker(this.ef.autoId('operationsPicker'), this.ef);

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {CalcPo};
