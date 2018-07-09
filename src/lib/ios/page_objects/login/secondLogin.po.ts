import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../../generic/components/inputField";
import {SecondLoginPo as GenericSecondLoginPo} from "../../../generic/page_objects/login/secondLogin.po";
import {Button} from "../../../generic/components/button";


interface SecondLoginPoInterface extends GenericSecondLoginPo {
}


class SecondLoginPo extends GenericSecondLoginPo implements SecondLoginPoInterface {

  name = 'IosSecondLogin';

  optionsButton = new Button(this.ef.autoId('Toolbar'));
  passwordField = new InputField(this.ef.className('XCUIElementTypeSecureTextField'));
  changeLanguageButton = new Button(this.ef.all.className('XCUIElementTypeButton', {index: 0}));
  switchAccountButton = new Button(this.ef.all.className('XCUIElementTypeButton', {index: 1}));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.optionsButton];
  }

  get content() {
    return [
      this.optionsButton,
      this.userIcon,
      this.userTitle,
      this.passwordField,
      this.forgotPasswordLink,
      this.signInButton,
    ];
  }

}


export {SecondLoginPo};
