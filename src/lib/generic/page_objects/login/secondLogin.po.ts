import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {InputField} from "../../components/inputField";
import {Button} from "../../components/button";
import {BasePagePo} from "../basePage.po";
import {BaseLoginPo} from "./baseLogin.po";
import {Label} from "../../components/label";


interface SecondLoginPoInterface extends BasePagePo {
  optionsButton: Button;
}


class SecondLoginPo extends BaseLoginPo implements SecondLoginPoInterface {

  name = 'SecondLogin';

  optionsButton = new Button(this.ef.autoId('More options'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.signInButton];
  }

}


export {SecondLoginPo};
