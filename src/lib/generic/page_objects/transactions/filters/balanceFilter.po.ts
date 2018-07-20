import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../../components/button";
import {LongComponentsList} from "../../../components/longComponentsList";
import {componentProvider} from "../../../../../helpers/componentProvider.helper";


interface BalanceFilterPoInterface extends BasePo {
  headerButton: Button;
  allButton: Button;
  currencyBalances: LongComponentsList;
  cards: LongComponentsList;
  bankAccounts: LongComponentsList;
}


// TODO change locators
class BalanceFilterPo extends BasePo implements BalanceFilterPoInterface {

  name = 'Transactions - Filters - Balance';

  headerButton = componentProvider.generic.transactions.filters.headers.balance(this.ef);
  allButton = new Button(this.ef.autoId('TBD'));
  currencyBalances = new LongComponentsList(this.ef, Button, this.ef.all.autoId('TBD'));
  cards = new LongComponentsList(this.ef, Button, this.ef.all.autoId('TBD'));
  bankAccounts = new LongComponentsList(this.ef, Button, this.ef.all.autoId('TBD'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.allButton]; // all content of this filter is optional
  }

  get content() {
    return [
      ...this.staticElements,
      this.allButton,
      this.currencyBalances.getElementByIndex(0),
      this.cards.getElementByIndex(0),
      this.bankAccounts.getElementByIndex(0),
    ];
  }

}


export {BalanceFilterPo};
