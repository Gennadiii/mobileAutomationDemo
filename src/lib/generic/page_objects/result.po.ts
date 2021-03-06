import {BasePo} from "./base.po";
import {Button} from "../components/button";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";


interface ResultPoInterface extends BasePo {
  countButton: Button;
  resultLabel: Label;
}


class ResultPo extends BasePo implements ResultPoInterface {

  name = 'Calc - Result';

  countButton = new Button(this.ef.autoId(`countButton`));

  resultLabel = new Label(this.ef.autoId('result'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.countButton];
  }

}


export {ResultPo};
