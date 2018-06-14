import {BasePagePo} from "./basePage.po";
import {Button} from "../components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";


interface ResultPoInterface extends BasePagePo {
  countButton: Button;
  resultLabel: Label;
}


class ResultPo extends BasePagePo implements ResultPoInterface {

  name = 'Calc - Result';

  countButton = new Button(this.ef.accessibilityId(`countButton`));

  resultLabel = new Label(this.ef.accessibilityId('result'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.countButton];
  }

}


export {ResultPo};
