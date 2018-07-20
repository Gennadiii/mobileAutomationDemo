import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {Label} from "../../components/label";
import {BaseTransactionsPo} from "../baseTransactions.po";
import {ComponentsList} from "../../components/componentsList";


interface TransactionsPoInterface extends BaseTransactionsPo {
  pageTitle: Label;
  filtersButton: Button;
  runningBalances: ComponentsList;
  allTransactionsLabel: Label;
}


class TransactionsPo extends BaseTransactionsPo implements TransactionsPoInterface {

  name = 'Transactions';

  pageTitle = new Label(this.ef.autoId('PageTitle'));
  allTransactionsLabel = new Label(this.ef.autoId('AllTransactionsTitle'));
  filtersButton = new Button(this.ef.autoId('Filters'));
  runningBalances = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityRunningBalance'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }


  get staticElements() {
    return [this.pageTitle, this.filtersButton];
  }

  get content() {
    return [
      ...this.staticElements,
      this.allTransactionsLabel,
      ...super.content,
    ];
  }

}


export {TransactionsPo};
