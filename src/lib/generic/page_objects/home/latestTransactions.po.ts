import {Label} from "../../components/label";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {BaseTransactionsPo} from "../baseTransactions.po";
import {Link} from "../../components/link";


interface LatestTransactionsPoInterface extends BaseTransactionsPo {
  title: Label;
  allTransactionsLink: Link;
}


class LatestTransactionsPo extends BaseTransactionsPo implements LatestTransactionsPoInterface {

  name = 'Home - Latest transactions';

  title = new Label(this.ef.autoId('LatestActivityLabel'));
  allTransactionsLink = new Link(this.ef.autoId('AllActivities'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }


  get staticElements() {
    return [this.title];
  }

  get content() {
    return [
      this.title,
      this.items.getElementByIndex(0),
      this.dates.getElementByIndex(0),
      this.descriptions.getElementByIndex(0),
      this.currencies.getElementByIndex(0),
      this.amounts.getElementByIndex(0),
      this.statuses.getElementByIndex(0),
    ];
  }

}


export {LatestTransactionsPo};
