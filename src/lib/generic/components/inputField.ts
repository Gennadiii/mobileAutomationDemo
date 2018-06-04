import {Component} from "./component";


interface InputFieldInterface extends Component {
  sendKeys: (text: string) => Promise<void>;
}


class InputField extends Component implements InputFieldInterface {

  constructor(protected ef) {
    super(ef);
  }

  async sendKeys(text) {
    await this.element.type(text);
  }

}

export {InputField};
