import {CalcPo} from "../../generic/page_objects/calc.po";
import {Button} from "../../generic/components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {IosOperationsPicker} from "../../generic/components/ios/iosOperationsPicker";


interface IosCalcPoInterface extends CalcPo {
  acknowledgeAlertButton: Button;
  declineAlertButton: Button;
  operationsPicker: IosOperationsPicker;
}


class IosCalcPo extends CalcPo implements IosCalcPoInterface {

  name = 'IosCalc';

  acknowledgeAlertButton = new Button(this.ef.text(`Sure, I want OnePlus!`));
  declineAlertButton = new Button(this.ef.text(`No, I wanna suffer`));

  operationsPicker = new IosOperationsPicker(this.ef.accessibilityId('operationsPicker'), this.ef);

  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {IosCalcPo};
