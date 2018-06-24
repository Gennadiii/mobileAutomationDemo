import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {BaseLoginPo} from "./baseLogin.po";


interface SecondLoginPoInterface extends BaseLoginPo {
  optionsButton: Button;
}


class SecondLoginPo extends BaseLoginPo implements SecondLoginPoInterface {

  name = 'SecondLogin';

  optionsButton = new Button(this.ef.autoId('More options'));


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
