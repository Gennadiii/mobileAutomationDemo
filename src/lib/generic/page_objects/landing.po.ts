import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";
import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";


interface LandingPoInterface extends BasePagePo {
  latestTransactionsLabel: Label;
}


class LandingPo extends BasePagePo implements LandingPoInterface {

  name = 'Landing';

  latestTransactionsLabel = new Label(this.ef.text('Latest transactions'));


  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.latestTransactionsLabel];
  }

}


export {LandingPo};

