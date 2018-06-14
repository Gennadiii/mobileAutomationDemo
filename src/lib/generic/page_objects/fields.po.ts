import {BasePagePo} from "./basePage.po";
import {InputField} from "../components/inputField";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface FieldsPoInterface extends BasePagePo {
  firstNumField: InputField;
  secondNumField: InputField;
}


class FieldsPo extends BasePagePo implements FieldsPoInterface {

  name = 'Calc - Fields';

  firstNumField = new InputField(this.ef.accessibilityId('firstNumber'));

  secondNumField = new InputField(this.ef.accessibilityId('secondNumber'));


    constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.firstNumField];
  }

}


export {FieldsPo};
