import {Component} from "./component";


interface ButtonInterface extends Component {
  click: () => Promise<void>;
}


class Button extends Component implements ButtonInterface {

  constructor(protected ef) {
    super(ef);
  }

  async click() {
    await (await this.element).click();
  }

}

export {Button};
