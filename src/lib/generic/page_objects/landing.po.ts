import {ElementFinderInterface} from "../../../helpers/element_finder/elementFinder.helper";
import {Label} from "../components/label";
import {BasePagePo} from "./basePage.po";


interface LandingPoInterface extends BasePagePo {
  latestTransactionsLabel: Label;
}


class LandingPo extends BasePagePo implements LandingPoInterface {

  name = 'Landing';

  constructor(private ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    return [this.latestTransactionsLabel];
  }

  latestTransactionsLabel = new Label(this.ef.text('Latest transactions'));

}


export {LandingPo};

