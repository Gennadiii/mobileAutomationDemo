import {Label} from "../../components/label";
import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";


interface LatestTransactionsPoInterface extends BasePagePo {
  label: Label;
  latestAmount: Label;
}


class LatestTransactionsPo extends BasePagePo implements LatestTransactionsPoInterface {

  name = 'Home - Latest transactions';

  label = new Label(this.ef.text('Latest transactions'));

  latestAmount = new Label(this.ef.xpath('//android.widget' +
    '.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]//android.widget' +
    '.TextView[3]'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.label];
  }

}


export {LatestTransactionsPo};
