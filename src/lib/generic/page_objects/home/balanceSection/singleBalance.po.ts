import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../../../components/label";
import {Section} from "../../../components/section";


interface SingleBalancePoInterface extends BasePo {
  section: Section;
  balanceTitle: Label;
  balanceAmount: Label;
  cardTitle: Label;
  cardNumber: Label;
  cardAmount: Label;
  cardCurrency: Label;
}


class SingleBalancePo extends BasePo implements SingleBalancePoInterface {

  name = 'Home - Single Balance';

  section = new Section(this.ef.autoId('SingleBalance'));
  balanceTitle = new Label(this.ef.autoId('OneBalanceTitle'));
  balanceAmount = new Label(this.ef.autoId('OneBalanceAmount'));
  cardTitle = new Label(this.ef.autoId('CardTitle'));
  cardNumber = new Label(this.ef.autoId('CardNumber'));
  cardAmount = new Label(this.ef.autoId('CardAmount'));
  cardCurrency = new Label(this.ef.autoId('CardCurrency'));

  balanceElements = [this.balanceTitle, this.balanceAmount];
  cardElements = [this.cardTitle, this.cardNumber, this.cardAmount, this.cardCurrency];


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.balanceTitle, this.balanceAmount];
  }

  get content() {
    return [
      ...this.staticElements,
      this.cardTitle,
      this.cardNumber,
      this.cardAmount,
      this.cardCurrency,
    ];
  }

}


export {SingleBalancePo};
