import {BasePo} from "../../base.po";
import {ElementFinderInterface} from "../../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../../components/button";
import {componentProvider} from "../../../../../helpers/componentProvider.helper";


interface StatusFilterPoInterface extends BasePo {
  headerButton: Button;
  allButton: Button;
  completedButton: Button;
  pendingButton: Button;
  canceledButton: Button;
}


// TODO change locators
class StatusFilterPo extends BasePo implements StatusFilterPoInterface {

  name = 'Transactions - Filters - Status';

  headerButton = componentProvider.generic.transactions.filters.headers.status(this.ef);
  allButton = new Button(this.ef.autoId('TBD'));
  completedButton = new Button(this.ef.text('Completed'));
  pendingButton = new Button(this.ef.text('Pending'));
  canceledButton = new Button(this.ef.text('Canceled'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }


  get staticElements() {
    return [this.completedButton];
  }

  get content() {
    return [
      ...this.staticElements,
      this.allButton,
      this.pendingButton,
      this.canceledButton,

    ];
  }

}


export {StatusFilterPo};
