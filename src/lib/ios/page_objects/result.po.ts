import {Button} from "../../generic/components/button";
import {ResultPo as GenericResultPo} from "../../generic/page_objects/result.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface ResultPoInterface extends GenericResultPo {
  acknowledgeAlertButton: Button;
  declineAlertButton: Button;
}


class ResultPo extends GenericResultPo implements ResultPoInterface {

  name = 'iOS Calc - Result';

  acknowledgeAlertButton = new Button(this.ef.name(`Sure, I want OnePlus!`));
  declineAlertButton = new Button(this.ef.name(`No, I wanna suffer`));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {ResultPo};
