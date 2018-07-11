import {BasePo} from "./base.po";
import {InputField} from "../components/inputField";
import {Button} from "../components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";
import {OperationsPicker} from "../components/operationsPicker";


interface CalcPoInterface extends BasePo {
  firstNumField: InputField;
  secondNumField: InputField;
  operationsPicker: OperationsPicker;
  countButton: Button;
  resultLabel: Label;
}


class CalcPo extends BasePo implements CalcPoInterface {

  name = 'Calc';

  firstNumField = new InputField(this.ef.autoId('firstNumber'));

  secondNumField = new InputField(this.ef.autoId('secondNumber'));

  operationsPicker = new OperationsPicker(this.ef.autoId('operationsPicker'), this.ef);

  countButton = new Button(this.ef.autoId(`countButton`));

  resultLabel = new Label(this.ef.autoId('result'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.countButton];
  }

}


export {CalcPo};
