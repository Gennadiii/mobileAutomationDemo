import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {IosInputField} from "../components/iosInputField";
import {FieldsPo as GenericFieldsPo} from "../../generic/page_objects/fields.po";


interface FieldsPoInterface extends GenericFieldsPo {
  firstNumField: IosInputField;
  secondNumField: IosInputField;
}


class FieldsPo extends GenericFieldsPo implements FieldsPoInterface {

  name = 'Calc - Fields';

  firstNumField = new IosInputField(this.ef.autoId('firstNumber'));

  secondNumField = new IosInputField(this.ef.autoId('secondNumber'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.firstNumField];
  }

}


export {FieldsPo};
