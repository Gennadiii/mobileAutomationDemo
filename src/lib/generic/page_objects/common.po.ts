import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";
import {Label} from "../components/label";
import {Icon} from "../components/icon";
import {Button} from "../components/button";


interface CommonPoInterface {
  errorMessage: Label;
  progressBar: Icon;
  backButton: Button;
}


class CommonPo extends BasePo implements CommonPoInterface {

  name = 'Common';

  errorMessage = new Label(this.ef.autoId('ErrorMessage'));
  progressBar: Icon;
  backButton: Button;


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {CommonPo};
