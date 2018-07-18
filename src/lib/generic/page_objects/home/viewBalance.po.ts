import {BasePo} from "../base.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../../components/label";


interface ViewBalancePoInterface extends BasePo {
  title: Label;
  amount: Label;
}


class ViewBalancePo extends BasePo implements ViewBalancePoInterface {

  name = 'Home - Balance section';

  title = new Label(this.ef.autoId('BalanceTitle'));
  amount = new Label(this.ef.autoId('BalanceAmount'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.title, this.amount];
  }

  get content() {
    return [this.title, this.amount];
  }

}


export {ViewBalancePo};
