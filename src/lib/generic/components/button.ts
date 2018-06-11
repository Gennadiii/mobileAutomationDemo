import {InteractableComponent} from "./InteractableComponent";


interface ButtonInterface extends InteractableComponent {
}


class Button extends InteractableComponent implements ButtonInterface {

  constructor(protected ef) {
    super(ef);
  }

}

export {Button};
