import {InteractableComponent} from "./interactableComponent";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../../helpers/helper";


const log = helper.logger.get('OperationsPicker');


interface OperationsPickerInterface extends InteractableComponent {
  sumOption: InteractableComponent;
  substructOption: InteractableComponent;
  multiplyOption: InteractableComponent;
  devideOption: InteractableComponent;
  changeOperationTo: () => Promise<operationsInterface>;
}


class OperationsPicker extends InteractableComponent implements OperationsPickerInterface {

  sumOption = new InteractableComponent(this.elementFinder.text('+'));
  substructOption = new InteractableComponent(this.elementFinder.text('-'));
  multiplyOption = new InteractableComponent(this.elementFinder.text('*'));
  devideOption = new InteractableComponent(this.elementFinder.text('/'));

  constructor(protected rootEf, protected elementFinder: ElementFinderInterface) {
    super(rootEf);
  }

  async changeOperationTo() {
    const self = this;
    return {
      async sum() {
        log.info(`Changing operation to +`);
        await self.sumOption.click();
      },
      async subtraction() {
        log.info(`Changing operation to -`);
        await self.substructOption.click();
      },
      async multiplication() {
        log.info(`Changing operation to *`);
        await self.multiplyOption.click();
      },
      async division() {
        log.info(`Changing operation to /`);
        await self.devideOption.click();
      },
    };
  }

}


export {OperationsPicker, operationsInterface};


interface operationsInterface {
  sum: () => Promise<void>;
  subtraction: () => Promise<void>;
  multiplication: () => Promise<void>;
  division: () => Promise<void>;
}
