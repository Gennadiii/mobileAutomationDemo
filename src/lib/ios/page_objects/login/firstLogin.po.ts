import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {FirstLoginPo as GenericFirstLoginPo} from "../../../generic/page_objects/login/firstLogin.po";
import {InputField} from "../../../generic/components/inputField";
import {componentProvider} from "../../../../helpers/componentProvider.helper";


interface FirstLoginPoInterface extends GenericFirstLoginPo {
  loginField: InputField;
  passwordField: InputField;
}


class FirstLoginPo extends GenericFirstLoginPo implements FirstLoginPoInterface {

  name = 'IosFirstLogin';

  loginField = new InputField(this.ef.className('XCUIElementTypeTextField'));
  passwordField = componentProvider.ios.login.password(this.ef);


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {FirstLoginPo};
