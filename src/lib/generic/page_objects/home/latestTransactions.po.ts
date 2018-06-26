import {Label} from "../../components/label";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {BaseTransactionsPo} from "../baseTransactions.po";


interface LatestTransactionsPoInterface extends BaseTransactionsPo {
  title: Label;
}


class LatestTransactionsPo extends BaseTransactionsPo implements LatestTransactionsPoInterface {

  name = 'Home - Latest transactions';

  title = new Label(this.ef.autoId('LatestActivityLabel'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.title];
  }

  get content() {
    return [this.title, this.items.getElementByIndex(0)];
  }

}


export {LatestTransactionsPo};
