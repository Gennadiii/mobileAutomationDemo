import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {ComponentsList} from "../components/componentsList";
import {Section} from "../components/section";


interface BaseTransactionsPoInterface extends BasePagePo {
  items: ComponentsList;
  dates: ComponentsList;
  descriptions: ComponentsList;
  amounts: ComponentsList;
  currencies: ComponentsList;
  statuses: ComponentsList;
}


class BaseTransactionsPo extends BasePagePo implements BaseTransactionsPoInterface {

  name = 'Base transactions (SHOULD NOT APPEAR IN LOGS!)';

  items = new ComponentsList(this.ef, Section, this.ef.all.autoId('Activity'));
  dates = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityDateTitle'));
  descriptions = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityTitle'));
  amounts = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityAmount'));
  currencies = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityCurrency'));
  statuses = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityStatus'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BaseTransactionsPo};
