import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../components/inputField";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";
import {BaseLoginPo} from "./baseLogin.po";


interface SecondLoginPoInterface extends BasePagePo {
  optionsButton: Button;
  passwordField: InputField;
}


class SecondLoginPo extends BaseLoginPo implements SecondLoginPoInterface {

  name = 'SecondLogin';

  optionsButton = new Button(this.ef.autoId('More options'));

  passwordField = new InputField(this.ef.className('android.widget.EditText'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.signInButton];
  }

}


export {SecondLoginPo};
