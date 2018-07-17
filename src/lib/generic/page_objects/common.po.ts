import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";
import {Label} from "../components/label";
import {Icon} from "../components/icon";


interface CommonPoInterface {
  errorMessage: Label;
  progressBar: Icon;
}


class CommonPo extends BasePo implements CommonPoInterface {

  name = 'Common';

  errorMessage = new Label(this.ef.autoId('ErrorMessage'));
  progressBar: Icon;


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {CommonPo};
