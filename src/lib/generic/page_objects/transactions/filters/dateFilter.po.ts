import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../../components/button";
import {componentProvider} from "../../../../../helpers/componentProvider.helper";


interface DateFilterPoInterface extends BasePo {
  headerButton: Button;
  allButton: Button;
  thisMonthButton: Button;
  pats90DaysButton: Button;
  pastYearButton: Button;
}


// TODO change locators
class DateFilterPo extends BasePo implements DateFilterPoInterface {

  name = 'Transactions - Filters - Date';

  headerButton = componentProvider.generic.transactions.filters.headers.date(this.ef);
  allButton = new Button(this.ef.autoId('TBD'));
  thisMonthButton = new Button(this.ef.text('This month'));
  pats90DaysButton = new Button(this.ef.text('Past 90 days'));
  pastYearButton = new Button(this.ef.text('Past year'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.thisMonthButton];
  }

  get content() {
    return [
      ...this.staticElements,
      this.allButton,
      this.pats90DaysButton,
      this.pastYearButton,
    ];
  }

}


export {DateFilterPo};
