import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {SecondLoginPo as GenericSecondLoginPo} from "../../../generic/page_objects/login/secondLogin.po";
import {Button} from "../../../generic/components/button";
import {InputField} from "../../../generic/components/inputField";


interface SecondLoginPoInterface extends GenericSecondLoginPo {
}


class SecondLoginPo extends GenericSecondLoginPo implements SecondLoginPoInterface {

  name = 'AndroidSecondLogin';

  passwordField = new InputField(this.ef.className('android.widget.EditText'));
  optionsButton = new Button(this.ef.autoId('More options'));
  changeLanguageButton = new Button(this.ef.all.xpath('//android.widget.TextView[@resource-id]', {index: 0}));
  switchAccountButton = new Button(this.ef.all.xpath('//android.widget.TextView[@resource-id]', {index: 1}));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.optionsButton];
  }

  get content() {
    return [this.optionsButton, ...super.content];
  }

}


export {SecondLoginPo};
