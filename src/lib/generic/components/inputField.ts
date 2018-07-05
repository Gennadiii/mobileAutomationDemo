import {InteractableComponent} from "./InteractableComponent";
import {driver} from "../../../../index";


interface InputFieldInterface extends InteractableComponent {
  sendKeys: (text: string) => Promise<void>;
  clear: () => Promise<void>;
}


class InputField extends InteractableComponent implements InputFieldInterface {

  private hideKeyboard;

  constructor(protected ef, params = {hideKeyboard: false}) {
    super(ef);
    const {hideKeyboard} = params;
    this.hideKeyboard = hideKeyboard;
  }

  async sendKeys(text) {
    await (await this.element).type(text);
    this.hideKeyboard && await driver.hideKeyboard();
  }

  async clear() {
    await (await this.element).clear();
  }

}


export {InputField};
