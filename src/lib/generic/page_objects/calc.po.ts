import {BasePagePo} from "./basePage.po";
import {InputField} from "../components/inputField";
import {Button} from "../components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";
import {OperationsPicker} from "../components/operationsPicker";


interface CalcPoInterface extends BasePagePo {
  firstNumField: InputField;
  secondNumField: InputField;
  operationsPicker: OperationsPicker;
  countButton: Button;
  resultLabel: Label;
}


class CalcPo extends BasePagePo implements CalcPoInterface {

  name = 'Calc';

  firstNumField = new InputField(this.ef.accessibilityId('firstNumber'));

  secondNumField = new InputField(this.ef.accessibilityId('secondNumber'));

  operationsPicker = new OperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);

  countButton = new Button(this.ef.accessibilityId(`countButton`));

  resultLabel = new Label(this.ef.accessibilityId('result'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.countButton];
  }

}


export {CalcPo};
