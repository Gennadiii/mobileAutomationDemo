import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../../generic/components/inputField";
import {SecondLoginPo as GenericSecondLoginPo} from "../../../generic/page_objects/login/secondLogin.po";
import {Button} from "../../../generic/components/button";
import {LoginProvider} from "../providers/loginProvider";


interface SecondLoginPoInterface extends GenericSecondLoginPo {
  optionsButton: Button;
  passwordField: InputField;
  changeLanguageButton: Button;
  switchAccountButton: Button;
}


class SecondLoginPo extends GenericSecondLoginPo implements SecondLoginPoInterface {

  name = 'IosSecondLogin';

  optionsButton = new Button(this.ef.autoId('Toolbar'));
  passwordField = LoginProvider.getPassword(this.ef);
  changeLanguageButton = new Button(this.ef.all.className('XCUIElementTypeButton', {index: 0}));
  switchAccountButton = new Button(this.ef.all.className('XCUIElementTypeButton', {index: 1}));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {SecondLoginPo};
