import {helper} from "../../../helpers/helper";
import {Component} from "./component";


const log = helper.logger.get('InteractableComponent');


interface InteractableComponentInterface extends Component {
  // actions
  click: () => Promise<void>;
  // get
  getText: () => Promise<string>;
}


class InteractableComponent extends Component implements InteractableComponentInterface {

  constructor(protected ef) {
    super(ef);
  }


  // actions

  async click() {
    await this.element.click();
  }

}


export {InteractableComponent};
