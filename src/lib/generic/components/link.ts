import {InteractableComponent} from "./interactableComponent";


interface LinkInterface extends InteractableComponent {
}

class Link extends InteractableComponent implements LinkInterface {

  constructor(protected ef) {
    super(ef);
  }

}


export {Link};
