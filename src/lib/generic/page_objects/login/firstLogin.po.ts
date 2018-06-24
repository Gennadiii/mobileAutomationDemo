import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../components/inputField";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";
import {Label} from "../../components/label";
import {Link} from "../../components/link";
import {BaseLoginPo} from "./baseLogin.po";


interface FirstLoginPoInterface extends BasePagePo {
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
  loginField = new InputField(this.ef.all.className('android.widget.EditText', {index: 0}));
  passwordField = new InputField(this.ef.all.className('android.widget.EditText', {index: 1}));
  signupLink = new Link(this.ef.autoId('Signup'));
  loginValidationError = new Label(this.ef.autoId('UsernameValidationError'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.signInButton];
    // return [this.signupLink]; // todo
  }

  get content() {
    return [
      this.languageButton,
      // this.userIcon,
      // this.userTitle,
      // this.userSubTitle,
      this.loginField,
      this.passwordField,
      // this.forgotPasswordLink,
      this.signInButton,
      // this.signupLink,
    ];
  }

}


export {FirstLoginPo};
