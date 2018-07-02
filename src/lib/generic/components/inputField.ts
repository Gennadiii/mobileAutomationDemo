import {InteractableComponent} from "./InteractableComponent";


interface InputFieldInterface extends InteractableComponent {
  sendKeys: (text: string) => Promise<void>;
  clear: () => Promise<void>;
}


class InputField extends InteractableComponent implements InputFieldInterface {

  constructor(protected ef) {
    super(ef);
  }

  async sendKeys(text) {
    await (await this.element).type(text);
  }

  async clear() {
    await (await this.element).clear();
  }

}

export {InputField};
