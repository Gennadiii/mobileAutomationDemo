import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {helper} from "../../../../helpers/helper";
import {driver} from "../../../../../index";
import {Component} from "../component";
import {operationsInterface, OperationsPicker} from "../operationsPicker";


const log = helper.logger.get('IosOperationsPicker');


interface IosOperationsPickerInterface extends OperationsPicker {
}


class IosOperationsPicker extends OperationsPicker implements IosOperationsPickerInterface {

  private picker = new Component(this.elementFinder.xpath('//XCUIElementTypePicker'));

  constructor(protected rootEf, protected elementFinder: ElementFinderInterface) {
    super(rootEf, elementFinder);
  }

  // override
  async changeOperationTo() {
    return {
      async sum() {
        return;
      },
      async subtraction() {
        log.info(`Changing operation to -`);
        await this.scrollUp(1);
      },
      async multiplication() {
        log.info(`Changing operation to *`);
        await this.scrollUp(2);
      },
      async division() {
        log.info(`Changing operation to /`);
        await this.scrollUp(3);
      },
    };
  }

  private async scrollUp(numberOfElements: number) {
    log.info(`Scrolling down "${numberOfElements}" elements`);
    const pickerLocation = await this.picker.getLocation();
    const pickerSize = await this.picker.getSize();
    const pickerBottomPoint = pickerLocation.y + pickerSize.height;
    const scrollCoordinatesAmountForOneElement = pickerSize.height / 3.9;
    await driver.swipe(
      {
        startPoint: {
          x: pickerLocation.x,
          y: pickerBottomPoint
        },
        endPoint: {
          x: pickerLocation.x,
          y: pickerBottomPoint - scrollCoordinatesAmountForOneElement * numberOfElements
        }
      });
  }

}


export {IosOperationsPicker, operationsInterface};
