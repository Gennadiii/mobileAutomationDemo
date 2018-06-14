import {Button} from "../../generic/components/button";
import {ResultPo} from "../../generic/page_objects/result.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface IosResultPoInterface extends ResultPo {
  acknowledgeAlertButton: Button;
  declineAlertButton: Button;
}


class IosResultPo extends ResultPo implements IosResultPoInterface {

  name = 'iOS Calc - Result';

  acknowledgeAlertButton = new Button(this.ef.text(`Sure, I want OnePlus!`));
  declineAlertButton = new Button(this.ef.text(`No, I wanna suffer`));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {IosResultPo};
