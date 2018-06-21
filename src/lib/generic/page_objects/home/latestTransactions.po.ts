import {Label} from "../../components/label";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {BaseTransactionsPo} from "../baseTransactions.po";


interface LatestTransactionsPoInterface extends BaseTransactionsPo {
  label: Label;
  latestAmount: Label;
}


class LatestTransactionsPo extends BaseTransactionsPo implements LatestTransactionsPoInterface {

  name = 'Home - Latest transactions';

  label = new Label(this.ef.autoId('LatestActivityLabel'));

  latestAmount = new Label(this.ef.xpath('//android.widget' +
    '.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]//android.widget' +
    '.TextView[3]'));


  constructor(protected ef: ElementFinderInterface) {
    super(ef);
  }

  get staticElements() {
    return [this.label];
  }

}


export {LatestTransactionsPo};
