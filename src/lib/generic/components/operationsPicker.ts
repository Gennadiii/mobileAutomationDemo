import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../../helpers/helper";
import {InteractableComponent} from "./interactableComponent";


const log = helper.logger.get('AndroidOperationsPicker');


interface OperationsPickerInterface extends InteractableComponent {
  changeOperationTo: () => Promise<operationsInterface>;
}


class OperationsPicker extends InteractableComponent implements OperationsPickerInterface {

  private sumOption = new InteractableComponent(this.elementFinder.text('+'));
  private substructOption = new InteractableComponent(this.elementFinder.text('-'));
  private multiplyOption = new InteractableComponent(this.elementFinder.text('*'));
  private devideOption = new InteractableComponent(this.elementFinder.text('/'));

  constructor(protected rootEf, protected elementFinder: ElementFinderInterface) {
    super(rootEf);
  }

  async changeOperationTo() {
    await this.open();
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

  private async open() {
    log.info(`Opening picker`);
    await this.element.click();
  }

}


export {OperationsPicker, operationsInterface};


interface operationsInterface {
  sum: () => Promise<void>;
  subtraction: () => Promise<void>;
  multiplication: () => Promise<void>;
  division: () => Promise<void>;
}
