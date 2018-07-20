import {InteractableComponent} from "./InteractableComponent";


interface CheckboxInterface extends InteractableComponent {
  check: () => Promise<void>;
}


class Checkbox extends InteractableComponent implements CheckboxInterface {

  constructor(protected ef) {
    super(ef);
  }


  async check() {
    await this.click();
  }

}


export {Checkbox};
