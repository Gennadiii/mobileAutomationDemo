import {InputField} from "../../generic/components/inputField";
import {driver} from "../../../../index";


interface IosInputFieldInterface extends InputField {
}


class IosInputField extends InputField implements IosInputFieldInterface {

  constructor(protected ef) {
    super(ef);
  }

  async sendKeys(text) {
    await super.sendKeys(text);
    await driver.hideKeyboard();
  }

}

export {IosInputField};
