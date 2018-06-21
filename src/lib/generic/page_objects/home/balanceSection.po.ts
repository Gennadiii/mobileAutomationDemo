import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";


interface BalanceSectionPoInterface extends BasePagePo {
  items: () => any;
  currencies: () => any;
  amounts: () => any;
  moreButton: Button;
  lessButton: Button;
}


class BalanceSectionPo extends BasePagePo implements BalanceSectionPoInterface {

  items = this.ef.autoId('Balance');
  currencies = this.ef.autoId('Currency');
  amounts = this.ef.autoId('Amount');
  moreButton = new Button(this.ef.autoId('ShowMore'));
  lessButton = new Button(this.ef.autoId('ShowLess'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  get staticElements() {
    throw new Error('Balance section is not obligatory for Home page');
  }

}


export {BalanceSectionPo};
