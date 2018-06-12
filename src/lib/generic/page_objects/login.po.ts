import {InputField} from "../components/inputField";
import {Button} from "../components/button";
import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface LoginPoInterface extends BasePagePo {
  loginField: InputField;
  passwordField: InputField;
}


class LoginPo extends BasePagePo implements LoginPoInterface {

  name = 'Login';

  loginField = new InputField(this.ef.all.className('android.widget.EditText', {index: 0}));

  passwordField = new InputField(this.ef.all.className('android.widget.EditText', {index: 1}));

  signInButton = new Button(this.ef.text(`SIGN IN`));


  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.signInButton];
  }

}


export {LoginPo};

