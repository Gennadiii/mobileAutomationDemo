import {helper} from "../../../helpers/helper";
import {Component} from "./component";


const log = helper.logger.get('InteractableComponent');


interface InteractableComponentInterface extends Component {
  // get
  getText: () => Promise<string>;
}


class InteractableComponent extends Component implements InteractableComponentInterface {

  constructor(protected ef) {
    super(ef);
  }

  // get
  async getText() {
    log.info(`Getting text`);
    return (await this.element).text();
  }

}


export {InteractableComponent};
