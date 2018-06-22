import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../components/button";
import {Label} from "../components/label";
import {BaseTransactionsPo} from "./baseTransactions.po";
import {ComponentsList} from "../components/componentsList";


interface TransactionsPoInterface extends BaseTransactionsPo {
  title: Label;
  filtersButton: Button;
  runningBalances: ComponentsList;
}


class TransactionsPo extends BaseTransactionsPo implements TransactionsPoInterface {

  title = new Label(this.ef.autoId('PageTitle'));
  filtersButton = new Button(this.ef.autoId('Filters'));
  runningBalances = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityRunningBalance'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

}


export {TransactionsPo};
