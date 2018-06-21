import {BasePagePo} from "../basePage.po";
import {ElementFinderInterface} from "../../../../helpers/element_finder/elementFinder.helper";
import {Button} from "../../components/button";
import {Component} from "../../components/component";


interface BalanceSectionPoInterface extends BasePagePo {
  items: () => any;
  currencies: () => any;
  amounts: () => any;
  moreButton: Button;
  lessButton: Button;
}


class BalanceSectionPo extends BasePagePo implements BalanceSectionPoInterface {

  name = 'Home - Balance section';

  items = this.ef.all.autoId('Balance');
  currencies = this.ef.all.autoId('Currency');
  amounts = this.ef.all.autoId('Amount');
  moreButton = new Button(this.ef.autoId('ShowMore'));
  lessButton = new Button(this.ef.autoId('ShowLess'));


  constructor(protected ef: ElementFinderInterface) {
    super();
  }

  getItemByIndex(index) {
    return new Component(this.ef.getEfFromElements(this.ef, this.items, index));
  }

  get staticElements() {
    return [];
  }

  get content() {
    return [this.getItemByIndex(0)];
  }

}


export {BalanceSectionPo};
