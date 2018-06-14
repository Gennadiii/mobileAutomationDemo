import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {IosInputField} from "../components/iosInputField";
import {FieldsPo} from "../../generic/page_objects/fields.po";


interface IosFieldsPoInterface extends FieldsPo {
  firstNumField: IosInputField;
  secondNumField: IosInputField;
}


class IosFieldsPo extends FieldsPo implements IosFieldsPoInterface {

  name = 'Calc - Fields';

  firstNumField = new IosInputField(this.ef.accessibilityId('firstNumber'));

  secondNumField = new IosInputField(this.ef.accessibilityId('secondNumber'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.firstNumField];
  }

}


export {IosFieldsPo};
