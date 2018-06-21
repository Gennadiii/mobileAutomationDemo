import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface BaseTransactionsPoInterface extends BasePagePo {
  items: () => any;
  dates: Label;
  titles: Label;
  amounts: Label;
  currencies: Label;
  statuses: Label;
}


class BaseTransactionsPo extends BasePagePo implements BaseTransactionsPoInterface {

  items = this.ef.all.autoId('Activity');
  dates = new Label(this.ef.all.autoId('ActivityDateTitle'));
  titles = new Label(this.ef.all.autoId('ActivityTitle'));
  amounts = new Label(this.ef.all.autoId('ActivityAmount'));
  currencies = new Label(this.ef.all.autoId('ActivityCurrency'));
  statuses = new Label(this.ef.all.autoId('ActivityStatus'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BaseTransactionsPo};
