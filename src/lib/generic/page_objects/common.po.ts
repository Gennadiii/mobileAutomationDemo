import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "./base.po";
import {Label} from "../components/label";


interface CommonPoInterface {
  errorMessage: Label;
}


class CommonPo extends BasePo implements CommonPoInterface {

  name = 'Common';

  errorMessage = new Label(this.ef.autoId('ErrorMessage'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }

}


export {CommonPo};
