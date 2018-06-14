import {OperationsPicker} from "../operationsPicker";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../../../helpers/helper";


const log = helper.logger.get('AndroidOperationsPicker');


interface AndroidOperationsPickerInterface extends OperationsPicker {
}


class AndroidOperationsPicker extends OperationsPicker implements AndroidOperationsPickerInterface {

  constructor(protected rootEf, protected elementFinder: ElementFinderInterface) {
    super(rootEf, elementFinder);
  }

  // override
  async changeOperationTo() {
    await this.open();
    return super.changeOperationTo();
  }

  protected async open() {
    log.info(`Opening picker`);
    await this.element.click();
  }

}


export {AndroidOperationsPicker};
