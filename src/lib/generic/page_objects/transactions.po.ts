import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../components/button";
import {Label} from "../components/label";
import {BaseTransactionsPo} from "./baseTransactions.po";


interface TransactionsPoInterface extends BaseTransactionsPo {
  title: Label;
  filtersButton: Button;
  items: () => any;
  runningBalances: () => any;
}


class TransactionsPo extends BaseTransactionsPo implements TransactionsPoInterface {

  title = new Label(this.ef.autoId('PageTitle'));
  filtersButton = new Button(this.ef.autoId('Filters'));
  items = this.ef.all.autoId('Activity');
  runningBalances = this.ef.all.autoId('ActivityRunningBalance');


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {TransactionsPo};
