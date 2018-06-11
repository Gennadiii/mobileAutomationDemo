import {InteractableComponent} from "./InteractableComponent";


interface InputFieldInterface extends InteractableComponent {
  sendKeys: (text: string) => Promise<void>;
}


class InputField extends InteractableComponent implements InputFieldInterface {

  constructor(protected ef) {
    super(ef);
  }

  async sendKeys(text) {
    await this.element.type(text);
  }

}

export {InputField};
