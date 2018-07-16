import {Label} from "../components/label";
import {BasePo} from "./base.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {ComponentsList} from "../components/componentsList";
import {Section} from "../components/section";
import {LongComponentsList} from "../components/longComponentsList";
import {Link} from "../components/link";


interface BaseTransactionsPoInterface extends BasePo {
  title: Label;
  items: ComponentsList;
  dates: ComponentsList;
  descriptions: ComponentsList;
  amounts: ComponentsList;
  currencies: ComponentsList;
  statuses: ComponentsList;
  noTransactionsTitle: Label;
  noTransactionsText: Label;
  emptyTransactionsContent: Label[];
}


class BaseTransactionsPo extends BasePo implements BaseTransactionsPoInterface {

  name = 'Base transactions (SHOULD NOT APPEAR IN LOGS!)';

  title = new Label(this.ef.autoId('LatestActivityLabel'));
  items = new LongComponentsList(this.ef, Section, this.ef.all.autoId('ActivityItem', {partial: true}));
  dates = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityDateTitle'));
  descriptions = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityTitle'));
  amounts = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityAmount'));
  currencies = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityCurrency'));
  statuses = new ComponentsList(this.ef, Label, this.ef.all.autoId('ActivityStatus'));
  noTransactionsText = new Label(this.ef.autoId('NoTransactionsHomeText'));
  noTransactionsTitle = new Label(this.ef.autoId('NoTransactionsHomeTitle'));
  allTransactionsLink = new Link(this.ef.autoId('AllActivities'));

  emptyTransactionsContent = [this.noTransactionsTitle, this.noTransactionsText];


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BaseTransactionsPo};
