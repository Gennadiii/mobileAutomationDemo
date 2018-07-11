import {BasePo} from "./base.po";
import {InputField} from "../components/inputField";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface FieldsPoInterface extends BasePo {
  firstNumField: InputField;
  secondNumField: InputField;
}


class FieldsPo extends BasePo implements FieldsPoInterface {

  name = 'Calc - Fields';

  firstNumField = new InputField(this.ef.autoId('firstNumber'));

  secondNumField = new InputField(this.ef.autoId('secondNumber'));


    constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.firstNumField];
  }

}


export {FieldsPo};
