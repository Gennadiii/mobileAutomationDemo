import {helper} from "../../../helpers/helper";
import {Component} from "./component";


const log = helper.logger.get('InteractableComponent');


interface InteractableComponentInterface extends Component {
  // get
  getText: () => Promise<string>;
  // actions
  click: () => Promise<void>;
}


class InteractableComponent extends Component implements InteractableComponentInterface {

  constructor(protected ef) {
    super(ef);
  }

  // get

  async getText() {
    log.info(`Getting text`);
    return this.element.text();
  }


  // actions

  async click() {
    await this.element.click();
  }

}


export {InteractableComponent};
