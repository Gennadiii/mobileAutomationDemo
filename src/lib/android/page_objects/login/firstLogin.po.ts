import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {FirstLoginPo as GenericFirstLoginPo} from "../../../generic/page_objects/login/firstLogin.po";
import {InputField} from "../../../generic/components/inputField";


interface FirstLoginPoInterface extends GenericFirstLoginPo {
}


class FirstLoginPo extends GenericFirstLoginPo implements FirstLoginPoInterface {

  name = 'AndroidFirstLogin';

  loginField = new InputField(this.ef.all.className('android.widget.EditText', {index: 0}));
  passwordField = new InputField(this.ef.all.className('android.widget.EditText', {index: 1}));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {FirstLoginPo};
