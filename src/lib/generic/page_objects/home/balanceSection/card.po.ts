import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../../../components/label";


interface CardPoInterface extends BasePo {
  title: Label;
  number: Label;
  amount: Label;
  currency: Label;
}


class CardPo extends BasePo implements CardPoInterface {

  name = 'Home - Card';

  title = new Label(this.ef.autoId('CardTitle'));
  number = new Label(this.ef.autoId('CardNumber'));
  amount = new Label(this.ef.autoId('CardAmount'));
  currency = new Label(this.ef.autoId('CardCurrency'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.title, this.number];
  }

  get content() {
    return [
      ...this.staticElements,
      this.amount,
      this.currency,
    ];
  }

}


export {CardPo};
