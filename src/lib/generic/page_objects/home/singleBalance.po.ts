import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../../components/label";


interface SingleBalancePoInterface extends BasePagePo {
  balanceTitle: Label;
  balanceAmount: Label;
  cardTitle: Label;
  cardNumber: Label;
  cardAmount: Label;
  cardCurrency: Label;
}


class SingleBalancePo extends BasePagePo implements SingleBalancePoInterface {

  name = 'Home - Single Balance';

  balanceTitle = new Label(this.ef.autoId('OneBalanceTitle'));
  balanceAmount = new Label(this.ef.autoId('OneBalanceAmount'));
  cardTitle = new Label(this.ef.autoId('CardTitle'));
  cardNumber = new Label(this.ef.autoId('CardNumber'));
  cardAmount = new Label(this.ef.autoId('CardAmount'));
  cardCurrency = new Label(this.ef.autoId('CardCurrency'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.balanceTitle, this.balanceAmount];
  }

  get content() {
    return [
      this.balanceTitle,
      this.balanceAmount,
      this.cardTitle,
      this.cardNumber,
      this.cardAmount,
      this.cardCurrency,
    ];
  }

}


export {SingleBalancePo};
