import {InteractableComponent} from "./interactableComponent";


interface LabelInterface extends InteractableComponent {
}

class Label extends InteractableComponent implements LabelInterface {

  constructor(protected ef) {
    super(ef);
  }

}


export {Label};
