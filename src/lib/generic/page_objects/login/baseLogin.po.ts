import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";
import {Icon} from "../../components/icon";
import {Label} from "../../components/label";
import {Link} from "../../components/link";
import {InputField} from "../../components/inputField";


interface BaseLoginPoInterface extends BasePagePo {
  userIcon: Icon;
  userTitle: Label;
  passwordField: InputField;
  forgotPasswordLink: Link;
  signInButton: Button;
  passwordValidationError: Label;
}


class BaseLoginPo extends BasePagePo implements BaseLoginPoInterface {

  name = 'BaseLogin';

  userIcon = new Icon(this.ef.autoId('UserIcon'));
  userTitle = new Label(this.ef.autoId('UserTitle'));
  forgotPasswordLink = new Link(this.ef.autoId('ForgotPassword'));
  signInButton = new Button(this.ef.autoId(`SignIn`));
  passwordValidationError = new Label(this.ef.autoId('PasswordValidationError'));

  passwordField;


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BaseLoginPo};
