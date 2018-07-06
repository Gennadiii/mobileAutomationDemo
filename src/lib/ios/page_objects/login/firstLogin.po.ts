import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {FirstLoginPo as GenericFirstLoginPo} from "../../../generic/page_objects/login/firstLogin.po";
import {InputField} from "../../../generic/components/inputField";


interface FirstLoginPoInterface extends GenericFirstLoginPo {
}


class FirstLoginPo extends GenericFirstLoginPo implements FirstLoginPoInterface {

  name = 'FirstLogin';

  loginField = new InputField(this.ef.className('XCUIElementTypeTextField'));
  passwordField = new InputField(this.ef.className('XCUIElementTypeSecureTextField'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.signupLink];
  }

  get content() {
    return [
      this.languageButton,
      this.userIcon,
      this.userTitle,
      this.userSubTitle,
      this.loginField,
      this.passwordField,
      this.forgotPasswordLink,
      this.signInButton,
      this.signupLink,
    ];
  }

}


export {FirstLoginPo};
