import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {ComponentsList} from "../../components/componentsList";
import {Section} from "../../components/section";
import {Label} from "../../components/label";


interface BalanceSectionPoInterface extends BasePagePo {
  items: ComponentsList;
  currencies: ComponentsList;
  amounts: ComponentsList;
  moreButton: Button;
  lessButton: Button;
}


class BalanceSectionPo extends BasePagePo implements BalanceSectionPoInterface {

  name = 'Home - Balance section';

  items = new ComponentsList(this.ef, Section, this.ef.all.autoId('Balance'));
  currencies = new ComponentsList(this.ef, Label, this.ef.all.autoId('Currency'));
  amounts = new ComponentsList(this.ef, Label, this.ef.all.autoId('Amount'));
  moreButton = new Button(this.ef.autoId('ShowMore'));
  lessButton = new Button(this.ef.autoId('ShowLess'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

}


export {BalanceSectionPo};
