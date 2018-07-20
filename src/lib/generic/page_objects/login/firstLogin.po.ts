import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../components/inputField";
import {Button} from "../../components/button";
import {BasePo} from "../base.po";
import {Label} from "../../components/label";
import {Link} from "../../components/link";
import {BaseLoginPo} from "./baseLogin.po";


interface FirstLoginPoInterface extends BasePo {
  languageButton: Button;
  userSubTitle: Label;
  loginField: InputField;
  passwordField: InputField;
  signupLink: Link;
  loginValidationError: Label;
}


class FirstLoginPo extends BaseLoginPo implements FirstLoginPoInterface {

  name = 'FirstLogin';

  languageButton = new Button(this.ef.autoId('ChangeLanguage'));
  userSubTitle = new Label(this.ef.autoId('UserSubtitle'));
  signupLink = new Link(this.ef.autoId('Signup'));
  loginValidationError = new Label(this.ef.autoId('UsernameValidationError'));

  loginField: InputField;


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.signupLink];
  }

  get content() {
    return [
      ...this.staticElements,
      this.languageButton,
      this.userIcon,
      this.userTitle,
      this.userSubTitle,
      this.loginField,
      this.passwordField,
      this.forgotPasswordLink,
      this.signInButton,
    ];
  }

}


export {FirstLoginPo};
