import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../../components/button";
import {Checkbox} from "../../../components/checkbox";
import {componentProvider} from "../../../../../helpers/componentProvider.helper";


interface TypeFilterPoInterface extends BasePo {
  headerButton: Button;
  incomingPaymentsCheckbox: Checkbox;
  refundsCheckbox: Checkbox;
  withdrawalToBankCheckbox: Checkbox;
  cardTransactionsCheckbox: Checkbox;
  outgoingPaymentsCheckbox: Checkbox;
  accountFeesCheckbox: Checkbox;
}


// TODO change locators
class TypeFilterPo extends BasePo implements TypeFilterPoInterface {

  name = 'Transactions - Filters - Type';

  headerButton = componentProvider.generic.transactions.filters.headers.type(this.ef);
  incomingPaymentsCheckbox = new Checkbox(this.ef.text('Incoming payments'));
  refundsCheckbox = new Checkbox(this.ef.text('Refunds'));
  withdrawalToBankCheckbox = new Checkbox(this.ef.text('Withdrawal to bank'));
  cardTransactionsCheckbox = new Checkbox(this.ef.text('Card transactions'));
  outgoingPaymentsCheckbox = new Checkbox(this.ef.text('Outgoing payments'));
  accountFeesCheckbox = new Checkbox(this.ef.text('Account fees'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.incomingPaymentsCheckbox];
  }

  get content() {
    return [
      ...this.staticElements,
      this.refundsCheckbox,
      this.withdrawalToBankCheckbox,
      this.cardTransactionsCheckbox,
      this.outgoingPaymentsCheckbox,
      this.accountFeesCheckbox,
    ];
  }

}


export {TypeFilterPo};
