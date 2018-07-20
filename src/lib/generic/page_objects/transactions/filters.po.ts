import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {BasePo} from "../base.po";
import {Label} from "../../components/label";
import {Button} from "../../components/button";
import {componentProvider} from "../../../../helpers/componentProvider.helper";


const filters = componentProvider.generic.transactions.filters.headers;


interface FiltersPoInterface extends BasePo {
  pageTitle: Label;
  xButton: Button;
  clearButton: Button;
  applyButton: Button;
}


// TODO change locators
class FiltersPo extends BasePo implements FiltersPoInterface {

  name = 'Transactions - Filters';

  pageTitle = new Label(this.ef.autoId('PageTitle'));
  xButton = new Button(this.ef.text(''));
  clearButton = new Button(this.ef.text('CLEAR'));
  applyButton = new Button(this.ef.text('APPLY'));
  dateFilter = filters.date(this.ef);
  balanceFilter = filters.balance(this.ef);
  statusFilter = filters.status(this.ef);
  typeFilter = filters.type(this.ef);


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.pageTitle, this.xButton];
  }

  get content() {
    return [
      ...this.staticElements,
      this.clearButton,
      this.applyButton,
      this.dateFilter,
      this.balanceFilter,
      this.statusFilter,
      this.typeFilter,
    ];
  }

}


export {FiltersPo};
