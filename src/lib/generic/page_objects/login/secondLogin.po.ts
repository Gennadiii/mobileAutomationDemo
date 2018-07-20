import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BaseLoginPo} from "./baseLogin.po";


interface SecondLoginPoInterface extends BaseLoginPo {
  optionsButton: Button;
  changeLanguageButton: Button;
  switchAccountButton: Button;
}


class SecondLoginPo extends BaseLoginPo implements SecondLoginPoInterface {

  name = 'SecondLogin';

  optionsButton;
  changeLanguageButton;
  switchAccountButton;


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
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
