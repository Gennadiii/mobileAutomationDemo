import {helper} from "../../../helpers/helper";
import {OperationsPicker} from "../../generic/components/operationsPicker";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Component} from "../../generic/components/component";
import {driver} from "../../../../index";


const log = helper.logger.get('OperationsPicker');


interface IosOperationsPickerInterface extends OperationsPicker {
}


class IosOperationsPicker extends OperationsPicker implements IosOperationsPickerInterface {

  private picker = new Component(this.elementFinder.xpath('//XCUIElementTypePicker'));

  constructor(protected rootEf, protected elementFinder: ElementFinderInterface) {
    super(rootEf, elementFinder);
  }

  // override
  async changeOperationTo() {
    const self = this;
    return {
      async sum() {
        return;
      },
      async subtraction() {
        log.info(`Changing operation to -`);
        await self.scrollUp(1);
      },
      async multiplication() {
        log.info(`Changing operation to *`);
        await self.scrollUp(2);
      },
      async division() {
        log.info(`Changing operation to /`);
        await self.scrollUp(3);
      },
    };
  }

  private async scrollUp(numberOfElements: number) {
    log.info(`Scrolling up "${numberOfElements}" elements`);
    const pickerLocation = await this.picker.getLocation();
    const pickerSize = await this.picker.getSize();
    const pickerBottomPoint = pickerLocation.y + pickerSize.height;
    const scrollCoordinatesAmountForOneElement = pickerSize.height / 3.9;
    await driver.swipe(
      {
        startPoint: {
          x: pickerLocation.x + 20,
          y: pickerBottomPoint - 10
        },
        endPoint: {
          x: pickerLocation.x + 20,
          y: pickerBottomPoint - scrollCoordinatesAmountForOneElement * numberOfElements
        }
      });
  }

}


export {IosOperationsPicker};
